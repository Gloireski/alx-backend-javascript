export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const str = [];
  for (const s of set) {
    if (typeof s === 'string' && s.startsWith(startString)) {
      const subStr = s.substring(startString.length);
      //   if (subStr && subStr !== s) {
      //     str.push(subStr);
      //   }
      str.push(subStr);
    }
  }
  return str.join('-');
}
