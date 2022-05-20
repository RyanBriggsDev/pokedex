// selectors
const pokeName = document.getElementById('pokeName');
const pokePageTitle = document.getElementById("pokePageTitle");

// imports
import capitalise from '../utils/capitalise.js';

// fetch api

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => {
    // change page title to currently active pokemon
    let pokeName = data.name;
    let capPokeName = capitalise(pokeName);
    console.log(capPokeName);
    pokeName.innerText = capPokeName;
    pokePageTitle.innerText = `Pokédex - ${capPokeName}`;
  })
  .catch(function(err) {
    // alert(`we're having technical difficulty, fuck off and come back later`);
  });