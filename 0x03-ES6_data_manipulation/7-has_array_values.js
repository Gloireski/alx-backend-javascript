export default function hasValuesFromArray(set, arr) {
  let ex = false;
  arr.forEach((element) => {
    if (set.has(element)) {
      ex = true;
    } else {
      ex = false;
    }
  });
  return ex;
}
