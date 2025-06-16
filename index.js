function showPopup() {
  document.getElementById("myPopup").style.display = "block";
}

function hidePopup() {
  document.getElementById("myPopup").style.display = "none";
}

let questions =  document.querySelectorAll('.faq-question')
questions.forEach(detail => {
  detail.addEventListener('click', function () {
    const parent = this.parentElement;
    if (parent.classList.contains('open')) {
      parent.classList.remove('open');
    } 
    else{
      const que = parent.parentElement;
      que.querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
      parent.classList.add('open');
    }
  });
});

document.getElementById('searchForm').addEventListener('submit', function (click) {
  click.preventDefault();
});

document.getElementById('contactForm').addEventListener('submit', function (item) {
  item.preventDefault();
});
