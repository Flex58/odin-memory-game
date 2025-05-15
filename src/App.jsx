import { useRef, useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import usePokemonArray from "./hooks/usePokemonArray";
import shuffle from "./functions/shuffle";

function App() {
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const clickedPokemon  = useRef([]);

  const initialPokemon = usePokemonArray();

  const [pokemon, setPokemon] = useState([]);

  function clickHandler(id) {
    shuffle(pokemon);
    if (!clickedPokemon.current.includes(id)) {
      clickedPokemon.current.push(id);
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore >= highScore) setHighScore(newScore);
        return newScore;
      });
    } else {
      clickedPokemon.current = [];
      setScore(0);
    }
    //display game over
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
        </>
      )}
    </>
  );
}

export default App;
