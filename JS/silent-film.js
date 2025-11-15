// 无声电影时代页面交互功能
document.addEventListener('DOMContentLoaded', function() {
  // 1. 标签切换功能
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 移除所有活跃状态
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // 添加当前活跃状态
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // 2. 平滑滚动功能
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 减去导航栏高度
          behavior: 'smooth'
        });
      }
    });
  });

  // 3. 返回顶部按钮功能
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
    // 滚动超过500px显示返回顶部按钮
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 4. 图片加载失败处理
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      // 加载失败时显示默认图片
      this.src = '/图片/默认图片.jpg';
      this.alt = '图片加载失败';
    });
  });
});