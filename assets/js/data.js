/* Deepjob 界面集 —— 唯一数据源
 * 新增界面：在 SCREENS 里追加一项即可，导航、画廊、查看页会自动更新。
 */

const SECTIONS = [
  {
    id: 'intro',
    num: '01',
    title: '开场与启动',
    en: 'Opening & Splash',
    desc: '从品牌开场动效到启动画面，用 1.5 秒建立第一印象，并区分已登录与未登录的进入路径。',
    color: '#FF7A50'
  },
  {
    id: 'onboarding',
    num: '02',
    title: '登录与引导',
    en: 'Sign in & Onboarding',
    desc: '登录、注册与三步引导：学历、技能、求职意愿，逐步建立可用于推荐的个人档案。',
    color: '#F2675E'
  },
  {
    id: 'jobs',
    num: '03',
    title: '职位与搜索',
    en: 'Jobs & Search',
    desc: '首页聚合搜索、广告位、快捷入口与个性化推荐；配合搜索结果、筛选面板与职位详情。',
    color: '#E8488D'
  },
  {
    id: 'apply',
    num: '04',
    title: '申请与状态',
    en: 'Apply & Status',
    desc: '从申请确认、提交成功到进度追踪与已储存职位，并统一定义载入、空态、错误与成功反馈。',
    color: '#B94BB0'
  },
  {
    id: 'growth',
    num: '05',
    title: '对话与成长',
    en: 'Coaching & Growth',
    desc: 'DIMOO 智能求职助手、就业课堂、情绪充电站与动态流，覆盖求职之外的能力与情绪支持。',
    color: '#8B4FC4'
  },
  {
    id: 'profile',
    num: '06',
    title: '个人中心',
    en: 'Profile & Settings',
    desc: '讯息、个人主页、职涯发展报告与设定，集中管理求职过程与账号偏好。',
    color: '#6E4BD1'
  }
];

