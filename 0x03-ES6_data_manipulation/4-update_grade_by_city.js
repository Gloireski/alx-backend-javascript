export default function updateStudentGradeByCity(studList, city, newGrades) {
  return studList
    .filter((el) => el.location === city)
    .map((el) => ({
      id: el.id,
      firstName: el.firstName,
      location: el.location,
      grade: (newGrades
        .filter((grade) => grade.studentId === el.id)
        .pop() || { grade: 'N/A' }).grade,
    }));
}
