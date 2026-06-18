(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('langToggle');

  // Elements with data-fa / data-en pairs (text content swap)
  const textNodes = document.querySelectorAll('[data-fa][data-en]');

  function applyLanguage(lang) {
    root.lang = lang === 'fa' ? 'fa' : 'en';
    root.dir = lang === 'fa' ? 'rtl' : 'ltr';

    textNodes.forEach((el) => {
      const val = lang === 'fa' ? el.getAttribute('data-fa') : el.getAttribute('data-en');
      // Use innerHTML since some strings contain a safe &amp; entity
      el.innerHTML = val;
    });

    document.title = lang === 'fa'
      ? 'سارا احمدی — طراح گرافیک'
      : 'Sara Ahmadi — Graphic Designer';

    localStorage.setItem('portfolio-lang', lang);
  }

  toggleBtn.addEventListener('click', () => {
    const current = root.dir === 'rtl' ? 'fa' : 'en';
    const next = current === 'fa' ? 'en' : 'fa';
    applyLanguage(next);
  });

  // Restore saved preference, default to fa
  const saved = (function () {
    try { return localStorage.getItem('portfolio-lang'); } catch (e) { return null; }
  })();
  if (saved === 'en') applyLanguage('en');

  // Subtle reveal-on-scroll for section heads and work items
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealEls = document.querySelectorAll('.work-item, .service-row, .journal-item, .section-head');
    revealEls.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach((el) => observer.observe(el));
  }
})();
