import './style.css';


const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn  = document.querySelector('.submit-btn');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const id = 'N6oJbbERy2ToK2k4n7vD';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const leaderboard = document.querySelector('.leaderboard')


//-- Method to retrieve the data from the API
const getData = async () => {
  const response = await fetch(`${url}games/${id}/scores`)
  const data = await response.json();
  return data;
 }

 const displayScores = async () => {
  const scores = await getData();
  const scoresObj = scores.result;
  scoresObj.forEach((score) => {
    const scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score-container');
    scoreContainer.innerHTML = `${score.user}: ${score.score}`;
   leaderboard.appendChild(scoreContainer)
  });
 }
//-- When press Refresh btn, make a request to ger the data from API.
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  displayScores();
});

//-- When form is completed, sends the inputs to the API. 
const submitScores = async (user,score) => {
  const response = await fetch(`${url}games/${id}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user,score}),
  });
  const data = await response.json();
  return data;
}

const clearfields = () => {
  nameInput.value = '';
  scoreInput.value = '';
}

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const newName = nameInput.value;
  const newScore = scoreInput.value;
  await submitScores(newName,newScore);
  clearfields()
})