const SCREENS = [
  {
    id: 's00a',
    no: '00A',
    file: 'images/s00a.png',
    title: '开场动画 A',
    desc: '品牌标识与标语逐层显现，用最少的元素交代产品定位。',
    section: 'intro'
  },
  {
    id: 's00b',
    no: '00B',
    file: 'images/s00b.png',
    title: '开场动画 B',
    desc: '动效延展，DIMOO 助手首次出场，建立陪伴感。',
    section: 'intro'
  },
  {
    id: 's00c',
    no: '00C',
    file: 'images/s00c.png',
    title: '开场动画 C',
    desc: '收尾动效，为登录页或首页的转场做准备。',
    section: 'intro'
  },
  {
    id: 's01',
    no: '01',
    file: 'images/s01.png',
    title: '启动画面',
    desc: '约 1.5 秒淡入，已登录者直接进入首页，未登录者进入示范登录。',
    section: 'intro'
  },
  {
    id: 's02',
    no: '02',
    file: 'images/s02.png',
    title: '示范登录',
    desc: '手机号或邮箱登录，并提供示范账号一键体验完整流程。',
    section: 'onboarding'
  },
  {
    id: 's03',
    no: '03',
    file: 'images/s03.png',
    title: '注册',
    desc: '手机号注册与验证码校验，文案明确说明资料用途。',
    section: 'onboarding'
  },
  {
    id: 's03b',
    no: '03+',
    file: 'images/s03b.png',
    title: '求职意愿画面',
    desc: '注册流程中的求职意愿补充页，决定后续推荐方向。',
    section: 'onboarding'
  },
  {
    id: 's04',
    no: '04',
    file: 'images/s04.png',
    title: '引导① 学历',
    desc: '引导第一步：填写学历与专业背景，支持在读状态。',
    section: 'onboarding'
  },
  {
    id: 's05',
    no: '05',
    file: 'images/s05.png',
    title: '引导② 技能',
    desc: '勾选已掌握的技能与工具，用于后续能力差距分析。',
    section: 'onboarding'
  },
  {
    id: 's06',
    no: '06',
    file: 'images/s06.png',
    title: '引导③ 意愿',
    desc: '设定期望职位、工作地点与工作模式，完成建档。',
    section: 'onboarding'
  },
  {
    id: 's07',
    no: '07',
    file: 'images/s07.png',
    title: '首页',
    desc: '搜索、广告轮播、快捷功能、DIMOO 入口与个性化职位推荐。',
    section: 'jobs'
  },
  {
    id: 's08',
    no: '08',
    file: 'images/s08.png',
    title: '搜索结果',
    desc: '关键词检索职位，结果卡片标注薪资、地点与技能标签。',
    section: 'jobs'
  },
  {
    id: 's24',
    no: '24',
    file: 'images/s24.png',
    title: '筛选面板',
    desc: '按地点、薪资、经验与工作模式组合筛选，实时预估结果数。',
    section: 'jobs'
  },
  {
    id: 's09',
    no: '09',
    file: 'images/s09.png',
    title: '职位详情',
    desc: '职位描述、公司信息与申请入口，附收藏与相似推荐。',
    section: 'jobs'
  },
  {
    id: 's10',
    no: '10',
    file: 'images/s10.png',
    title: '申请确认',
    desc: '提交前核对简历与附加资料，明确告知企业将看到的内容。',
    section: 'apply'
  },
  {
    id: 's11',
    no: '11',
    file: 'images/s11.png',
    title: '申请成功',
    desc: '提交成功反馈，并给出追踪进度与准备面试的下一步。',
    section: 'apply'
  },
  {
    id: 's18',
    no: '18',
    file: 'images/s18.png',
    title: '申请状态',
    desc: '追踪投递进度：已投递、已查看、邀请面试与未通过。',
    section: 'apply'
  },
  {
    id: 's19',
    no: '19',
    file: 'images/s19.png',
    title: '已储存职位',
    desc: '收藏的职位集中管理，支持移除与直接申请。',
    section: 'apply'
  },
  {
    id: 's25',
    no: '25',
    file: 'images/s25.png',
    title: '状态设计',
    desc: '载入、无资料、错误与操作成功四类状态的统一规范。',
    section: 'apply'
  },
  {
    id: 's12',
    no: '12',
    file: 'images/s12.png',
    title: 'DIMOO 对话',
    desc: '追问式对话，输出能力差距清单与课程推荐，并标注免责提示。',
    section: 'growth'
  },
  {
    id: 's13',
    no: '13',
    file: 'images/s13.png',
    title: '就业课堂',
    desc: '技能与求职课程列表，可按主题浏览并接续学习。',
    section: 'growth'
  },
  {
    id: 's14',
    no: '14',
    file: 'images/s14.png',
    title: '课程详情',
    desc: '课程大纲、时长与难度说明，一键开始学习。',
    section: 'growth'
  },
  {
    id: 's15',
    no: '15',
    file: 'images/s15.png',
    title: '情绪充电站',
    desc: '日常情绪支持：心情记录、呼吸练习与情境化疏导入口。',
    section: 'growth'
  },
  {
    id: 's16',
    no: '16',
    file: 'images/s16.png',
    title: '小羊对话',
    desc: '情绪陪伴角色对话，不评判地倾听并给出可执行的小步骤。',
    section: 'growth'
  },
  {
    id: 's17',
    no: '17',
    file: 'images/s17.png',
    title: '我的动态',
    desc: '关注的企业与求职动态流，串联课堂与社区内容。',
    section: 'growth'
  },
  {
    id: 's20',
    no: '20',
    file: 'images/s20.png',
    title: '讯息',
    desc: '与企业 HR 的会话列表，未读状态与时间清晰可辨。',
    section: 'profile'
  },
  {
    id: 's21',
    no: '21',
    file: 'images/s21.png',
    title: '我的',
    desc: '个人资料、申请记录、收藏与设置入口的聚合页。',
    section: 'profile'
  },
  {
    id: 's22',
    no: '22',
    file: 'images/s22.png',
    title: '职涯发展报告',
    desc: '能力雷达与阶段建议，把求职动作沉淀为长期规划。',
    section: 'profile'
  },
  {
    id: 's23',
    no: '23',
    file: 'images/s23.png',
    title: '设定',
    desc: '通知、隐私、数据导出与账号管理。',
    section: 'profile'
  }
];

/* 查看页顺序：按编号自然排序 */
const ORDER = SCREENS.map(s => s.id);
