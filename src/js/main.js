// selectors 
const pokeContainer = document.getElementById('pokeContainer');

// imports
  import capitalise from '../utils/capitalise.js'
  import capitaliseEachWord from '../utils/capataliseEachWord.js';

  // declarations
const numberOfPoke = 151;

// functions

    // func to loop through id's to add to api url
    const loopPokemon = async () => {
      for (let i = 1; i <= numberOfPoke; i++) {
        await getPokemon(i);
      }
    }

    // func to fetch data from api
    const getPokemon = async id => {
      try {
          const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
          const data = await fetch(url);
          const pokemon = await data.json();
          createPokemonCard(pokemon);
      } catch (error) {
          console.log(error);
      }
    }

    // func to create each card on index page
    function createPokemonCard(pokemon) {
      const pokemonEl = document.createElement('div');
      pokemonEl.classList.add('pokemon-cards');

      // pokemon declarations
      let pokeType = capitalise(pokemon.types[0].type.name);
      let pokeHp = pokemon.stats[0].base_stat;
      let pokeName = pokemon.name;
      let pokeMainImgFront = pokemon.sprites.front_default;
      let pokeMainImgBack = pokemon.sprites.back_default;
      let pokeHeight = pokemon.height;
      let pokeWeight = pokemon.weight;
      let pokeID = pokemon.id;
      let pokeMove1 = pokemon.moves[0].move.name.replace("-", " ");

      // inject pokemon data into card
      const pokeInnerHTML = `
        <div class="theCard"> 
          <div class="pokeCardFront">
            <div class="pokeCardFront-Content">
              <img src="${pokeMainImgFront}" class="poke-image" />
              <p class="id">#${pokeID.toString().padStart(3, "0")}</p>
              <h3 class="pokeName"> ${capitalise(pokemon.name)}</h3>  
            </div>
          </div>
          <div class="pokeCardBack">
            <div class="hp">HP: <span class="pokeHP">${pokeHp}</div>
            <div class="pokeName"><span class="pokeName">${capitalise(pokeName)}</div>
            <div class="basicPokemon">Basic Pokèmon</div>
            <div class="pokeImage"><img src="${pokeMainImgFront}" class="poke-image-back" /></div>
            <div class="underImgContainer">
              <div class="pokeHeight">Height<br> ${pokeHeight} </div>
              <div class="pokeWeight">Weight<br> ${pokeWeight}</div>
            </div>
            <div class="pokeType1">Type: ${capitalise(pokeType)}</div>
            <div class="pokeMove1">Move: ${capitaliseEachWord(pokeMove1)}</div>
            <div class="pokeID">#${pokeID.toString().padStart(3, "0")}</div>
          </div>
        </div>  
      `;

      pokemonEl.innerHTML = pokeInnerHTML;
      pokeContainer.appendChild(pokemonEl);
    }

// call function
loopPokemon();