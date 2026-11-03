/* Deepjob UI Showcase —— 数据、渲染与灯箱交互 */

const GROUPS = [
  { id: "boot",  name: "開場與賬號",  desc: "開場動畫、啟動、登入註冊與三步引導" },
  { id: "jobs",  name: "首頁與求職",  desc: "推薦流、搜尋篩選、職位詳情與投遞" },
  { id: "ai",    name: "AI 與學習",   desc: "DIMOO 職涯對話、就業課堂與情緒充電站" },
  { id: "me",    name: "我的動態",    desc: "動態牆、申請進度、訊息與職涯報告" },
  { id: "sys",   name: "系統與規範",  desc: "設定、狀態示例與設計系統" }
];

const SCREENS = [
  { file: "s00a-intro-a.png",        no: "00a", t: "開場動畫 A",        g: 0 },
  { file: "s00b-intro-b.png",        no: "00b", t: "開場動畫 B",        g: 0 },
  { file: "s00c-intro-c.png",        no: "00c", t: "開場動畫 C",        g: 0 },
  { file: "s00d-motion-guide.png",   no: "00d", t: "動態節奏說明",      g: 0 },
  { file: "s01-splash.png",          no: "01",  t: "啟動畫面",          g: 0 },
  { file: "s02-demo-login.png",      no: "02",  t: "示範登入",          g: 0 },
  { file: "s03-signup.png",          no: "03",  t: "註冊",              g: 0 },
  { file: "s04-onboard-degree.png",  no: "04",  t: "引導① 學歷",        g: 0 },
  { file: "s05-onboard-skills.png",  no: "05",  t: "引導② 技能",        g: 0 },
  { file: "s06-onboard-intent.png",  no: "06",  t: "引導③ 意願",        g: 0 },

  { file: "s07-home.png",            no: "07",  t: "首頁",              g: 1 },
  { file: "s08-search-results.png",  no: "08",  t: "搜尋結果",          g: 1 },
  { file: "s24-filter-panel.png",    no: "24",  t: "篩選面板",          g: 1 },
  { file: "s09-job-detail.png",      no: "09",  t: "職位詳情",          g: 1 },
  { file: "s10-apply-confirm.png",   no: "10",  t: "申請確認",          g: 1 },
  { file: "s11-apply-success.png",   no: "11",  t: "申請成功",          g: 1 },

  { file: "s12-dimoo-chat.png",      no: "12",  t: "DIMOO 職涯對話",    g: 2 },
  { file: "s13-classroom.png",       no: "13",  t: "就業課堂",          g: 2 },
  { file: "s14-course-detail.png",   no: "14",  t: "課程詳情",          g: 2 },
  { file: "s15-emotion-station.png", no: "15",  t: "情緒充電站",        g: 2 },
  { file: "s16-lamb-chat.png",       no: "16",  t: "小羊對話",          g: 2 },

  { file: "s17-feed.png",            no: "17",  t: "我的動態",          g: 3 },
  { file: "s18-apply-status.png",    no: "18",  t: "申請狀態時間線",    g: 3 },
  { file: "s19-saved-jobs.png",      no: "19",  t: "已儲存職位",        g: 3 },
  { file: "s20-messages.png",        no: "20",  t: "訊息",              g: 3 },
  { file: "s21-profile.png",         no: "21",  t: "我的",              g: 3 },
  { file: "s22-career-report.png",   no: "22",  t: "職涯發展報告",      g: 3 },

  { file: "s23-settings.png",        no: "23",  t: "設定",              g: 4 },
  { file: "s25-states.png",          no: "25",  t: "狀態示例",          g: 4 },
  { file: "job-intent.png",          no: "—",   t: "求職意願畫面",      g: 4 },
  { file: "design-system.png",       no: "00",  t: "設計規範",          g: 4 },
  { file: "components.png",          no: "LIB", t: "元件庫",            g: 4 }
];

const pad2 = (n) => String(n).padStart(2, "0");
const IMG_DIR = "assets/screens/";

const nav = document.getElementById("nav");
const app = document.getElementById("app");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbNo = document.getElementById("lbNo");
const lbTitle = document.getElementById("lbTitle");
const lbCount = document.getElementById("lbCount");

let visible = SCREENS.slice(); // 当前筛选后的列表（决定灯箱导航顺序）
let current = 0;

/* ---------- 模块筛选 ---------- */
function buildNav() {
  const mk = (label, value, active) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (active ? " active" : "");
    b.textContent = label;
    b.addEventListener("click", () => applyFilter(value));
    return b;
  };
  nav.appendChild(mk(`全部 ${SCREENS.length}`, -1, true));
  GROUPS.forEach((g, i) => {
    const n = SCREENS.filter((s) => s.g === i).length;
    nav.appendChild(mk(`${g.name} ${n}`, i, false));
  });
}

function applyFilter(groupIndex) {
  visible = groupIndex < 0 ? SCREENS.slice() : SCREENS.filter((s) => s.g === groupIndex);
  [...nav.children].forEach((c, i) => c.classList.toggle("active", i === groupIndex + 1));
  render();
}

/* ---------- 渲染 ---------- */
function render() {
  app.innerHTML = "";
  GROUPS.forEach((g, gi) => {
    const items = visible.filter((s) => s.g === gi);
    if (!items.length) return;
    const section = document.createElement("section");
    section.innerHTML = `
      <div class="head">
        <em>${pad2(gi + 1)}</em>
        <h2>${g.name}</h2>
        <span class="desc">${g.desc}</span>
        <span class="count">${items.length} 張</span>
      </div>
      <div class="grid"></div>`;
    const grid = section.querySelector(".grid");
    items.forEach((s) => {
      const globalIndex = visible.indexOf(s);
      const shot = document.createElement("div");
      shot.className = "shot";
      shot.setAttribute("role", "button");
      shot.tabIndex = 0;
      shot.setAttribute("aria-label", `放大檢視 ${s.t}`);
      shot.innerHTML = `
        <div class="phone">
          <span class="no">${s.no}</span>
          <img src="${IMG_DIR}${s.file}" alt="${s.no} ${s.t}" loading="lazy" />
        </div>
        <div class="cap"><i>${s.no}</i>${s.t}</div>`;
      const open = () => openLightbox(globalIndex);
      shot.addEventListener("click", open);
      shot.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      grid.appendChild(shot);
    });
    app.appendChild(section);
  });
  observeReveal();
}

/* ---------- 滚动入场 ---------- */
function observeReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px" }
  );
  app.querySelectorAll(".shot").forEach((el) => io.observe(el));
}

/* ---------- 灯箱 ---------- */
function openLightbox(index) {
  current = index;
  updateLightbox();
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function step(delta) {
  current = (current + delta + visible.length) % visible.length;
  updateLightbox();
}

function updateLightbox() {
  const s = visible[current];
  lbImg.src = IMG_DIR + s.file;
  lbImg.alt = `${s.no} ${s.t}`;
  lbNo.textContent = s.no;
  lbTitle.textContent = s.t;
  lbCount.textContent = `${current + 1} / ${visible.length}`;
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
lightbox.querySelector(".lb-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lb-prev").addEventListener("click", () => step(-1));
lightbox.querySelector(".lb-next").addEventListener("click", () => step(1));

/* 触摸滑动切换 */
let touchX = null;
lightbox.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 48) step(dx > 0 ? -1 : 1);
  touchX = null;
}, { passive: true });

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

/* ---------- init ---------- */
buildNav();
render();
