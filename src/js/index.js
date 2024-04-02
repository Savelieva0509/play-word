import selectLetter from './selectLetter';
import showEnteredText from './showEnteredText.js';

const showTextBtn = document.querySelector('.button');
showTextBtn.addEventListener('click', event => {
  showEnteredText();
  selectLetter();
});
