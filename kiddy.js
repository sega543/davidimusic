// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  { threshold: 0.15 }
);

document.querySelectorAll('.about-body, .ep-item, .contact-body, .music-header')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.mixBlendMode = window.scrollY > 80 ? 'normal' : 'difference';
  nav.style.background = window.scrollY > 80 ? 'rgba(8,8,8,0.9)' : 'transparent';
  nav.style.backdropFilter = window.scrollY > 80 ? 'blur(12px)' : 'none';
  nav.style.borderBottom = window.scrollY > 80 ? '1px solid #1e1e1e' : 'none';
});
