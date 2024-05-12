import { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
	const { score, gameOver } = useContext(AppContext);
	if (gameOver == true && score == 9) {
		return <h2 className="game-over">Amazing! You Win!</h2>;
	} else if (gameOver == true && score < 9) {
		return <h2 className="game-over">Sorry, you lose...</h2>;
	}
};

export default GameOver;
