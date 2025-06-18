document.addEventListener('DOMContentLoaded', function() {

  const searchForm = document.getElementById('searchForm');
  const faqSearchInput = document.getElementById('faq-search');
  if (searchForm && faqSearchInput) {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
      const query = faqSearchInput.value.toLowerCase();
      const faqs = document.querySelectorAll('.faq-item');
      faqs.forEach(faq => {
        const question = faq.querySelector('.faq-question').textContent.toLowerCase();
        if (question.includes(query) || query === "") {
          faq.classList.remove('hidden');
        } else {
          faq.classList.add('hidden');
        }
      });
    });
  }


const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const userEmail = "tujijenge@gmail.com"; 
if (emailInput) emailInput.value = userEmail;

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    contactForm.reset();
    if (emailInput) emailInput.value = userEmail;

    alert(`Your message is submitted to ${userEmail}!`);
  });
}
 });