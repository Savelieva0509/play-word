import showEnteredText from './showEnteredText.js';
import { selectSettings } from './selectSettings';
import moveSelectedLetters from './moveSelectedLetters.js';

const showTextBtn = document.querySelector('.button');
showTextBtn.addEventListener('click', event => {
  showEnteredText();
  selectSettings();
  moveSelectedLetters(); 
});
