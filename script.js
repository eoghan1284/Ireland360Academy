(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.dataset.open === 'true';
      nav.dataset.open = String(!open);
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      nav.dataset.open = 'false';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  document.querySelectorAll('a[href="contact.html"]').forEach((link) => {
    const label = (link.textContent || '').toLowerCase();
    if (label.includes('enquiry') || label.includes('enquire') || label.includes('discuss your group')) {
      link.setAttribute('href', 'contact.html#get-in-touch');
    }
  });

  document.querySelectorAll('.footer-bottom span').forEach((item) => {
    if ((item.textContent || '').includes('Static prototype')) {
      item.textContent = 'Language · STEM · Creativity · Culture';
    }
  });

})();
