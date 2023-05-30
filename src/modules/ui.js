import { submitScores } from './api.js'
import displayScores from './display.js'

const leaderboard = document.querySelector('.leaderboard')
const refreshBtn = document.querySelector('.refresh-btn')
const submitBtn = document.querySelector('.submit-btn')
const nameInput = document.querySelector('.name-input')
const scoreInput = document.querySelector('.score-input')
const msg = document.querySelector('.msg')
const formC = document.querySelector('.form')
const form = document.querySelector('.form-container')
const closeBtn = document.querySelector('.close-form')
const addBtn = document.querySelector('.add-btn')
let loadingMessage // Variable to store the loading message element

// Function to display the form
function displayForm() {
  form.classList.add('active')
  closeBtn.style.display = 'block'
}

// Function to hide the form
function hideForm() {
  form.classList.remove('active')
  closeBtn.style.display = 'none'
}

function showLoadingMessage() {
  leaderboard.innerHTML = '' // Clear the leaderboard
  loadingMessage = document.createElement('div')
  loadingMessage.textContent = 'Loading...'
  leaderboard.appendChild(loadingMessage)
}

// Event listener for Add button
addBtn.addEventListener('click', displayForm)

// Event listener for Close button
closeBtn.addEventListener('click', hideForm)

// Event listener for Refresh button
refreshBtn.addEventListener('click', () => {
  showLoadingMessage() // Display the loading message
  setTimeout(displayScores, 1500) // Invoke displayScores after 2 seconds
})

// Event listener for form submission
formC.addEventListener('submit', async (e) => {
  e.preventDefault()
  submitBtn.disabled = true
  const newName = nameInput.value.trim()
  const newScore = Number(scoreInput.value)

  if (newName !== '' && !Number.isNaN(newScore)) {
    try {
      await submitScores(newName, newScore)
      msg.style.display = 'block'
      setTimeout(() => {
        msg.style.display = 'none'
      }, 2000)
      submitBtn.disabled = false
      formC.reset()
    } catch (error) {
      console.error('Failed to submit scores:', error)
    }
  } else {
    msg.style.display = 'block'
    msg.textContent = 'Please fill all fields'
    msg.classList.add('error')
    setTimeout(() => {
      msg.style.display = 'none'
      msg.textContent = 'Your score has been sent successfully'
      msg.classList.remove('error')
    }, 2000)
  }
})
