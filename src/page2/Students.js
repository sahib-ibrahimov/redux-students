import connector from "../redux/connector";
import StudentMark from "./StudentMark";

function Students({students, changeMark}) {
  return (
    <>
      {students.map(student =>
        <StudentMark
          key={student.id}
          id={student.id}
          name={student.name}
          mark={student.mark}
          clicker={changeMark}
        />
      )}
    </>
  );
}

export default connector(Students);
