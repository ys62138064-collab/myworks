// ===== 通用交互 =====

// 消息页：状态筛选（全部 / 未读 / 面试约）
document.querySelectorAll('.chip').forEach(function (chip) {
  chip.addEventListener('click', function () {
    document.querySelectorAll('.chip').forEach(function (c) { c.classList.remove('active'); });
    chip.classList.add('active');
    var filter = chip.dataset.filter;
    document.querySelectorAll('.msg-item').forEach(function (item) {
      var type = item.dataset.type;
      var show = filter === 'all'
        || (filter === 'unread' && item.dataset.unread === '1')
        || (filter === 'interview' && type === 'interview' || type === 'system');
      item.classList.toggle('hidden', !show);
    });
  });
});

// 详情页：收藏与立即沟通的轻交互
var favBtn = document.querySelector('.fav-btn');
if (favBtn) {
  favBtn.addEventListener('click', function () {
    favBtn.classList.toggle('faved');
    var on = favBtn.classList.contains('faved');
    favBtn.style.color = on ? '#FF7A3D' : '';
    favBtn.title = on ? '已收藏' : '收藏';
  });
}

var chatBtn = document.querySelector('.btn-primary');
if (chatBtn) {
  chatBtn.addEventListener('click', function () {
    chatBtn.classList.add('done');
    chatBtn.textContent = '已发送沟通请求';
    setTimeout(function () {
      chatBtn.classList.remove('done');
      chatBtn.textContent = '立即沟通';
    }, 1800);
  });
}

// 首页：搜索框回车提示（演示）
var searchInput = document.querySelector('.search input');
if (searchInput) {
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && searchInput.value.trim()) {
      searchInput.value = '';
      searchInput.placeholder = '演示站点：搜索功能暂未接入';
      setTimeout(function () { searchInput.placeholder = '搜索职位、公司或技能'; }, 1500);
    }
  });
}
