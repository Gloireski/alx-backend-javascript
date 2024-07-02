export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Uint8Array(buffer, 0, length);
  int8View[position] = value;
  return new DataView(int8View.buffer, 0, length);
}
