import { getData } from './api.js';

const leaderboard = document.querySelector('.leaderboard');
// -- Method to display the scores.
const displayScores = async () => {
  const scores = await getData();
  const scoresObj = scores.result;
  scoresObj.forEach((score) => {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');
    scoreContainer.innerHTML = `${score.user}: ${score.score}`;
    leaderboard.appendChild(scoreContainer);
  });
};

export default displayScores;