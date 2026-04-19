// Mobile menu toggle (simple)
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navUl = document.querySelector('.main-nav ul');
  if(toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
  }

  // Scroll reveal animation
  const fadeElements = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeElements.forEach(el => observer.observe(el));
});
// Header chỉ hiện khi cuộn lên đến đầu trang
let lastScrollTop = 0;
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Nếu cuộn xuống (so với vị trí trước đó) và cách đầu trang > 50px -> ẩn
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      header.classList.add('hide-header');
    } 
    // Nếu cuộn lên đến sát đầu trang (<= 5px) -> hiện lại
    else if (scrollTop <= 5) {
      header.classList.remove('hide-header');
    }
    lastScrollTop = scrollTop;
  });
}
