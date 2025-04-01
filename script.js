document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  });
});