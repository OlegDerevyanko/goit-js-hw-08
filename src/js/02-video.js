import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(event) {
  localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
};

const getLocalStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);

if (getLocalStorageValue === null || getLocalStorageValue === undefined) {
  return;
} else {
  player.setCurrentTime(getLocalStorageValue);
};

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('timeupdate', throttle(onPlay, 1000));

// function onPlay({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

