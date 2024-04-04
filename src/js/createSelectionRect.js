import { selectedLetters } from './selectSettings';
function createSelectionRect(startX, startY, textField) {
  const selectionRect = document.createElement('div');
  selectionRect.classList.add('selection-rect');
  selectionRect.style.position = 'absolute';
  selectionRect.style.left = startX + 'px';
  selectionRect.style.top = startY + 'px';
  selectionRect.style.width = '0';
  selectionRect.style.height = '0';
  
  textField.appendChild(selectionRect);

  let isCreatingSelectionRect = false;
  let startCoords = { x: startX, y: startY };
  let endCoords = { x: startX, y: startY };

  function highlightText() {
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter => {
      const rect = letter.getBoundingClientRect();

      if (
        rect.left < Math.max(startCoords.x, endCoords.x) &&
        rect.right > Math.min(startCoords.x, endCoords.x) &&
        rect.top < Math.max(startCoords.y, endCoords.y) &&
        rect.bottom > Math.min(startCoords.y, endCoords.y)
      ) {
        letter.classList.add('selected-rect');
        selectedLetters.add(letter);
      } else {
        letter.classList.remove('selected-rect');
      }
    });
  }

  function updateSelection(event) {
    if (!isCreatingSelectionRect) return;

    endCoords = { x: event.clientX, y: event.clientY };

    const width = endCoords.x - startCoords.x;
    const height = endCoords.y - startCoords.y;
    selectionRect.style.left = Math.min(startCoords.x, endCoords.x) + 'px';
    selectionRect.style.top = Math.min(startCoords.y, endCoords.y) + 'px';
    selectionRect.style.width = Math.abs(width) + 'px';
    selectionRect.style.height = Math.abs(height) + 'px';

    highlightText();
  }

  function handleMouseDown(event) {
    console.log('handleMouseDown called');
    if (event.target.classList.contains('letter')) return;
    isCreatingSelectionRect = true;
    startCoords = { x: event.clientX, y: event.clientY };
    document.addEventListener('mousemove', updateSelection);
  }

  function handleMouseUp() {
    isCreatingSelectionRect = false;
    document.removeEventListener('mousemove', updateSelection);
  }

  textField.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('mouseup', handleMouseUp);
}

export default createSelectionRect;
