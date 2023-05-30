import { getData } from './api.js';

const leaderboard = document.querySelector('.leaderboard');
const refreshBtn = document.querySelector('.refresh-btn');
// -- Method to display the scores.
const displayScores = async () => {
  const scores = await getData();
  const scoresObj = scores.result;
  scoresObj.sort((a, b) => b.score - a.score); // Sort by score in descending order

  leaderboard.innerHTML = ''; // Clear the leaderboard

  scoresObj.slice(0, 40).forEach((scoreObj) => {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');
    scoreContainer.textContent = `${scoreObj.user}: ${scoreObj.score}`;
    leaderboard.appendChild(scoreContainer);
  });

  refreshBtn.disabled = false;
};

export default displayScores;
