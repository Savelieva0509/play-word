import clearSelection from './clearSelection.js';

function selectMultipleLetters() {
  const textField = document.querySelector('.text-field');

  function toggleSelection(letter) {
    letter.classList.toggle('selected');
  }

  function highlightLetter(event) {
    if (event.ctrlKey && event.target.classList.contains('letter')) {
      toggleSelection(event.target);
    }
  }

  textField.addEventListener('click', highlightLetter);
  document.addEventListener('click', event => clearSelection(event, textField));
}

export default selectMultipleLetters;
