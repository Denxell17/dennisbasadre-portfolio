const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if(e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width:741px)').addEventListener('change', e => { if(e.matches) closeMenu(); });
document.querySelectorAll('[data-language]').forEach(a => a.addEventListener('click', () => { try { localStorage.setItem('portfolio-language', a.dataset.language); } catch {} }));
// A language-link choice takes precedence; otherwise restore the saved preference.
try { if(localStorage.getItem('portfolio-language') === 'ja' && document.documentElement.lang === 'en') location.replace(new URL('ja/' + location.hash, location.href)); } catch {}

// Native dialog supplies modal keyboard containment and Escape behavior.
// Without dialog support (or JavaScript), image links retain their normal fallback.
if (typeof HTMLDialogElement !== 'undefined' && 'showModal' in HTMLDialogElement.prototype) {
  const japanese = document.documentElement.lang === 'ja';
  const viewer = document.createElement('dialog');
  viewer.className = 'image-viewer';
  viewer.setAttribute('aria-labelledby', 'viewer-title');
  const toolbar = document.createElement('div');
  toolbar.className = 'viewer-toolbar';
  const title = document.createElement('h2');
  title.id = 'viewer-title';
  title.className = 'viewer-title';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'viewer-close';
  close.textContent = japanese ? '閉じる ×' : 'Close ×';
  close.autofocus = true;
  const image = document.createElement('img');
  image.className = 'viewer-image';
  toolbar.append(title, close);
  viewer.append(toolbar, image);
  document.body.append(viewer);
  let opener;
  let previousOverflow;
  close.addEventListener('click', () => viewer.close());
  // Close is the viewer's only interactive control; keep Tab and Shift+Tab inside.
  viewer.addEventListener('keydown', event => {
    if (event.key === 'Tab') { event.preventDefault(); close.focus(); }
  });
  viewer.addEventListener('close', () => {
    document.documentElement.style.overflow = previousOverflow;
    opener?.focus({ preventScroll: true });
  });
  document.querySelectorAll('a:has(> img)').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      if(event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;
      const thumbnail = link.querySelector('img');
      image.src = link.href;
      image.alt = thumbnail.alt;
      title.textContent = thumbnail.alt || (japanese ? 'プロジェクト画像' : 'Project image');
      previousOverflow = document.documentElement.style.overflow;
      viewer.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
  });
}
