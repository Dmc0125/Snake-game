let cvCoords;
let mouseStartCoords;
let isOnCanvas = false;

const isInCanvas = ({ clientX, clientY }, { top, bottom, right, left }) =>
  clientY >= top && clientY <= bottom && clientX >= left && clientX <= right;

document.addEventListener('mousedown', e => {
  if (!isInCanvas(e, cvCoords)) return;

  mouseStartCoords = {
    startX: e.clientX,
    startY: e.clientY,
  };

  isOnCanvas = true;
});

document.addEventListener('mouseup', e => {
  if (!isInCanvas(e, cvCoords) && !isOnCanvas) return;

  const { startX, startY } = mouseStartCoords;
  const { clientX, clientY } = e;

  const dirX = clientX - startX;
  const dirY = clientY - startY;

  // up = 38, down = 40, right = 39, left = 37
  let dir;

  if (dirX >= 0 && Math.abs(dirY) < Math.abs(dirX)) dir = 39;
  else if (dirX <= 0 && Math.abs(dirY) < Math.abs(dirX)) dir = 37;
  else if (dirY >= 0 && Math.abs(dirX) < Math.abs(dirY)) dir = 40;
  else if (dirY <= 0 && Math.abs(dirX) < Math.abs(dirY)) dir = 38;

  changeSnakeDir(dir);

  isOnCanvas = false;
});
