import { useRef, useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import usePokemonArray from "./hooks/usePokemonArray";
import shuffle from "./functions/shuffle";
import GameOver from "./components/GameOver";
import Score from "./components/Score";
import StartGame from "./components/StartGame";

function App() {
  const [show, setShow] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const clickedPokemon = useRef([]);

  const initialPokemon = usePokemonArray();

  const [pokemon, setPokemon] = useState([]);

  function clickHandler(id) {
    if (!gameOver) {
      setPokemon(shuffle(pokemon));
      //maybe break up function?
      if (!clickedPokemon.current.includes(id)) {
        clickedPokemon.current.push(id);
        setScore((prev) => {
          const newScore = prev + 1;
          if (newScore >= highScore) setHighScore(newScore);
          if (newScore == pokemon.length) setGameOver(true);
          return newScore;
        });
      } else {
        clickedPokemon.current = [];
        setGameOver(true);
      }
    }
  }

  return (
    <>
      {show ? (
        <div className="gameWrapper">
          <Score score={score} highScore={highScore} />
          <CardContainer pokemon={pokemon} clickHandler={clickHandler} />
          <GameOver
            gameOver={gameOver}
            onClick={() => {
              setGameOver(false);
              setScore(0);
            }}
            score={score}
            highScore={highScore}
          />
        </div>
      ) : (
        <StartGame
          onClick={() => {
            setShow(!show);
            setPokemon(initialPokemon);
          }}
        />
      )}
    </>
  );
}

export default App;
