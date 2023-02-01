import './style.css';


const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn  = document.querySelector('.submit-btn');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
const id = 'N6oJbbERy2ToK2k4n7vD';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';




//-- Method to retrieve the data from the API
const getData = async () => {
  const response = await fetch(`${url}games/${id}/scores`)
  const data = await response.json();
  console.log(data);
 }
//-- When press Refresh btn, make a request to ger the data from API.
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getData()
});

const submitScores = async (user,score) => {
  const response = await fetch(`${url}games/${id}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user,score}),
  });
  const data = await response.json();
  console.log(data)
}


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newName = nameInput.value;
  const newScore = scoreInput.value;
  submitScores(newName,newScore)
})

