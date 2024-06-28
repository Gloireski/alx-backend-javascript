export default function appendToEachArrayValue(array, appendString) {
  return array.map((element) => appendString + element);
}
