import { useEffect, useState } from "react";

export default function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let raceConditionHandler = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!raceConditionHandler) {
          setData(json);
        }
      });
    return () => {
      raceConditionHandler = true;
    };
  }, [url]);
  return data;
}
