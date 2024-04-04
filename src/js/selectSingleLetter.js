import moveSingleLetter from './moveSingleLetter';

function selectSingleLetter(textField) {
  let selectedLetter = null;

  function toggleSelection(letter) {
    if (selectedLetter !== null && selectedLetter !== letter) {
      selectedLetter.classList.remove('selected');
    }

    letter.classList.toggle('selected');

    selectedLetter = letter.classList.contains('selected') ? letter : null;
    if (selectedLetter) {
      moveSingleLetter(selectedLetter);
    }
  }

  return toggleSelection;
}

export default selectSingleLetter;
