const songs = [
  {
    number: 1,
    image: 'assets/card/lego.jpg',
    title: 'Лучшее использование игровых механик',

    place: '1 место',
  },
  {
    number: 2,
    image: 'assets/card/lego.jpg',
    title: 'Лучшее решение в AR / VR',
    author: 'NDA',
    place: '1 место',
  },
  {
    number: 3,
    image: 'assets/card/lego.jpg',
    title: 'Лучшее промоприложение',
    author: 'NDA',
    place: '2 место',
  },
  {
    number: 4,
    image: 'assets/card/lego.jpg',
    title: 'Лучшая ритейл-кампания',
    author: 'NDA',
    place: '2 место',
  },
  {
    number: 5,
    image: 'assets/card/lego.jpg',
    title: 'Лучшая кампания и креатив',
    author: '',
    place: '2 место',
  },
  {
    number: 6,
    image: 'assets/card/lego.jpg',
    title: 'Лучший mobile / AR / VR / IoT-проект',
    author: 'NDA',
    place: '2 место',
  },
  {
    number: 7,
    image: 'assets/card/lego.jpg',
    title: 'Лучший сайт для молодежи',
    author: '',
    place: '3 место',
  },
  {
    number: 8,
    image: 'assets/card/lego.jpg',
    title: 'Лучшая кампания и креатив за 2 недели',
    author: 'NDA',
    place: '3 место',
  },

  {
    number: 9,
    image: 'assets/card/lego.jpg',
    title: 'Лучшая онлайн-игра',
    author: 'NDA',
    place: '3 место',
  },

  {
    number: 10,
    image: 'assets/card/lego.jpg',
    title: 'Лучший международный <br> интегрированный проект',
    author: 'NDA',
    place: '3 место',
  },

  // Добавьте больше песен по необходимости
];

function displaySongs(limit = 5) {
  const musicsContainer = document.getElementById('musics');
  musicsContainer.innerHTML = '';

  songs.slice(0, limit).forEach((song) => {
    const songContainer = document.createElement('div');
    songContainer.classList.add('song-container');
    const authorClass = song.author ? 'song-author' : 'song-author hidden';

    songContainer.innerHTML = `
      <div class="song-number consolas">${song.number}</div>
      <div class="song-image"><img src="${song.image}" alt="${song.title}"></div>
      <div class="song-info">
        <h3 class="song-title ubuntu">${song.title}</h3>
        <p class=${authorClass}>${song.author}</p>
      </div>
      <div class="song-place consolas"><p>${song.place}</p></div>
    `;

    musicsContainer.appendChild(songContainer);
  });
}

function toggleSongs() {
  const musText = document.getElementById('mus-text');
  const isExpanded = musText.getAttribute('data-expanded') === 'true';

  if (isExpanded) {
    musText.innerHTML = 'Показать все <img src="assets/svg/down.svg" />';
    displaySongs(5);
  } else {
    musText.innerHTML = 'Скрыть <img src="assets/svg/up.svg" />';
    displaySongs(songs.length);
  }

  musText.setAttribute('data-expanded', !isExpanded);
}

document.getElementById('mus-text').addEventListener('click', toggleSongs);

displaySongs(5);
