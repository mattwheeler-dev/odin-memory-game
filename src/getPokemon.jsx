const getPokemon = () => {
	const chosenPokemon = [];
	const fetchPokemon = async () => {
		for (let i = 0; i < 9; i++) {
			const randomPokemon = Math.floor(Math.random() * 150) + 1;
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`
			);
			const pokeData = await response.json();

			const pokemonName = pokeData.name;
			const pokemonImg = pokeData.sprites["front_default"];

			chosenPokemon.push({ name: pokemonName, sprite: pokemonImg });
		}
	};

	fetchPokemon();
	console.log(chosenPokemon);
	return chosenPokemon;
};

export default getPokemon;
