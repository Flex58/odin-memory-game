export default function Score({ score, highScore }) {
  return (
    <div className="scores">
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
