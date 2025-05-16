export default function shuffle(arr) {
  let currentIndex = arr.length;
  let newArr = [...arr]
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex]
    ];
  }
  return newArr;
}
