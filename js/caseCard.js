const cards = [
  {
    id: 1,
    img: 'assets/card/dixy.jpg',
    title: 'Online Батлер Дикси Заклинатели',
    subtitle: 'Игровое приложение',
    video: 'assets/video/video.mp4',
  },
  {
    id: 2,
    img: 'assets/card/constructor.jpg',
    title: 'Пятёрочка CTM Brands',
    subtitle: 'Конструктор сайтов',
    video: 'assets/videos/constructor.mp4',
  },
  {
    id: 3,
    img: 'assets/card/franchise.jpg',
    title: 'Пятёрочка Франшиза ',
    subtitle: 'Портал',
  },

  {
    id: 4,
    img: 'assets/card/brawl.jpg',
    title: 'Brawl Stars x Пятёрочка ',
    subtitle: 'Промолендинг • Web-view игра ',
  },

  {
    id: 5,
    img: 'assets/card/tech.jpg',
    title: 'Лента Tech',
    subtitle: 'Портал',
  },

  {
    id: 6,
    img: 'assets/card/smart.jpg',
    title: 'BBF Smart Home ',
    subtitle: 'Приложение',
  },

  {
    id: 7,
    img: 'assets/card/office.jpg',
    title: 'VK Office ',
    subtitle: 'Web-view 3D Тур',
  },

  {
    id: 8,
    img: 'assets/card/lego.jpg',
    title: 'LEGO x Пятёрочка ',
    subtitle: 'Игровое приложение',
  },

  {
    id: 9,
    img: 'assets/card/ozon.jpg',
    title: 'OZON DronBird ',
    subtitle: 'Web-view игра',
  },

  {
    id: 10,
    img: 'assets/card/actions.jpg',
    title: 'Экосистема для регистрации чеков ',
    subtitle: 'Админ панель • Личный кабинет',
  },

  {
    id: 11,
    img: 'assets/card/evraz.jpg',
    title: 'Интерактивная карта проектов EVRAZ ',
    subtitle: 'Trade Show',
  },

  {
    id: 12,
    img: 'assets/card/smf.jpg',
    title: 'Магнит x Союзмультфильм ',
    subtitle: 'Игровое приложение',
  },
  // Добавь видео для других карточек
];

const playImg = 'assets/pleer/play.svg';

const main = document.getElementById('main');
function displayCards() {
  const caseCardContainer = document.getElementById('case__subtitle');
  caseCardContainer.innerHTML = '';

  cards.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('case__card');

    cardElement.innerHTML = `
      <div class='cardd'>
        <img src="${card.img}" alt="${card.title}" />
        <h2 class="ubuntu">${card.title}</h2>
        <p class="ubuntu-400 gray">${card.subtitle}</p>
      </div>
      <div class="cardd-1">
        <button class='play-btn' data-video="${card.video}">
          <img src='${playImg}' />
        </button>
      </div>
    `;

    caseCardContainer.appendChild(cardElement);
  });

  // Добавляем обработчик событий на кнопки Play
  document.querySelectorAll('.play-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const videoSrc = this.getAttribute('data-video');
      openVideo(videoSrc);
      main.style.display = 'none';
    });
  });
}

function openVideo(videoSrc) {
  const videoContainer = document.getElementById('video-container');

  videoContainer.innerHTML = `
   <button class="close-video"><img src='assets/svg/left.svg' /></button>
    <video  autoplay>
      <source src="${videoSrc}" type="video/mp4">
    </video>
   
  `;

  videoContainer.classList.add('active');

  // Закрытие видео
  videoContainer.querySelector('.close-video').addEventListener('click', () => {
    videoContainer.classList.remove('active');
    videoContainer.innerHTML = ''; // Очищаем контейнер
    main.style.display = 'block';
  });
}

displayCards();
