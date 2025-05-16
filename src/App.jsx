import { useRef, useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import usePokemonArray from "./hooks/usePokemonArray";
import shuffle from "./functions/shuffle";
import GameOver from "./components/GameOver";

function App() {
  const [show, setShow] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const clickedPokemon = useRef([]);

  const initialPokemon = usePokemonArray();

  const [pokemon, setPokemon] = useState([]);

  function clickHandler(id) {
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
      setScore(0);
    }
  }

  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
          setPokemon(initialPokemon);
        }}
      >
        Button
      </button>
      {show && (
        <>
          <p>Score: {score}</p>
          <p>High Score: {highScore}</p>
          <CardContainer pokemon={pokemon} clickHandler={clickHandler} />
          <GameOver gameOver={gameOver} onClick={() => setGameOver(false)} />
        </>
      )}
    </>
  );
}

export default App;
