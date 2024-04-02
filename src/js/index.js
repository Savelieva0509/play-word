import selectLetter from './selectLetter';
import showEnteredText from './showEnteredText.js';
import wrapLetters from './wrapLetters.js';

const showTextBtn = document.querySelector('.button');
showTextBtn.addEventListener('click', event => {
  showEnteredText();
  wrapLetters();
  selectLetter();
});
