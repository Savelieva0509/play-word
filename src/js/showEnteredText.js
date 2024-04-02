function showEnteredText() {
  const input = document.getElementById('input');
  const textField = document.querySelector('.text-field');

  const enteredText = input.value.toLowerCase();
  textField.textContent = enteredText;
}

export default showEnteredText;
