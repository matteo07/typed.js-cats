import { getRandomArbitrary, htmlToElement } from "./utils";

const FRAME_LENGTH = 2;

export default function spawnBall(id, onclick = () => {}) {
  const ballRun = createBall(id, onclick);

  frame(frame);
  function frame(fn) {
    ballRun();

    setTimeout(() =>fn(fn), FRAME_LENGTH );
  }
}

function createBall(id, onclick) {
  const contentDiv = document.querySelector('#content');
  const ball = htmlToElement(`<div class="ball" id="${ id }""></div>`);
  contentDiv.appendChild(ball);

  let y = getRandomArbitrary(10,90);
  let x = getRandomArbitrary(10,90);

  let xF = getRandomArbitrary(.1,.2);
  let yF = getRandomArbitrary(.1,.2);

  let rotation = 1;
  let ROTATION_SPEED = .1;

  ball.onclick = () => {
    ball.style.backgroundColor = '#53FF45';

    onclick();
    ball.onclick = () => {};
  };

  const nextY = () => {
    let nextPos = y + yF;
    if (nextPos > 100 ) {
      yF *= -1;
      nextPos = 200 - nextPos;
    } else if (nextPos < 0 ) {
      yF *= -1;
      nextPos = -nextPos;
    }
    return nextPos;
  };

  const nextX = () => {
    let nextPos = x + xF;
    if (nextPos > 100 ) {
      xF *= -1;
      nextPos = 200 - nextPos;
    } else if (nextPos < 0 ) {
      xF *= -1;
      nextPos = -nextPos;
    }
    return nextPos;
  };

  return () => {
    rotation += ROTATION_SPEED;
    x = nextX();
    y = nextY();
    ball.style.top = `${ x }%`;
    ball.style.left = `${ y }%`;
    ball.style.transform = `rotate(${rotation}deg)`;
  };
}
