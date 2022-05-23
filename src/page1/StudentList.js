import connector from "../redux/connector";
import Student from "./Student";

function StudentList({students, removeStudent}) {
  return (
    <>
      {students.map(student =>
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          mark={student.mark}
          clicker={removeStudent}
        />
      )}
    </>
  );
}

export default connector(StudentList);
