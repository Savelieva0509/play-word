import moveSingleLetter from './moveSingleLetter';
import { selectedLetters } from './selectSettings';

function selectSingleLetter() {
  let selectedLetter = null;

  function toggleSelection(letter) {
    // Вместо добавления класса selected, вы можете поместить буквы в массив
    if (selectedLetter !== null && selectedLetter !== letter) {
      selectedLetter.classList.remove('selected');
      selectedLetters.delete(selectedLetter); // Удаление буквы из массива
    }

    letter.classList.toggle('selected');

    selectedLetter = letter.classList.contains('selected') ? letter : null;
    if (selectedLetter) {
      selectedLetters.add(selectedLetter); // Добавление буквы в массив
    }
  }
console.log(selectedLetters);
  return {
    toggleSelection,
    selectedLetters,
  };
}

export default selectSingleLetter;

