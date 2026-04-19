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
