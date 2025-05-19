import getRandomNumber1025 from "../functions/getRandomNumber1025";
import { useMemo } from "react";

export default function Card({ id, name, img, clickHandler }) {
  const colors = useMemo(() => [
    "#f4b8e4",
    "#e78284",
    "#a6d189",
    "#8caaee",
    "#81c8be",
  ], []);
  const numb1 = useMemo(() => getRandomNumber1025(colors.length), [colors]);
  const numb2 = useMemo(() => getRandomNumber1025(colors.length),[colors]);

  function getName(str) {
    const first = str.substring(0, 1).toUpperCase();
    return first + str.substring(1);
  }

  const upperName = getName(name);
  return (
    <button
      className="card"
      id={id}
      style={{
        backgroundImage: `url(${img}), linear-gradient(0deg, ${colors[numb1]}, ${colors[numb2]})`,
        backgroundSize: `contain`,
      }}
      onClick={() => clickHandler(id)}
    >
      <p>{upperName}</p>
    </button>
  );
}
