---
sidebar_position: 1
---
# Mint Installation

This guide provides a complete overview of installing **Linux Mint**, why it’s an excellent choice for developers, and how to prepare it for everyday use.

---

## 💡 Why Choose Linux Mint?

- Lightweight and highly stable (based on Ubuntu LTS)
- Excellent hardware compatibility out of the box
- Familiar interface for Windows or Ubuntu users
- Comes with essential programming tools preinstalled
- Great for customization and long-term usage

---

## 🧭 Installing Linux Mint

### Download Linux Mint ISO
Visit the official site:
👉 [https://linuxmint.com/download.php](https://linuxmint.com/download.php)

Choose the **Cinnamon Edition** for the best UI experience.

### Create a Bootable USB
Use tools like:
- **Balena Etcher**
- **Rufus (Windows)**
- **Startup Disk Creator (Ubuntu)**

Select the Mint ISO → Write to USB.

### Boot & Install
1. Restart your system and boot from USB.
2. Select **Start Linux Mint** to enter live mode.
3. Click **Install Linux Mint**.
4. Follow the prompts:
   - Choose your keyboard layout
   - Erase disk or dual-boot as needed
   - Create a username and password

After installation, reboot and remove your USB stick.

---

## ⚙️ Post-Installation Setup

### Update System Packages
```bash
sudo apt update && sudo apt upgrade -y
````

### Enable Firewall

```bash
sudo ufw enable
```

### Install Common Utilities

```bash
sudo apt install curl wget gpg unzip zip htop -y
```

---

## 🧰 System Overview

Linux Mint includes:

* **C / C++ Compilers**
* **Python 3**
* **Java (OpenJDK)**

These are ready to use out of the box for most development environments.

---

## ✅ Your System Is Ready

You now have a clean, stable Linux Mint base ready for development.
Next, continue to the **Dev Tools Setup** documentation.

````
