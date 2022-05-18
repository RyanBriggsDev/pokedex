// selectors
const pokeName = document.getElementById('pokeName');

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => console.log(data));

pokeName.innerText = data['name']