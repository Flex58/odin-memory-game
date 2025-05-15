import { useEffect, useState } from "react";
import getRandomNumber1025 from "../functions/getRandomNumber1025";

export default function useData(
  url = `https://pokeapi.co/api/v2/pokemon/`,
  amount = 12
) {
  const [dataArr, setDataArr] = useState([]);
  useEffect(() => {
    let raceConditionHandler = false;
    const duplicateID = [];
    for (let i = 0; i < amount; i++) {
      let id = getRandomNumber1025();
      while (duplicateID.includes(id)) {
        id = getRandomNumber1025();
      }
      duplicateID.push(id);
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
