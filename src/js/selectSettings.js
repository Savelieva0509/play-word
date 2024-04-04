import selectSingleLetter from './selectSingleLetter';
import selectMultipleLetters from './selectMultipleLetters';
import createSelectionRect from './createSelectionRect';
import clearSelection from './clearSelection';
const selectedLetters = new Set();

function selectSettings() {
  const textField = document.querySelector('.text-field');

  const toggleSingleSelection = selectSingleLetter(textField);

  textField.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', event => {
      const target = event.target;
      if (!event.ctrlKey && target.classList.contains('letter')) {
        toggleSingleSelection(target);
        selectMultipleLetters(textField);
      } else {
        createSelectionRect(0, 0, textField);
      }
    });
  });

  document.addEventListener('click', event => {
    if (!textField.contains(event.target)) {
      clearSelection(event, textField);
    }
  });
}

export { selectSettings, selectedLetters };