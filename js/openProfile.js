const openBtn = document.getElementById('about-open');
const closeBtn = document.getElementById('about-close');
const sidebar = document.getElementById('profile');

if (openBtn && closeBtn && sidebar) {
  openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    console.log('Hello');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
} else {
  console.error('Не найдены элементы #about-open, #close-btn или #profile');
}
