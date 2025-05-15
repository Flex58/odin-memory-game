import { useEffect, useState } from "react";
import getRandomNumber1025 from "../functions/getRandomNumber1025";

export default function useData(
  url = `https://pokeapi.co/api/v2/pokemon/`,
  amount = 12
) {
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    let raceConditionHandler = false;
    for (let i = 0; i < amount; i++) {
      const id = getRandomNumber1025();
      fetch(url + id)
        .then((response) => response.json())
        .then((json) => {
          if (!raceConditionHandler) {
            setDataArr((prev) => [...prev, json]);
          }
        });
    }

    return () => {
      raceConditionHandler = true;
    };
  }, [url, amount]);
  return dataArr;
}
