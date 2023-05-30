import { getData } from './api.js';

const leaderboard = document.querySelector('.leaderboard')
const refreshBtn = document.querySelector('.refresh-btn')

// Function to display the loading message
function showLoadingMessage() {
  leaderboard.innerHTML = 'Loading...'
}

// -- Method to display the scores.
const displayScores = async () => {
  refreshBtn.disabled = true
  showLoadingMessage() // Display the loading message

  const scores = await getData()
  const scoresObj = scores.result
  scoresObj.sort((a, b) => b.score - a.score) // Sort by score in descending order

  leaderboard.innerHTML = '' // Clear the leaderboard

  for (const scoreObj of scoresObj.slice(0, 40)) {
      const scoreContainer = document.createElement('div')
      scoreContainer.classList.add('score-container')
      scoreContainer.innerHTML = `${scoreObj.user}: ${scoreObj.score}`
      leaderboard.appendChild(scoreContainer)
    }
  }

  refreshBtn.disabled = false


export default displayScores
