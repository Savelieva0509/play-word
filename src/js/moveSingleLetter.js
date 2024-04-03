function moveSingleLetter(letterElement) {
  let isDragging = false;
  let offsetX, offsetY;

  letterElement.addEventListener('mousedown', event => {
    isDragging = true;

    // Сохраняем начальные координаты буквы и координаты указателя мыши
    offsetX = event.clientX - letterElement.getBoundingClientRect().left;
    offsetY = event.clientY - letterElement.getBoundingClientRect().top;

    // Перемещаем букву в начальное положение
    letterElement.style.position = 'absolute';
    letterElement.style.zIndex = '1000';
    document.body.appendChild(letterElement);
    moveAt(event.pageX, event.pageY);
  });

  function moveAt(pageX, pageY) {
    // Перемещаем букву на новые координаты
    letterElement.style.left = pageX - offsetX + 'px';
    letterElement.style.top = pageY - offsetY + 'px';
  }

  function onMouseMove(event) {
    if (isDragging) {
      // Перемещаем букву в соответствии с положением указателя мыши
      moveAt(event.pageX, event.pageY);
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  letterElement.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Перемещаем букву в последнее место отпускания мыши при отпускании клавиши мыши
  letterElement.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMouseMove);
  });
}

export default moveSingleLetter;

