export function addStudent(name) {
  return {
    type: 'ADD_STUDENT',
    payload: {
      name: name
    }
  }
}

export function removeStudent(id) {
  return {
    type: 'REMOVE_STUDENT',
    payload: {
      id: id
    }
  }
}

export function changeMark(id, mark) {
  return {
    type: 'CHANGE_MARK',
    payload: {
      id: id,
      mark: mark
    }
  }
}
