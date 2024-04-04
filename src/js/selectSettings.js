import selectSingleLetter from './selectSingleLetter';
import selectMultipleLetters from './selectMultipleLetters';
import createSelectionRect from './createSelectionRect';
import clearSelection from './clearSelection';

const selectedLetters = new Set();
console.log(selectedLetters);

function selectSettings() {
  const textField = document.querySelector('.text-field');

  // Переносим вызов createSelectionRect в начало функции
  createSelectionRect(0, 0, textField);

  textField.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', event => {
      const target = event.target;
      // Вызываем createSelectionRect при клике на пустом месте без нажатия Ctrl
      if (!event.ctrlKey && target.classList.contains('letter')) {
        selectSingleLetter(textField).toggleSelection(target);
      } else {
        selectMultipleLetters(textField);
      }
    });
  });

  document.addEventListener('click', event => {
    if (!textField.contains(event.target) && !event.ctrlKey) {
      createSelectionRect(0, 0, textField);
      clearSelection(event, textField);
    }
  });
}

export { selectSettings, selectedLetters };
