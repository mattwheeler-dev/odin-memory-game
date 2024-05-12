import { useEffect, useState, createContext } from "react";
import PokemonList from "./components/PokemonList";
import Scoreboard from "./components/Scoreboard";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() {
	const [randomPokemon, setRandomPokemon] = useState([]);
	const [selectedPokemon, setSelectedPokemon] = useState([]);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(
		localStorage.getItem("best-score") || 0
	);
	const [gameOver, setGameOver] = useState(false);

	// FETCH POKEMON
	useEffect(() => {
		const fetchPokemon = async () => {
			const chosenPokemon = [];
			for (let i = 0; i < 9; i++) {
				const randomPokemon = Math.floor(Math.random() * 800) + 1;
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`
				);
				const pokeData = await response.json();
				const pokemonName = pokeData.name;
				const pokemonImg = pokeData.sprites["front_default"];
				chosenPokemon.push({ name: pokemonName, sprite: pokemonImg });
			}
			console.log(chosenPokemon);
			setRandomPokemon(chosenPokemon);
			return chosenPokemon;
		};
		fetchPokemon();
	}, []);

	return (
		<>
			<h1>Odin{`'`}s Memory Game</h1>
			<p>
				Click one card at a time, you lose when you click on a card you{`'`}ve
				already clicked before!
				<br />
				(Refresh the page for new pokemon!)
			</p>
			<AppContext.Provider
				value={{
					randomPokemon,
					selectedPokemon,
					setSelectedPokemon,
					score,
					setScore,
					bestScore,
					setBestScore,
					gameOver,
					setGameOver,
				}}
			>
				<Scoreboard />
				<GameOver />
				<PokemonList />
			</AppContext.Provider>
		</>
	);
}

export default App;
