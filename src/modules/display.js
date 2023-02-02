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
  for (let i = 0; i < 15 && i < scoresObj.length; i += 1) {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');
    scoreContainer.innerHTML = `${scoresObj[i].user}: ${scoresObj[i].score}`;
    leaderboard.appendChild(scoreContainer);
  }
  refreshBtn.disabled = false;
};

export default displayScores;