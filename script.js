const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
navToggle?.addEventListener('click', () => { const open = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', String(!open)); navToggle.querySelector('.sr-only').textContent = open ? 'Open navigation' : 'Close navigation'; nav?.classList.toggle('open', !open); });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); navToggle?.setAttribute('aria-expanded', 'false'); }));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav?.classList.contains('open')) { nav.classList.remove('open'); navToggle?.setAttribute('aria-expanded', 'false'); navToggle?.focus(); } });
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) reveals.forEach((element) => element.classList.add('visible'));
else { const observer = new IntersectionObserver((entries, revealObserver) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.12 }); reveals.forEach((element) => observer.observe(element)); }
const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
