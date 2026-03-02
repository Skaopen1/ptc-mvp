document.addEventListener('DOMContentLoaded', () => {
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
