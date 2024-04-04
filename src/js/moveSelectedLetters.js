import { selectedLetters } from './selectSettings';

function moveSelectedLetters() {
  let isDragging = false;
  let initialMouseX, initialMouseY;
  let initialPositions = new Map(); // Сохраняем начальные координаты для каждой буквы

  document.addEventListener('mousedown', onMouseDown);

  function onMouseDown(event) {
    const target = event.target;
    const selectedLettersArray = Array.from(selectedLetters); // Создаем массив с текущим содержимым коллекции

    if (
      selectedLettersArray.length > 0 &&
      target.classList.contains('letter') &&
      !event.ctrlKey 
    ) {
      isDragging = true;

      initialMouseX = event.clientX;
      initialMouseY = event.clientY;

      selectedLettersArray.forEach(letter => {
        const rect = letter.getBoundingClientRect();
        const initialX = rect.left;
        const initialY = rect.top;
        initialPositions.set(letter, { x: initialX, y: initialY });
        letter.style.position = 'absolute';
        letter.style.zIndex = '1000';
      });

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  }

  function onMouseMove(event) {
    if (isDragging) {
      const deltaX = event.clientX - initialMouseX;
      const deltaY = event.clientY - initialMouseY;

      selectedLetters.forEach(letter => {
        const initialPosition = initialPositions.get(letter);
        const newLeft = initialPosition.x + deltaX;
        const newTop = initialPosition.y + deltaY;
        letter.style.left = `${newLeft}px`;
        letter.style.top = `${newTop}px`;
      });
    }
  }

  function onMouseUp() {
    isDragging = false;
    initialPositions.clear();
    selectedLetters.clear();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

export default moveSelectedLetters;
