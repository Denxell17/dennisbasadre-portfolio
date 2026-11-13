// Blocking, same-origin head script: restore the explicit choice before first paint.
// Dark remains the default, regardless of the operating system's appearance.
(() => {
  'use strict';
  const key = 'portfolio-theme';
  function apply(value) {
    const theme = value === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'light' ? '#F8F7F3' : '#090f1c';
    return theme;
  }
  let saved;
  try { saved = localStorage.getItem(key); } catch { /* Storage can be disabled. */ }
  apply(saved);
  window.portfolioTheme = {
    apply,
    set(value) {
      const theme = apply(value);
      try { localStorage.setItem(key, theme); } catch { /* Switching still works. */ }
      return theme;
    }
  };
})();
