export default function getListStudentIds(objAr) {
  if (!Array.isArray(objAr)) {
    return [];
  }
  return objAr.map((obj) => obj.id);
}
