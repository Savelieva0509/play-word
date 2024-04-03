function selectMultipleLetters(textField) {
  
  function toggleSelection(letter) {
    letter.classList.toggle('selected');
  }

  function highlightLetter(event) {
    if (event.ctrlKey && event.target.classList.contains('letter')) {
      toggleSelection(event.target);
    }
  }

  textField.addEventListener('click', highlightLetter);
}

export default selectMultipleLetters;
