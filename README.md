<div align="center">

<img src="assets/screens/s01-splash.png" width="132" alt="Deepjob" /><br />

# Deepjob · UI Showcase

**AI 求职助手 · 32 张界面设计总览**

![Screens](https://img.shields.io/badge/界面-32%20张-A83376?style=flat-square)
![Pages](https://img.shields.io/badge/GitHub%20Pages-静态站点-FE6449?style=flat-square)
![Spec](https://img.shields.io/badge/设计稿-v1.0-101326?style=flat-square)

找到适合你的第一份工作 · 让能力被看见 · 让选择有方向

**[在线预览](https://<你的账号>.github.io/deepjob-ui/)** — 推送后由 GitHub Pages 自动托管

</div>

---

## 界面总览

完整交互式展示（模块筛选、灯箱放大、键盘/触摸切换）见 `index.html`。

| 模块 | 界面 |
|---|---|
| **01 開場與賬號** | 開場動畫 A/B/C · 動態節奏說明 · 啟動畫面 · 示範登入 · 註冊 · 引導①學歷 ②技能 ③意願 |
| **02 首頁與求職** | 首頁 · 搜尋結果 · 篩選面板 · 職位詳情 · 申請確認 · 申請成功 |
| **03 AI 與學習** | DIMOO 職涯對話 · 就業課堂 · 課程詳情 · 情緒充電站 · 小羊對話 |
| **04 我的動態** | 我的動態 · 申請狀態時間線 · 已儲存職位 · 訊息 · 我的 · 職涯發展報告 |
| **05 系統與規範** | 設定 · 狀態示例 · 求職意願畫面 · 設計規範 · 元件庫 |

### 精选界面

| 首页 | 职位详情 | DIMOO 对话 | 职涯发展报告 |
|:---:|:---:|:---:|:---:|
| <img src="assets/screens/s07-home.png" width="180" /> | <img src="assets/screens/s09-job-detail.png" width="180" /> | <img src="assets/screens/s12-dimoo-chat.png" width="180" /> | <img src="assets/screens/s22-career-report.png" width="180" /> |

## 部署到 GitHub Pages

```bash
git init && git add -A && git commit -m "feat: Deepjob UI showcase"
git branch -M main
git remote add origin https://github.com/<你的账号>/deepjob-ui.git
git push -u origin main
```

然后到仓库 **Settings → Pages → Source 选 `main` / `(root)`** 保存即可，约一分钟后访问：

```
https://<你的账号>.github.io/deepjob-ui/
```

纯静态站点（HTML + CSS + 原生 JS），无构建步骤、无依赖。

## 目录结构

```
.
├── index.html            # 展示站入口（GitHub Pages 默认页）
├── styles.css            # 视觉样式（基于 Deepjob 设计规范的品牌色）
├── app.js                # 数据、模块筛选与灯箱交互
├── assets/
│   └── screens/          # 32 张界面图（ASCII 文件名，避免 URL 编码问题）
└── README.md
```

## 设计规范摘要

| 令牌 | 值 |
|---|---|
| 主渐变 | `#FE6449 → #A83376` |
| Vibrant Orange | `#FE6449` |
| Deep Magenta | `#A83376` |
| Mint | `#BFF8DD` |
| Warm Cream | `#F8F6F1` |
| Charcoal | `#101326` |
| 字体 | Noto Sans TC，24/Bold 页面主题、17/Bold 区块、15/SemiBold 卡片 |

## 说明

界面图版权归 Deepjob 团队所有，仅用于设计评审与展示。
