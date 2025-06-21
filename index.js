// Search in faq
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('searchForm');
  const faqSearchInput = document.getElementById('faq-search');
  if (searchForm && faqSearchInput) {
      faqSearchInput.addEventListener('input', function() {
          const query = faqSearchInput.value.toLowerCase();
          document.querySelectorAll('.faq-item').forEach(faq => {
              const question = faq.querySelector('.faq-question').textContent.toLowerCase();
              if (question.includes(query) || query === "") {
                  faq.classList.remove('hidden');
              } else {
                  faq.classList.add('hidden');
              }
          });
      });

      searchForm.addEventListener('submit', function(event) {
          event.preventDefault();
      });
  }

  // Collapsible FAQ Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
          const faqItem = question.parentElement;
          faqItem.classList.toggle('open');
          document.querySelectorAll('.faq-item').forEach(item => {
              if (item !== faqItem && item.classList.contains('open')) {
                  item.classList.remove('open');
              }
          });
      });
  });
//   FAQ contact
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          contactForm.reset();
          alert('Your message is submitted to tujijenge@gmail.com!');
      });
  }

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const hamburgerBars = document.querySelector('.hamburger-bars');
  const hamburgerClose = document.querySelector('.hamburger-close');

  if (navToggle && navLinks) {
      navToggle.addEventListener('click', function() {
          navLinks.classList.toggle('open');
          navToggle.classList.toggle('open');
          if (navLinks.classList.contains('open')) {
              hamburgerBars.style.display = 'none';
              hamburgerClose.style.display = 'block';
          } else {
              hamburgerBars.style.display = 'flex';
              hamburgerClose.style.display = 'none';
          }
      });

      document.querySelectorAll('.links a').forEach(link => {
          link.addEventListener('click', () => {
              if (window.innerWidth <= 740) {
                  navLinks.classList.remove('open');
                  navToggle.classList.remove('open');
                  hamburgerBars.style.display = 'flex';
                  hamburgerClose.style.display = 'none';
              }
          });
      });
  }
});