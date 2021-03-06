let cvCoords;
let mouseStartCoords;

const isInCanvas = ({ clientX, clientY }, { top, bottom, right, left }) =>
  clientY >= top && clientY <= bottom && clientX >= left && clientX <= right;

document.addEventListener('touchstart', e => {
  if (!isInCanvas(e.touches[0], cvCoords)) return;

  mouseStartCoords = {
    startX: e.touches[0].clientX,
    startY: e.touches[0].clientY,
  };
});

document.addEventListener('touchend', e => {
  if (!isInCanvas(e.changedTouches[0], cvCoords) && !isOnCanvas) return;

  const { startX, startY } = mouseStartCoords;
  const { clientX, clientY } = e.changedTouches[0];

  const dirX = clientX - startX;
  const dirY = clientY - startY;

  // up = 38, down = 40, right = 39, left = 37
  let dir;

  if (dirX >= 0 && Math.abs(dirY) < Math.abs(dirX)) dir = 39;
  else if (dirX <= 0 && Math.abs(dirY) < Math.abs(dirX)) dir = 37;
  else if (dirY >= 0 && Math.abs(dirX) < Math.abs(dirY)) dir = 40;
  else if (dirY <= 0 && Math.abs(dirX) < Math.abs(dirY)) dir = 38;

  if (dir) changeSnakeDir(dir);
});
