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
const addBtn = document.querySelector('.add-btn');
// Function to display the form
function displayForm() {
  form.classList.add('active');
  closeBtn.style.display = 'block';
}

// Function to hide the form
function hideForm() {
  form.classList.remove('active');
  closeBtn.style.display = 'none';
}

// Event listener for Add button
addBtn.addEventListener('click', displayForm);

// Event listener for Close button
closeBtn.addEventListener('click', hideForm);

// Event listener for Refresh button
refreshBtn.addEventListener('click', displayScores);

// Event listener for form submission
formC.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  const newName = nameInput.value.trim();
  const newScore = Number(scoreInput.value);
  
  if (newName !== '' && !Number.isNaN(newScore)) {
    await submitScores(newName, newScore);
    msg.style.display = 'block';
    setTimeout(() => {
      msg.style.display = 'none';
    }, 2000);
    submitBtn.disabled = false;
    formC.reset();
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
