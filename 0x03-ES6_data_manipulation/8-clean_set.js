export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const str = [];
  for (const s of set) {
    if (s.startsWith(startString)) {
      str.push(s.substring(startString.length));
    }
  }
  return str.join('-');
}
