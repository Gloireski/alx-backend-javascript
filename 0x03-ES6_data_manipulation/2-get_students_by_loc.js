export default function getStudentsByLocation(argList, city) {
  return argList.filter((el) => el.location === city);
}
