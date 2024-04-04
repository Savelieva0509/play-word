import { selectedLetters } from './selectSettings';
function selectMultipleLetters(textField) {
  function toggleSelection(letter) {
    letter.classList.toggle('selected');
    if (letter.classList.contains('selected')) {
      selectedLetters.add(letter);
    } else {
      selectedLetters.delete(letter);
    }
  }

  function highlightLetter(event) {
    if (event.ctrlKey && event.target.classList.contains('letter')) {
      toggleSelection(event.target);
    }
  }

  textField.addEventListener('click', highlightLetter);
}

export default selectMultipleLetters;
