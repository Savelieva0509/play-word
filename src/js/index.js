import showEnteredText from './showEnteredText.js';
import selectSettings from './selectSettings';

const showTextBtn = document.querySelector('.button');
showTextBtn.addEventListener('click', event => {
  showEnteredText();

  selectSettings();
});
