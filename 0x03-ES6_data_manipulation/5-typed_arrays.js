export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const dt = new DataView(new ArrayBuffer(length), 0, length);
  dt.setUint8(position, value);
  return dt;
}
