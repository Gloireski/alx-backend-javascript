export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
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
