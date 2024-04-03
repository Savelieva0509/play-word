function clearSelection(event, textField) {
  if (!event.target.classList.contains('letter')) {
    const letters = textField.querySelectorAll('.letter');
    letters.forEach(letter => letter.classList.remove('selected'));
  }
}

export default clearSelection;
