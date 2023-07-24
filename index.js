import './style.css';
import Draw from './draw.js';

let Stage = [
  [1, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 2, 0, 0, 2, 0],
];

let prop = {
  1: {
    Speed: 100, // high
    Attack: 20, // low
    BaiBain: 10, // ~
  },
  2: {
    Speed: 25,
    Attack: 50,
    BaiBain: 15,
  },
};

let mode = 'move';

function init() {
  Draw(Stage); // ステージ描画

  switch (mode) {
    case mode:
      break;
  }

  setTimeout(() => {
    requestAnimationFrame(init);
  });
}

init();
