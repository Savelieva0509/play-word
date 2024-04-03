import selectSingleLetter from './selectSingleLetter';
import selectMultipleLetters from './selectMultipleLetters';
import createSelectionRect from './createSelectionRect';
import clearSelection from './clearSelection';

function selectSettings() {
  const textField = document.querySelector('.text-field');
console.log('Select settings initialized');
  const togglSingleSelection = selectSingleLetter(textField);

    textField.addEventListener('click', event => {
      console.log('Click event on .text-field');
    const target = event.target;
    if (!event.ctrlKey && target.classList.contains('letter')) {
      togglSingleSelection(target);
      selectMultipleLetters(textField);
    } else {
      createSelectionRect(0, 0, textField);
    }
  });

  document.addEventListener('click', event => {
    if (!textField.contains(event.target)) {
      clearSelection(event, textField);
    }
  });
}

export default selectSettings;
