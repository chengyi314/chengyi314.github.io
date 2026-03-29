# Linux 环境搭建

## 什么是 Linux

Linux 是一种自由和开放源代码的类 Unix 操作系统，由林纳斯·托瓦兹（Linus Torvalds）于 1991 年创建。它是目前服务器和嵌入式设备中最流行的操作系统之一。

## 选择适合的 Linux 发行版

### 适合初学者的发行版
- **Ubuntu**：用户友好，社区支持强大
- **Linux Mint**：基于 Ubuntu，更加易用
- **Fedora**：最新的技术和软件

### 安装方式

1. **双系统安装**
   - 在现有 Windows 系统基础上安装 Linux
   - 需要分区硬盘空间

2. **虚拟机安装**
   - 使用 VMware、VirtualBox 等虚拟机软件
   - 适合学习和测试

3. **WSL (Windows Subsystem for Linux)**
   - 在 Windows 10/11 上运行 Linux 子系统
   - 无需分区，安装简单

## 虚拟机安装步骤

### 1. 下载虚拟机软件
- **VirtualBox**：免费开源
- **VMware Workstation Player**：个人使用免费

### 2. 下载 Linux 发行版镜像
- 访问 [Ubuntu 官网](https://ubuntu.com/download/desktop) 下载最新版本
- 选择 LTS（长期支持）版本，如 Ubuntu 20.04 LTS

### 3. 创建虚拟机
1. 打开虚拟机软件，点击「新建」
2. 输入虚拟机名称，选择 Linux 类型
3. 分配内存（建议至少 2GB）
4. 创建虚拟硬盘（建议至少 20GB）
5. 选择下载好的 ISO 镜像文件
6. 启动虚拟机并按照安装向导操作

## WSL 安装步骤

### 1. 启用 WSL
- 打开 PowerShell 作为管理员
- 运行命令：`wsl --install`
- 重启计算机

### 2. 安装 Linux 发行版
- 打开 Microsoft Store
- 搜索并安装 Ubuntu
- 启动 Ubuntu 并设置用户名和密码

## 验证安装

打开终端，运行以下命令：

```bash
# 查看 Linux 版本
lsb_release -a

# 查看内核版本
uname -r

# 查看系统信息
cat /etc/os-release
```

## 后续步骤

- 学习基本的 Linux 命令
- 了解文件系统结构
- 熟悉包管理工具
