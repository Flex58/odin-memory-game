import { useEffect, useState } from "react";
import getRandomNumber1025 from "../functions/getRandomNumber1025";

export default function useData(
  url = `https://pokeapi.co/api/v2/pokemon/`,
  amount = 12
) {
  const [dataArr, setDataArr] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPromises = [];
    let raceConditionHandler = false;
    const duplicateID = [];
    for (let i = 0; i < amount; i++) {
      let mainUrl = url;
      //only run random id process if not giving a specific url
      if (url === `https://pokeapi.co/api/v2/pokemon/`) {
        let id = getRandomNumber1025();
        while (duplicateID.includes(id)) {
          id = getRandomNumber1025();
        }
        duplicateID.push(id);
        mainUrl = url + id;
      }
      fetchPromises.push(fetch(mainUrl).then((response) => response.json()));
    }
    Promise.all(fetchPromises).then((allResults) => {
      if (!raceConditionHandler) {
        setDataArr(allResults);
        setLoading(false);
      }
    });

    return () => {
      raceConditionHandler = true;
    };
  }, [url, amount]);
  return { dataArr, loading };
}
