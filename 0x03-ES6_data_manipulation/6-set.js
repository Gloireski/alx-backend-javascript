export default function setFromArray(arr) {
  const arrToSet = new Set();
  arr.forEach((el) => {
    arrToSet.add(el);
  });
  return arrToSet;
}
