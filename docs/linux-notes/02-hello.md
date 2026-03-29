# Linux Hello World

## 第一个 Linux 命令

在 Linux 中，我们可以通过终端执行各种命令来与系统交互。让我们从最基本的命令开始。

## 打开终端

### Ubuntu/Debian
- 使用快捷键 `Ctrl+Alt+T`
- 或在应用程序菜单中搜索「终端」

### WSL
- 打开 Windows 终端
- 或在开始菜单中搜索「Ubuntu」

## 基本命令

### 1. 查看当前目录

```bash
pwd
```

### 2. 列出目录内容

```bash
ls
# 查看详细信息
ls -la
```

### 3. 切换目录

```bash
# 切换到主目录
cd ~

# 切换到上一级目录
cd ..

# 切换到指定目录
cd /home/user/Documents
```

### 4. 创建目录

```bash
mkdir hello-world
```

### 5. 创建文件

```bash
# 使用 echo 命令创建文件
echo "Hello, Linux!" > hello.txt

# 使用 nano 编辑器创建文件
nano hello.txt
```

### 6. 查看文件内容

```bash
# 使用 cat 命令查看
cat hello.txt

# 使用 less 命令查看（适合长文件）
less hello.txt
```

## 编写第一个 Shell 脚本

1. 创建脚本文件：

```bash
nano hello.sh
```

2. 输入以下内容：

```bash
#!/bin/bash
echo "Hello, Linux World!"
echo "Today is $(date)"
echo "Current user: $(whoami)"
echo "Current directory: $(pwd)"
```

3. 保存并退出（在 nano 中按 `Ctrl+X`，然后按 `Y` 确认保存）

4. 赋予执行权限：

```bash
chmod +x hello.sh
```

5. 运行脚本：

```bash
./hello.sh
```

## 输出示例

```
Hello, Linux World!
Today is Wed Mar 29 22:10:00 CST 2026
Current user: icy
Current directory: /home/icy
```

## 系统信息命令

### 查看系统版本

```bash
# Ubuntu/Debian
lsb_release -a

# 通用方法
cat /etc/os-release
```

### 查看内核版本

```bash
uname -r
```

### 查看硬件信息

```bash
# 查看 CPU 信息
lscpu

# 查看内存信息
free -h

# 查看磁盘信息
df -h
```

## 网络命令

### 查看 IP 地址

```bash
ip addr
```

### 测试网络连接

```bash
ping google.com
```

### 查看网络状态

```bash
netstat -tuln
```

## 总结

通过本文，你已经学会了：

- 如何打开终端
- 基本的 Linux 文件操作命令
- 如何创建和运行 Shell 脚本
- 如何查看系统信息
- 如何测试网络连接

这些是 Linux 系统的基础操作，掌握这些命令将帮助你更好地使用 Linux 系统。
