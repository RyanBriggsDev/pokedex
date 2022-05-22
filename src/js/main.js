// selectors
let pokeName = document.querySelector('.pokeName');
let pokeType = document.querySelector('.pokeType');
let pokePageTitle = document.getElementById("pokePageTitle");
let pokeHeight = document.querySelector('.pokeHeight');
let pokeWeight = document.querySelector('.pokeWeight');
let pokeID = document.querySelector('.pokeID');

// imports
import capitalise from '../utils/capitalise.js';

// fetch api

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => response.json())
  .then(data => { console.log(data);
    // change page title to currently active pokemon
    let pokeDataName = data.name;
    let capPokeName = capitalise(pokeDataName);
    pokePageTitle.innerText = `Pokédex - ${capPokeName}`;
    pokeName.innerText = capPokeName;
    pokeID.innerText = data.id;
  })
  .catch(function(err) {
    // alert(`we're having technical difficulty, fuck off and come back later`);
  })