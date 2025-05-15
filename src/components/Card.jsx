export default function Card({ id, name, img, clickHandler }) {
  return (
    <button
      className="card"
      id={id}
      style={{ backgroundImage: `url(${img})`, backgroundSize: `cover` }}
      onClick={() => clickHandler(id)}
    >
      <p>{name}</p>
    </button>
  );
}
