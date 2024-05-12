import { useContext } from "react";
import { AppContext } from "../App";

const Scoreboard = () => {
	const { score, bestScore } = useContext(AppContext);

	return (
		<section className="scoreboard">
			<h2>Score: {score}</h2>
			<h3>Best Score: {bestScore}</h3>
		</section>
	);
};

export default Scoreboard;
