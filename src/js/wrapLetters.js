function wrapLetters() {
    const textField = document.querySelector('.text-field');
  const text = textField.textContent;
  textField.innerHTML = '';

  text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.classList.add('letter');
    textField.appendChild(span);
  });
}
export default wrapLetters;
