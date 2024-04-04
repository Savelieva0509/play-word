import { selectedLetters } from "./selectSettings";
function selectMultipleLetters(textField) {
  
  function toggleSelection(letter) {
    letter.classList.toggle('selected');
    if (letter.classList.contains('selected')) {
      selectedLetters.add(letter); // Добавляем выделенную букву в коллекцию
    } else {
      selectedLetters.delete(letter); // Удаляем выделенную букву из коллекции
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




