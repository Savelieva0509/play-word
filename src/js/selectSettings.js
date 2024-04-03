import selectSingleLetter from './selectSingleLetter';
import selectMultipleLetters from './selectMultipleLetters';
import createSelectionRect from './createSelectionRect';
import clearSelection from './clearSelection';
import moveSingleLetter from './moveSingleLetter';

function selectSettings() {
  const textField = document.querySelector('.text-field');

  const togglSingleSelection = selectSingleLetter(textField);

textField.querySelectorAll('.letter').forEach(letter => {
  letter.addEventListener('click', event => {
    const target = event.target;
    if (!event.ctrlKey && target.classList.contains('letter')) {
      togglSingleSelection(target);
      selectMultipleLetters(textField);
      moveSingleLetter(letter)

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

export default selectSettings;
