import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import "./componentsCSS.css";

function Table(props) {
  const navigate = useNavigate(); // look at courses.js to find out what we are doing here

  const toStudent = (i) => {
    navigate("student", { state: props.props[i] }); // navigate to the student page and send the student data (props.props[i] [one specific student object]) to the student page
  };

  function header(index) {
    switch (index) {
      case 1:
        return (
          <tr class="table">
            <th scope="col">#</th> {/*this is the table headers*/}
            <th scope="col">Student ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Quiz 1</th>
            <th scope="col">Quiz 2</th>
            <th scope="col">Quiz 3</th>
            <th scope="col">Quiz 4</th>
            <th scope="col">Homework 1</th>
            <th scope="col">Homework 2</th>
            <th scope="col">Midterm Exam</th>
            <th scope="col">Final Exam</th>
          </tr>
        );
      case 2:
        return (
          <tr class="table">
            <th scope="col">#</th> {/*this is the table headers*/}
            <th scope="col">Student ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Course Name</th>
            <th scope="col">Course % Grade</th>
            <th scope="col">Course Letter Grade</th>
          </tr>
        );
      case 3:
        return (
          <tr class="table">
            <th scope="col">#</th> {/*this is the table headers*/}
            <th scope="col">Student ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Avg Homework</th>
            <th scope="col">Avg Quiz</th>
            <th scope="col">Avg Midterm</th>
            <th scope="col">Avg Final</th>
          </tr>
        );
      default:
        return <div>TABLE NOT FOUND</div>;
    }
  }

  function letterGrade(grade) {
    if (grade >= 90) {
      return "A";
    } else if (grade >= 80) {
      return "B";
    } else if (grade >= 70) {
      return "C";
    } else if (grade >= 60) {
      return "D";
    } else {
      return "F";
    }}
  function body(index, content) {
    switch (index) {
      case 1:
        return (
          <tbody class="table">
            {content.map((e) => (
              <tr
                onClick={() => {
                  toStudent(parseInt(e.no - 1));
                }}
              >
                {" "}
                <th scope="row">{e.id}</th> <td>{e.student_id}</td>
                <td>{e.student_fname}</td>
                <td>{e.quiz_1}</td>
                <td>{e.quiz_2}</td>
                <td>{e.quiz_3}</td>
                <td>{e.quiz_4}</td>
                <td>{e.homework_1}</td>
                <td>{e.homework_2}</td>
                <td>{e.midterm}</td>
                <td>{e.exam}</td>
              </tr>
            ))}
          </tbody>
        );
        break;
      case 2:
        return (
          <tbody class="table">
            {content.map((e) => (
              <tr
                onClick={() => {
                  toStudent(parseInt(e.no - 1));
                }}
              >
                {" "}
                <th scope="row">{e.no}</th> <td>{e.student_id}</td>
                <td>{e.student_fname}</td>
                <td>{e.course_name}</td>  
                <td>{(0.2*(e.quiz_1 + e.quiz_2 + e.quiz_3 + e.quiz_4)/4)+(0.2*(e.homework_1 + e.homework_2)/2)+(0.3*(e.midterm))+(0.3*(e.exam))}</td>
                <td>{letterGrade((0.2*(e.quiz_1 + e.quiz_2 + e.quiz_3 + e.quiz_4)/4)+(0.2*(e.homework_1 + e.homework_2)/2)+(0.3*(e.midterm))+(0.3*(e.exam)))}</td>
              </tr>
            ))}
          </tbody>
        );
        break;
      case 3:
        return (
          <tbody class="table">
            {content.map((e) => (
              <tr>
                {" "}
                <th scope="row">{e.assignment_id}</th> <td>{e.student_id}</td>
                <td>{e.student_fname}</td>
                <td>{(e.homework_1 + e.homework_2) / 2}</td>
                <td>{(e.quiz_1 + e.quiz_2 + e.quiz_3 + e.quiz_4) / 4}</td>
                <td>{e.midterm}</td>
                <td>{e.exam}</td>
              </tr>
            ))}
          </tbody>
        );

      default:
        return <div>TABLE NOT FOUND</div>;
    }
  }

  return (
    <table class="table">
      {" "}
      {/*this is the table that will display the students data*/}
      <thead>{header(props.code)}</thead>
      {body(props.code, props.props)}
    </table>
  );
}

export default Table; // export the component so we can use it in other files
