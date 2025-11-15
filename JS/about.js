// 导航栏滚动固定效果
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('mainNav');
  
  // 监听滚动事件，控制导航栏样式
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.position = 'fixed';
      nav.style.top = '0';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.zIndex = '100';
      nav.style.backgroundColor = 'rgba(255,255,255,0.95)';
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      nav.style.transition = 'all 0.3s ease'; // 平滑过渡
    } else {
      nav.style.position = 'static';
      nav.style.backgroundColor = '';
      nav.style.boxShadow = 'none';
      nav.style.transition = 'all 0.3s ease';
    }
  });

  // 返回顶部按钮功能
  const backToTopBtn = document.getElementById('backToTop');
  
  // 滚动显示/隐藏按钮
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // 点击返回顶部（平滑滚动）
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 平滑滚动到锚点（如果页面有锚点链接）
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // 仅处理存在的锚点目标
      if (targetId !== '#' && document.querySelector(targetId)) {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});