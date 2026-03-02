document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (header && navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('menu-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) {
        header.classList.remove('menu-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  const forms = document.querySelectorAll('.lead-form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]')?.value?.trim() || 'there';
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = `Thanks, ${name}. Your request has been captured. A PTC advisor will reach out shortly.`;
      }
      form.reset();
    });
  });

  const yearNodes = document.querySelectorAll('[data-year]');
  yearNodes.forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
});
