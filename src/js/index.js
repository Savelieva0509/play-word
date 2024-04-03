import selectSingleLetter from './selectSingleLetter';
import showEnteredText from './showEnteredText.js';
import selectSettings from './selectSettings';
import createSelectionRect from './createSelectionRect';


const showTextBtn = document.querySelector('.button');
showTextBtn.addEventListener('click', event => {
  showEnteredText();selectSettings();
});
