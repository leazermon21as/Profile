let currentSongIndex = 0;
const audio = document.getElementById('audio');
const playBtn = document.getElementById('pause');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress');
const volumeBtn = document.getElementById('volume');
const volumeBar = document.getElementById('volume-progress');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const cover = document.getElementById('cover');
const volumeSlider = document.getElementById('volumeSlider');

let isPlaying = false;
let isMuted = false;

let audioPlay;
audioPlay = document.querySelector('#audio');

playBtn.addEventListener('click', togglePlay);
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    togglePlay();
  }
});

// Стоп и Пауза для плеера
function togglePlay() {
  if (isPlaying) {
    playBtn.innerHTML = '<img src="assets/pleer/play.svg"/>';
    audioPlay.pause();
  } else {
    playBtn.innerHTML = '<img src="assets/pleer/pause.svg"/>';
    audioPlay.play();
  }
  isPlaying = !isPlaying;
}

// Регулировка аудио
volumeBtn.addEventListener('click', () => {
  isMuted = !isMuted;
  audio.muted = isMuted;

  volumeBtn.innerHTML = isMuted
    ? '<img src="assets/pleer/volume-off.svg"/>'
    : '<img src="assets/pleer/volume-out.svg"/>';

  // Обновляем положение ползунка
  volumeSlider.value = isMuted ? 0 : audio.volume;
  volumeProgress.style.width = `${volumeSlider.value * 100}%`;
});

// Прогресс бар для отслеживания аудио
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.background = `linear-gradient(to right, rgb(255, 255, 255) ${progress}%, rgba(72, 63, 82, 0.14) ${progress}%)`;
    progressBar.value = progress;
  }
});

// Позволяет перематывать аудио по клику на прогресс-бар
progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

const volumeProgress = document.querySelector('.volume__progress');

volumeSlider.addEventListener('input', () => {
  const volume = volumeSlider.value;
  audio.volume = volume;
  volumeProgress.style.width = `${volume * 100}%`;

  volumeBtn.innerHTML =
    volume == 0
      ? '<img src="assets/pleer/volume-off.svg"/>'
      : '<img src="assets/pleer/volume-out.svg"/>';
});
