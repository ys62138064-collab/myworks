# Deepjob · 求职 App 界面集

一套 **无需构建、直接托管** 的静态展示站，收录 Deepjob 求职 App 的 29 个界面（390 × 870），按求职流程分为 6 个章节，支持多页面导航、关键词搜索与大图浏览。

## 功能

- **多页面导航**：首页 → 6 个章节 → 任意界面，顶部导航常驻、自动高亮当前章节
- **大图查看**：`screen.html?id=s07`，键盘 `←` `→` 切换、移动端左右滑动、点击画面放大、复制链接、下载原图
- **章节内搜索**：按标题 / 描述 / 编号即时过滤
- **全部界面页**：一次浏览 29 屏
- **响应式**：桌面三栏 → 平板两栏 → 手机双栏，适配深浅背景与降低动效偏好
- **零依赖**：纯 HTML + CSS + 原生 JS，没有打包步骤、没有第三方库

## 目录结构

```
.
├── index.html              # 首页：章节入口 + 预览
├── screen.html             # 单屏大图查看（?id=s07）
├── pages/
│   ├── all.html            # 全部 29 屏
│   ├── intro.html          # 01 开场与启动
│   ├── onboarding.html     # 02 登录与引导
│   ├── jobs.html           # 03 职位与搜索
│   ├── apply.html          # 04 申请与状态
│   ├── growth.html         # 05 对话与成长
│   └── profile.html        # 06 个人中心
├── assets/
│   ├── css/style.css       # 设计系统与全部样式
│   ├── js/data.js          # 唯一数据源（章节 + 界面清单）
│   ├── js/main.js          # 导航、画廊、查看器交互
│   └── favicon.svg
├── images/                 # 29 张界面图（s00a.png … s25.png）
├── .nojekyll               # 让 GitHub Pages 不做 Jekyll 处理
└── README.md
```

## 本地预览

直接双击 `index.html` 也能看；推荐用本地服务器（避免个别浏览器对本地文件的限制）：

```bash
cd 项目目录
python3 -m http.server 8080
# 打开 http://localhost:8080
```

## 部署到 GitHub Pages

```bash
git init
git add .
git commit -m "Deepjob UI kit showcase"
git branch -M main
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

然后在仓库 **Settings → Pages**：

- Source 选择 **Deploy from a branch**
- Branch 选 **main**，目录选 **/ (root)**，保存
- 数十秒后访问 `https://<用户名>.github.io/<仓库名>/`

> 这是纯静态站点，也可以用 Vercel、Netlify、Cloudflare Pages 直接拖拽部署。

## 新增 / 修改界面

1. 把新图放进 `images/`（建议保持 390 × 870 或相近比例）；
2. 打开 `assets/js/data.js`，在 `SCREENS` 末尾追加一项：

```js
{
  id: 's26',            // 唯一标识，同时是查看页参数
  no: '26',             // 卡片角标
  file: 'images/s26.png',
  title: '面试邀约',
  desc: '一句话说明这个画面解决了什么问题。',
  section: 'apply'      // 归属章节 id
}
```

导航、章节卡片、画廊、查看器、上一张 / 下一张会自动同步，无需改动其他文件。

## 说明

- 所有图片来自设计稿，仅用于展示与原型演示；其中企业、职位、人物均为虚构示例。
- 界面中的 AI 建议与情绪支持文案均标注了免责提示，不代表专业服务。
