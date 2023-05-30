import { getData } from './api.js';

const leaderboard = document.querySelector('.leaderboard');
const refreshBtn = document.querySelector('.refresh-btn');
// -- Method to display the scores.
const displayScores = async () => {
  refreshBtn.disabled = true;
  leaderboard.innerHTML = '';
  const scores = await getData();
  const scoresObj = scores.result;
  scoresObj.sort((a, b) => b.score - a.score); // sort by score in descending order

  for (const scoreObj of scoresObj.slice(0, 40)) {
  if (typeof scoreObj.score === 'number') {
const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score-container');
  scoreContainer.innerHTML = `${scoreObj.user}: ${scoreObj.score}`;
  leaderboard.appendChild(scoreContainer);
  }
  
}
}

export default displayScores;