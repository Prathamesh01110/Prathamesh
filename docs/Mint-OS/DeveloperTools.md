---
sidebar_position: 2
---
# Developer Tools

Once Linux Mint is installed, this guide helps you configure your **development environment** — including Node.js, npm, VSCode, Git, Java, Android SDK, and more.

---

## ⚙️ Node.js & npm Upgrade

Mint includes an outdated Node version. Upgrade to the latest LTS:

```bash
sudo apt remove nodejs npm -y
sudo apt install curl -y
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
sudo bash n lts
sudo mv n /usr/local/bin/
npm install -g npm@latest
````

---

## 💻 Install Visual Studio Code

```bash
sudo apt install wget gpg
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code
```

---

## 🔧 Git & GitHub SSH Configuration

```bash
sudo apt install git -y
git config --global user.name "YourUserName"
git config --global user.email "YourEmailId"

ssh-keygen -t ed25519 -C "YourEmailId"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com
```

---

## ☕ Java Environment Variables

Mint includes OpenJDK. Set it globally for better compatibility:

```bash
sudo apt install openjdk-17-jdk -y #upgraded version

export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
source ~/.bashrc
```

---

## 🤖 Android SDK & ADB Tools

### Download SDK Command-Line Tools

```bash
wget https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip
```

### Setup Directories

```bash
rm -rf ~/Android/cmdline-tools
mkdir -p ~/Android/cmdline-tools/latest
unzip ~/Downloads/commandlinetools-linux-*.zip -d ~/Android/cmdline-tools/latest
mv ~/Android/cmdline-tools/latest/cmdline-tools/* ~/Android/cmdline-tools/latest/
rm -rf ~/Android/cmdline-tools/latest/cmdline-tools
```

### Add to PATH

```bash
export ANDROID_HOME=$HOME/Android
export ANDROID_SDK_ROOT=$HOME/Android
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools
```

### Accept Licenses

```bash
sdkmanager --licenses --sdk_root=$HOME/Android
```

### Install Packages

```bash
sdkmanager --sdk_root=$HOME/Android "platform-tools" "platforms;android-33" "build-tools;33.0.2"
sdkmanager --sdk_root=$HOME/Android "cmake;3.22.1" "ndk;25.2.9519653"
```

---

## 🧩 Additional Utilities

```bash
sudo apt install neofetch simplescreenrecorder chromium-browser -y
```

---

## 🚀 Example: Running a React Native App

```bash
cd ~/Documents/codes/project/CyberAI
npm run android
```

---

✅ You now have a fully configured development workstation on Linux Mint.
