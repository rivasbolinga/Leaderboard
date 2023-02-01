const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'N6oJbbERy2ToK2k4n7vD';
// -- Method to retrieve the data from the API
const getData = async () => {
  const response = await fetch(`${url}games/${id}/scores`);
  const data = await response.json();
  return data;
};
// -- When form is completed, sends the inputs to the API.
const submitScores = async (user, score) => {
  const response = await fetch(`${url}games/${id}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data;
};

export {
  getData,
  submitScores,
};