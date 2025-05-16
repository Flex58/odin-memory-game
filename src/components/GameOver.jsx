export default function GameOver({gameOver, onClick}) {

    return (
        <dialog className="gameOver" open={gameOver}>
            <p>Game Over!</p>
            <button type="button" onClick={onClick}>Restart!</button>
        </dialog>
    )
}