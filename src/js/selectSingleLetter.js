import { selectedLetters } from './selectSettings';

function selectSingleLetter() {
  let selectedLetter = null;

  function toggleSelection(letter) {
    if (selectedLetter !== null && selectedLetter !== letter) {
      selectedLetter.classList.remove('selected');
      selectedLetters.delete(selectedLetter); // Удаление буквы из массива
    }

    letter.classList.toggle('selected');

    selectedLetter = letter.classList.contains('selected') ? letter : null;
    if (selectedLetter) {
      selectedLetters.add(selectedLetter);
    }
  }
  console.log(selectedLetters);
  return {
    toggleSelection,
    selectedLetters,
  };
}

export default selectSingleLetter;
