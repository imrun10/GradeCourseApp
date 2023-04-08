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
        )
    default:
      return(<div>TABLE NOT FOUND</div>)
    }
  }
   
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
                <th scope="row">{e.id}</th>{" "}
                <td>{e.stud_id}</td>
                <td>{e.stud_name}</td>
                <td>{e.quiz_1}</td>
                <td>{e.quiz_2}</td>
                <td>{e.quiz_3}</td>
                <td>{e.quiz_4}</td>
                <td>{e.homework_1}</td>
                <td>{e.homework_2}</td>
                <td>{e.midterm}</td>

                <td>{e.final}</td>
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
                <th scope="row">{e.no}</th>{" "}
                <td>{e.stud_id}</td>
                <td>{e.stud_name}</td>
                <td>{e.course_per}</td>
                <td>{e.course_letter}</td>
              </tr>
            ))}
          </tbody>
        );
        break;
      case 3:
        return (
          <tbody class="table">
            {content.map((e) => (
              <tr
                onClick={() => {
                  toStudent(parseInt(e.no - 1));
                }}
              >
                {" "}
                <th scope="row">{e.id}</th>{" "}
                <td>{e.stud_id}</td>
                <td>{e.stud_name}</td>
                <td>{e.homwork_avg}</td>
                <td>{e.quiz_avg}</td>
                <td>{e.midterm_avg}</td>
                <td>{e.final_avg}</td>
              </tr>
            ))}
          </tbody>
        );

      default:
        return(<div>TABLE NOT FOUND</div>)
        
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
