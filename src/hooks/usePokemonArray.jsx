import useData from "./useData";

export default function usePokemonArray() {
  let arr = [];
  const data = useData();
  data.map((item) => {
    arr = [
      ...arr,
      {
        id: item.id,
        name: item.name,
        image: item.sprites.other['official-artwork'].front_default,
      },
    ];
  });

  return arr;
}
