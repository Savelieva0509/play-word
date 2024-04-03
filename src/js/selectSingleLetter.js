import clearSelection from './clearSelection.js';

function selectSingleLetter() {
  const textField = document.querySelector('.text-field');
  let selectedLetter = null;

  function toggleSelection(letter) {
    if (selectedLetter !== null && selectedLetter !== letter) {
      selectedLetter.classList.remove('selected');
    }

    letter.classList.toggle('selected');

    selectedLetter = letter.classList.contains('selected') ? letter : null;
  }

  function highlightLetter(event) {
    if (!event.ctrlKey && event.target.classList.contains('letter')) {
      toggleSelection(event.target);
    }
  }

  textField.addEventListener('click', highlightLetter);
  document.addEventListener('click', event => clearSelection(event, textField));
}

export default selectSingleLetter;
