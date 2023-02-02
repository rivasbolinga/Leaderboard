import { submitScores } from './api';
import displayScores from './display';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const msg = document.querySelector('.msg');
const formC = document.querySelector('.form');
const form = document.querySelector('.form-container');
const closeBtn = document.querySelector('.close-form');
const addBtn = document.querySelector('.add-btn')
// -- When press Add btn in mobile version, display form
addBtn.addEventListener('click', (e) => {
  form.classList.add('active');
  closeBtn.style.display = 'block';
});
// -- When press Add btn in mobile version, display form
closeBtn.addEventListener('click', (e) => {
  form.classList.remove('active');
  closeBtn.style.display = 'none';
});
// -- When press Refresh btn, make a request to ger the data from API.
refreshBtn.addEventListener('click', displayScores);

formC.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  const newName = nameInput.value.trim();
  const newScore = Number(scoreInput.value);
  if (newName !== '' && !Number.isNaN(newScore)) {
    await submitScores(newName, newScore);
    formC.reset();
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
    submitBtn.disabled = true;
  } else {
    msg.style.display = 'block';
    msg.textContent = 'Please fill all fields';
    msg.classList.add('error');
    setTimeout(() => {
      msg.style.display = 'none';
      msg.textContent = 'Your score has been sent successfully';
      msg.classList.remove('error');
    }, 2000);
  }
});
