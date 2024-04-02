function selectLetter() {
  const textField = document.querySelector('.text-field');
  function highlightLetter(event) {
    if (event.target.classList.contains('letter')) {
      event.target.style.color = 'red';
    }
  }

  function resetHighlight(event) {
    if (event.target.classList.contains('letter')) {
      event.target.style.color = '';
    }
  }

  textField.addEventListener('mouseover', highlightLetter);
  textField.addEventListener('mouseout', resetHighlight);
}

export default selectLetter;
