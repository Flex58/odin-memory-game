import Card from "./Card";

export default function CardContainer({ pokemon, clickHandler }) {
  return (
    <div className="cardContainer">
      {pokemon.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.image}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
}
