export default function StartGame({ onclick }) {
  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <h2>Goal: </h2>
      <p>
        Click as many unique Pokemon in a row as you can! When you click a
        Pokemon you have already clicked, you lose! Try to increase your High
        Score!!
      </p>
      <button type="button" onclick={onclick}>
        Start Game
      </button>
    </>
  );
}
