import {connect} from "react-redux";
import {addStudent, removeStudent, changeMark} from "./actions";

const mapToProps = (store) => {
  return {
    students: store.students
  };
}

const disToProps = (dispatch) => {
  return {
    addStudent: (name) => dispatch(addStudent(name)),
    removeStudent: (id) => dispatch(removeStudent(id)),
    changeMark: (id, mark) => dispatch(changeMark(id, mark))
  };
}

const connector = component => connect(mapToProps, disToProps)(component);
export default connector;
