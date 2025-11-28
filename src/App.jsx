import React, { useReducer } from 'react';
import './App.css';
import { initialState, attendanceReducer } from './AttendenceReducer';

function App() {
  const [students, dispatch] = useReducer(attendanceReducer, initialState);

  return (
    <div className="app-container">
      <h2>Classroom Attendance Sheet</h2>
      
      <button className="btn btn-reset" onClick={() => dispatch({ type: 'RESET' })}>
        Reset All
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td className={`status-${student.status}`}>
                {student.status}
              </td>
              <td>
                <button 
                  className="btn btn-present"
                  onClick={() => dispatch({ type: 'MARK_PRESENT', payload: student.id })}
                >
                  Present
                </button>
                <button 
                  className="btn btn-absent"
                  onClick={() => dispatch({ type: 'MARK_ABSENT', payload: student.id })}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;