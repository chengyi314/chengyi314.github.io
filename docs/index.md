---
layout: home
hero:
  name: 刘承奕的技术博客
  text: 记录成长 · 分享知识
  actions:
    - theme: alt
      text: 了解我
      link: /about

features:
  - title: 🚀 C++ 学习笔记
    details: 从基础到进阶，系统记录 C++ 语法、内存模型与多线程核心知识
    link: /cpp-notes/
  - title: 🐧 Linux 系统学习笔记
    details: Linux 系统原理、命令行操作、系统管理与网络配置
    link: /linux-notes/
---

<style>
/* 简约风自定义样式 */
.VPHome {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* 渐变标题 */
.VPHome .hero {
  text-align: left;
  margin-bottom: 3rem;
}

.VPHome .hero .name {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 副标题 */
.VPHome .hero .text {
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

/* 按钮布局 */
.VPHome .actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-bottom: 3rem;
}

/* 特性卡片布局 */
.VPHome .features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

/* 卡片样式 */
.VPHome .feature {
  padding: 2rem;
  border-radius: 12px;
  background: #f9fafb;
  transition: all 0.3s ease;
}

/* 卡片 hover 动效 */
.VPHome .feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.VPHome .feature .title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.VPHome .feature .details {
  color: #6b7280;
  font-size: 0.95rem;
}
</style>