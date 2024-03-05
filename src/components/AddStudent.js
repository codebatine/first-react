import { useState } from 'react';

const AddStudent = ({ createStudent }) => {
  const [student, setStudent] = useState('');
  const [studentYear, setStudentYear] = useState(0);
  const [studentCourse, setStudentCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createStudent({ name: student, year: studentYear, course: studentCourse });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="App-form"
    >
      <input
        type="text"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={studentYear}
        onChange={(e) => setStudentYear(e.target.value)}
        placeholder="Start Year"
      />
      <input
        type="text"
        value={studentCourse}
        onChange={(e) => setStudentCourse(e.target.value)}
        placeholder="Course"
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

const Students = ({ students, deleteStudent }) => {
  return (
    <div>
      {students.map((student, index) => (
        <div key={student.name}>
          <h2>{student.name}</h2>
          <h2>{student.year}</h2>
          <h2>{student.course}</h2>
          <button
            onClick={() => deleteStudent(index)}
            className="App-button"
          >
            Unlist Student
          </button>
        </div>
      ))}
    </div>
  );
};

class Student {
  constructor(name, year, course) {
    this.name = name;
    this.year = year;
    this.course = course;
  }
}

const App = () => {
  const [students, setStudents] = useState([]);

  const createStudent = (student) => {
    const newStudent = new Student(student.name, student.year, student.course);
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const deleteStudent = (index) => {
    setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AddStudent createStudent={createStudent} />
      <Students
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
};

export default App;
