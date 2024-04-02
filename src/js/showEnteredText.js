function showEnteredText() {
  const input = document.getElementById('input');
  const textField = document.querySelector('.text-field');

  const enteredText = input.value.toLowerCase();

  textField.innerHTML = '';

  for (let i = 0; i < enteredText.length; i++) {
    const letter = document.createElement('span');
    letter.textContent = enteredText[i];
    letter.classList.add('letter');
    textField.appendChild(letter);
  }
}

export default showEnteredText;
