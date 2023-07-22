import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);



player.setCurrentTime((localStorage.getItem('videoplayer-current-time')) || 0);

console.log(iframe);
console.log(localStorage.key('videoplayer-current-time'));

player.on('timeupdate', _.throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  console.log(data.seconds);
}
