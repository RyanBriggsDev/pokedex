// selectors 
const pokeContainer = document.getElementById('pokeContainer');

// imports
  import capitalise from '../utils/capitalise.js'

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
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const data = await fetch(url);
      const pokemon = await data.json();
      createPokemonCard(pokemon)
      console.log(pokemon);
    }

    // func to create each card on index page
    function createPokemonCard(pokemon) {
      const pokemonEl = document.createElement('div');
      pokemonEl.classList.add('pokemon-cards');
      // inject pokemon data into cards
      const pokeInnerHTML = `
        <div class="theCard"> 
          <div class="pokeCardFront">
            <div class="pokeCardFront-Content">
              <img src="${pokemon.sprites.front_default}" class="poke-image" />
              <p class="id">#${pokemon.id.toString().padStart(3, "0")}</p>
              <h3 class="pokeName"> ${capitalise(pokemon.name)}</h3>  
            </div>
          </div>
          <div class="pokeCardBack">
            <div class="hp">HP: <span class="pokeHP">${pokemon.stats[0].base_stat}</div>
            <div class="pokeName"><span class="pokeName">${capitalise(pokemon.name)}</div>
            <div class="basicPokemon">Basic Pokemon</div>
            <div class="pokeImage"><img src="${pokemon.sprites.back_default}" class="poke-image-back" /></div>
            <div class="pokeHeight">Height: ${pokemon.height} </div>
            <div class="pokeType1">Type: ${capitalise(pokemon.types[0].type.name)}</div>
            <div class="pokeWeight">Weight: ${pokemon.weight}</div>
            <div class="pokeMove1">Move: ${capitalise(pokemon.moves[0].move.name)}</div>
            <div class="originalPokemon">
              <div class="originalPokeText">Original Pokemon</div>
              <div class="pokeID">ID: </div>
          </div>
          </div>
        </div>  
      `;

      pokemonEl.innerHTML = pokeInnerHTML;
      pokeContainer.appendChild(pokemonEl);
    }

// call function
loopPokemon();

// // test
// let body = document.querySelector('.body');
// body.style.background = 'red';

// save for later
    // <div class="weight">Weight: <span class="pokeWeight">${pokemon.weight}</div>
    // <div class="height">Height: <span class="pokeHeight">${pokemon.height}</div>
    // <div class="hp">HP: <span class="pokeHp">${pokemon.stats[0].base_stat}</div>
    // <div class="attack">Attack: <span class="pokeAttack">${pokemon.stats[1].base_stat}</div>
    // <div class="defence">Defence: <span class="pokeDefence">${pokemon.stats[2].base_stat}</div>
    // <div class="specialAttack">Special Attack: <span class="pokeSpecialAttack">${pokemon.stats[3].base_stat}</div>
    // <div class="specialDefence">Special Defence: <span class="pokeSpecialDefence">${pokemon.stats[4].base_stat}</div>
    // <div class="speed">Speed: <span class="pokeSpeed">${pokemon.stats[5].base_stat}</div>