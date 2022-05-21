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
    let pokeDataName = data.name;
    let capPokeName = capitalise(pokeDataName);
    pokePageTitle.textContent = `Pokédex - ${capPokeName}`;
    pokeName.textContent = capPokeName;
  })
  .catch(function(err) {
    // alert(`we're having technical difficulty, fuck off and come back later`);
  })

  console.log('eggs');