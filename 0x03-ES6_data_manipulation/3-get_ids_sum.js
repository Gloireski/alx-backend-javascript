export default function getStudentIdsSum(studList) {
  return studList.reduce((prev, next) => prev + next.id, 0);
}
