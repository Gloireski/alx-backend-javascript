export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
const Stud1 : Student = {
    firstName: 'Messi',
    lastName: 'Derdion',
    age: 17,
    location: 'Moundou'
}
const Stud2 : Student = {
    firstName: 'Belem',
    lastName: 'Gloire',
    age: 26,
    location: 'Sale'
}
const studentsList: Array<Student> = [Stud1, Stud2];
export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
  
    for (const student of students) {
      const bodyRow = document.createElement('tr');
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
  
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
  };
  
  displayStudents(studentsList);