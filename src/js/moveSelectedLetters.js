import { selectedLetters } from './selectSettings';

function moveSelectedLetters() {
  let isDragging = false;
  let offsetX, offsetY;

  // Обработчик события mousedown для начала перемещения букв
  document.addEventListener('mousedown', event => {
    const target = event.target;
    if (selectedLetters.size > 0 && target.classList.contains('letter')) {
      isDragging = true;

      // Получаем начальные координаты букв и координаты указателя мыши
      const rect = target.getBoundingClientRect();
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;

      // Перемещаем все выделенные буквы в начальное положение
      selectedLetters.forEach(letter => {
        letter.style.position = 'absolute';
        letter.style.zIndex = '1000';
        document.body.appendChild(letter);
        moveAt(event.pageX, event.pageY, letter);
      });
    }
  });

  // Функция для перемещения букв в новые координаты
  function moveAt(pageX, pageY, letter) {
    letter.style.left = pageX - offsetX + 'px';
    letter.style.top = pageY - offsetY + 'px';
  }

  // Обработчик события mousemove для перемещения букв
  function onMouseMove(event) {
    if (isDragging) {
      selectedLetters.forEach(letter => {
        moveAt(event.pageX, event.pageY, letter);
      });
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  // Обработчик события mouseup для завершения перемещения букв
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
    }
  });
}

export default moveSelectedLetters;
