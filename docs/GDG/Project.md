---
sidebar_position: 2
---

# Project
The page is under construction
```python
# ========================================
# SECTION 1: Setup and Imports
# ========================================
import kagglehub
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.applications import MobileNetV2
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path
from PIL import Image
from sklearn.model_selection import train_test_split
import os

print("TensorFlow version:", tf.__version__)

# ========================================
# SECTION 2: Download Dataset
# ========================================
DATASET_PATH = kagglehub.dataset_download("utkarshsaxenadn/car-vs-bike-classification-dataset")
print("Path to dataset files:", DATASET_PATH)

# Find the actual data directory
data_dir = Path(DATASET_PATH)
for root, dirs, files in os.walk(data_dir):
    if 'Car' in dirs and 'Bike' in dirs:
        data_dir = Path(root)
        break

print("Data directory:", data_dir)

# ========================================
# SECTION 3: Data Loading and Preprocessing
# ========================================
IMG_SIZE = 224
BATCH_SIZE = 32

from PIL import Image
import io

# Aggressive image loader - loads ANYTHING
def load_and_preprocess_image(file_path, label):
    """Load image with PIL fallback - never fails"""
    try:
        # Try TensorFlow first
        img = tf.io.read_file(file_path)
        img = tf.image.decode_jpeg(img, channels=3)
    except:
        try:
            # Try PNG
            img = tf.io.read_file(file_path)
            img = tf.image.decode_png(img, channels=3)
        except:
            try:
                # Nuclear option: use PIL
                img_file = file_path.numpy().decode('utf-8') if hasattr(file_path, 'numpy') else file_path
                pil_img = Image.open(img_file).convert('RGB')
                pil_img = pil_img.resize((IMG_SIZE, IMG_SIZE))
                img = np.array(pil_img)
                img = tf.constant(img)
            except:
                # Last resort: black image
                img = tf.zeros([IMG_SIZE, IMG_SIZE, 3], dtype=tf.uint8)
    
    img = tf.image.resize(img, [IMG_SIZE, IMG_SIZE])
    return img, label

# Build dataset using only VALID images
print("Scanning dataset and filtering valid images...")
valid_images = []
valid_labels = []

class_names = sorted([d for d in os.listdir(data_dir) 
                     if os.path.isdir(os.path.join(data_dir, d))])

for label_idx, class_name in enumerate(class_names):
    class_dir = os.path.join(data_dir, class_name)
    files = [f for f in os.listdir(class_dir) 
             if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp'))]
    
    for file in files:
        file_path = os.path.join(class_dir, file)
        try:
            # Quick validation with PIL
            img = Image.open(file_path)
            img.verify()
            valid_images.append(file_path)
            valid_labels.append(label_idx)
        except:
            # Skip silently
            pass

print(f"✓ Found {len(valid_images)} valid images from {len(class_names)} classes")
print("Classes:", class_names)

# Now create clean dataset
from sklearn.model_selection import train_test_split
train_imgs, val_imgs, train_lbls, val_lbls = train_test_split(
    valid_images, valid_labels, test_size=0.2, random_state=123
)

# Load images into memory arrays
def load_dataset(img_paths, labels):
    images = []
    for path in img_paths:
        try:
            img = Image.open(path).convert('RGB')
            img = img.resize((IMG_SIZE, IMG_SIZE))
            images.append(np.array(img))
        except:
            images.append(np.zeros((IMG_SIZE, IMG_SIZE, 3), dtype=np.uint8))
    return np.array(images), np.array(labels)

print("Loading training images...")
train_images, train_labels = load_dataset(train_imgs, train_lbls)
print("Loading validation images...")
val_images, val_labels = load_dataset(val_imgs, val_lbls)

# Create TF datasets
train_ds = tf.data.Dataset.from_tensor_slices((train_images, train_labels))
val_ds = tf.data.Dataset.from_tensor_slices((val_images, val_labels))

# Batch and optimize
AUTOTUNE = tf.data.AUTOTUNE
train_ds = train_ds.shuffle(1000).batch(BATCH_SIZE).prefetch(buffer_size=AUTOTUNE)
val_ds = val_ds.batch(BATCH_SIZE).prefetch(buffer_size=AUTOTUNE)

print("✓ Dataset ready - LET'S GO!")

# ========================================
# SECTION 4: Build Model (Transfer Learning)
# ========================================
def create_model():
    # Use MobileNetV2 for fast training
    base_model = MobileNetV2(
        input_shape=(IMG_SIZE, IMG_SIZE, 3),
        include_top=False,
        weights='imagenet'
    )
    base_model.trainable = False  # Freeze base model
    
    model = keras.Sequential([
        layers.Rescaling(1./127.5, offset=-1),  # Normalize to [-1, 1]
        base_model,
        layers.GlobalAveragePooling2D(),
        layers.Dropout(0.2),
        layers.Dense(1, activation='sigmoid')
    ])
    
    return model

model = create_model()

model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=0.001),
    loss='binary_crossentropy',
    metrics=['accuracy']
)

model.summary()

# ========================================
# SECTION 5: Train Model
# ========================================
print("\n🚀 Starting training...")

history = model.fit(
    train_ds,
    validation_data=val_ds,
    epochs=3,
    verbose=1
)

# ========================================
# SECTION 6: Evaluate and Visualize
# ========================================
# Plot training history
plt.figure(figsize=(12, 4))

plt.subplot(1, 2, 1)
plt.plot(history.history['accuracy'], label='Train Accuracy')
plt.plot(history.history['val_accuracy'], label='Val Accuracy')
plt.title('Model Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend()
plt.grid(True)

plt.subplot(1, 2, 2)
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Val Loss')
plt.title('Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()

print(f"\n✅ Final Training Accuracy: {history.history['accuracy'][-1]:.4f}")
print(f"✅ Final Validation Accuracy: {history.history['val_accuracy'][-1]:.4f}")
```
```python
# ========================================
# SECTION 7: Save Model (Correct way for TF 2.16+)
# ========================================
print("\n💾 Saving model...")

# 1. Save legacy H5 (optional)
model.save("car_bike_classifier.h5")

# 2. Save new recommended format
model.save("car_bike_model.keras")

# 3. Export SavedModel for TFLite / ML Kit / mobile deployment
model.export("car_bike_model")   # <-- FIXED LINE

print("\n🎉 Model saved successfully!")
print("📁 H5 model: car_bike_classifier.h5")
print("📁 Keras model: car_bike_model.keras")
print("📁 SavedModel directory: car_bike_model/")
```
```python
# ========================================
# SECTION 8: Test on New Image
# ========================================
def predict_image(image_path):
    # Load and preprocess image
    img = keras.preprocessing.image.load_img(
        image_path, 
        target_size=(IMG_SIZE, IMG_SIZE)
    )
    img_array = keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)  # Create batch
    
    # Make prediction
    predictions = model.predict(img_array, verbose=0)
    score = predictions[0][0]
    
    # Interpret result (assuming Bike=0, Car=1)
    if score > 0.5:
        result = "Car"
        confidence = score * 100
    else:
        result = "Bike"
        confidence = (1 - score) * 100
    
    # Display image with prediction
    plt.figure(figsize=(6, 6))
    plt.imshow(img)
    plt.axis('off')
    plt.title(f'Prediction: {result} ({confidence:.2f}% confidence)', 
              fontsize=16, fontweight='bold')
    plt.show()
    
    return result, confidence

# Test with your image (drag new.png into Colab files)
print("\n🔍 Testing on new image...")
result, confidence = predict_image('new3.png')
print(f"Result: {result} with {confidence:.2f}% confidence")
```