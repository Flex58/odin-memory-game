export default function GameOver({gameOver, onClick, score, highScore}) {

    return (
        <dialog className="gameOver" open={gameOver}>
            <p>Game Over!</p>
            {score == 12 ? (<p>You win! Score: {score}</p>) : (<p>Try again! Achieved Score: {score}</p>)}
            <p>High Score: {highScore}</p>
            <button type="button" onClick={onClick}>Restart!</button>
        </dialog>
    )
}