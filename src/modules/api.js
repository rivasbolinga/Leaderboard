
//-- Method to get the ID from the API.
const getID = async () => {
  const response = await fetch(`${url}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'battleship' }),
  });
  const data = await response.json();
  console.log(data);
};

 export { getData };