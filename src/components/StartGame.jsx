import useData from "../hooks/useData";

export default function StartGame({ onClick }) {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const amount = 1;
  const pickachu = useData(url, amount);

  return (
    <div className="startGame">
      <div className="gameDescription">
        <h1>Pokemon Memory Game</h1>
        <h2>Goal: </h2>
        <p>Click as many unique Pokemon in a row as you can!</p>
        <p> When you click a Pokemon you have already clicked, you lose.</p>
        <p>When you get 12 points, you win.</p>
        <p> Try to beat your High Score!!</p>
      </div>
      <div
        className="startButtonDiv"
        style={{
          backgroundImage: `${
            pickachu.loading == false &&
            `url(${pickachu.dataArr[0].sprites.other["official-artwork"].front_default})`
          }, linear-gradient(0deg, #FFFF00, #FFFF00)`,
          backgroundSize: `contain`,
        }}
      >
        <button type="button" onClick={onClick}>
          Start Game
        </button>
      </div>
    </div>
  );
}
