import selectSingleLetter from './selectSingleLetter';
import selectMultipleLetters from './selectMultipleLetters';
import createSelectionRect from './createSelectionRect';
import showEnteredText from './showEnteredText.js';

let isCreatingSelectionRect = false;

const showTextBtn = document.querySelector('.button');
showTextBtn.addEventListener('click', event => {
  showEnteredText();

  // selectSingleLetter();
  // selectMultipleLetters();
  createSelectionRect();
});
