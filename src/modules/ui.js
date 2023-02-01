import { submitScores } from './api';
import displayScores from './display';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');

// -- When press Refresh btn, make a request to ger the data from API.
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayScores();
});

const clearfields = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const newName = nameInput.value;
  const newScore = scoreInput.value;
  await submitScores(newName, newScore);
  clearfields();
});