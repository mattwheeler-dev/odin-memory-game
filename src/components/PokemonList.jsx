import { useContext } from "react";
import { AppContext } from "../App";

const PokemonList = () => {
	const {
		randomPokemon,
		selectedPokemon,
		setSelectedPokemon,
		score,
		setScore,
		bestScore,
		setBestScore,
		setGameOver,
	} = useContext(AppContext);
	const pokemonArray = randomPokemon;

	const shufflePokemon = () => {
		pokemonArray.sort(() => Math.random() - 0.5);
	};

	const handlePokemon = (e) => {
		const targetPokemon = e.target.dataset.key;
		if (targetPokemon == undefined) {
			return;
		}
		if (selectedPokemon.includes(targetPokemon)) {
			if (score > bestScore) {
				setBestScore(score);
				localStorage.setItem("best-score", score);
			}
			setGameOver(true);
			setScore(0);
			setSelectedPokemon([]);
		} else {
			setScore(score + 1);
			setSelectedPokemon([...selectedPokemon, targetPokemon]);
		}
		if (selectedPokemon.length == 8) {
			setGameOver(true);
		}
		shufflePokemon();
	};

	const pokemonDivs = pokemonArray.map((mon) => (
		<div
			className="pokemon"
			key={mon.name}
			data-key={mon.name}
			onClick={handlePokemon}
		>
			<img src={mon.sprite} alt={mon.name} />
			<h4>{mon.name}</h4>
		</div>
	));

	return <section className="pokemon-list">{pokemonDivs}</section>;
};

export default PokemonList;
