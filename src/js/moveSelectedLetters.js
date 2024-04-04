function moveSelectedLetters(selectedLetters) {
  const deltaX = 10; // Смещение по горизонтали
  const deltaY = 10; // Смещение по вертикали

  selectedLetters.forEach(letter => {
    const rect = letter.getBoundingClientRect();
    const newX = rect.left + deltaX;
    const newY = rect.top + deltaY;
    letter.style.left = newX + 'px';
    letter.style.top = newY + 'px';
  });
}

export default moveSelectedLetters;
