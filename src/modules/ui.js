import { submitScores } from './api';
import displayScores from './display';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const msg = document.querySelector('.msg');
const addBtn = document.querySelector('.add-btn');
const form = document.querySelector('.form-container');
const closeBtn = document.querySelector('.close-form')
// -- When press Add btn in mobile version, display form
addBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  form.classList.add('active');
  closeBtn.style.display = 'block';
})
// -- When press Add btn in mobile version, display form
closeBtn.addEventListener('click', (e)=> {
  e.preventDefault();
  form.classList.remove('active');
  closeBtn.style.display = 'none';
})
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
  const newName = nameInput.value.trim();
  const newScore = Number(scoreInput.value);
  if (newName !== '' && !Number.isNaN(newScore)) {
    await submitScores(newName, newScore);
    clearfields();
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
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
