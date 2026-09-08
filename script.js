document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }

  document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('.form-status');
  if (form && status) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = form.querySelector('#name').value.trim().split(' ')[0];
      status.textContent = `Thanks${name ? `, ${name}` : ''}! Your message is ready to send. We’ll be in touch soon.`;
      status.focus();
      form.reset();
    });
  }
});
