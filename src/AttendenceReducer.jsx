// Initial state of the application
export const initialState = [
  { id: 101, name: 'Alice', status: 'Pending' },
  { id: 102, name: 'Bob', status: 'Pending' },
  { id: 103, name: 'Chaman', status: 'Pending' },
  { id: 104, name: 'Duce', status: 'Pending' },

];

// The reducer function
export const attendanceReducer = (state, action) => {
  switch (action.type) {
    case 'MARK_PRESENT':
      return state.map((student) =>
        student.id === action.payload 
          ? { ...student, status: 'Present' } 
          : student
      );
    case 'MARK_ABSENT':
      return state.map((student) =>
        student.id === action.payload 
          ? { ...student, status: 'Absent' } 
          : student
      );
    case 'RESET':
      return state.map((student) => ({ ...student, status: 'Pending' }));
    default:
      return state;
  }
};