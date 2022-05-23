const initStore = {
  id: 1,
  students: []
};

export default function reducer(store = initStore, action) {
  switch(action.type) {
    case 'ADD_STUDENT': {
      const students = store.students.slice();
      let id = store.id;
      const student = {
        id: id++,
        name: action.payload.name,
        mark: 0
      };
      students.push(student);
      return {...store, students, id};
    };
    case 'REMOVE_STUDENT': {
      const students = store.students.slice();
      let find = -1;
      for(let i=0; i<students.length; ++i)
        if(students[i].id === action.payload.id) {
          find = i;
          break;
        }
      if(find >= 0) students.splice(find,1);
      return {...store, students};
    };
    case 'CHANGE_MARK': {
      const students = store.students.slice();
      let find = -1;
      for(let i=0; i<students.length; ++i)
        if(students[i].id === action.payload.id) {
          find = i;
          break;
        }
      if(find >= 0) students[find].mark = action.payload.mark;
      return {...store, students};
    };
    default: return store;
  };
}
