import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import "./componentsCSS.css";

function Table(props) {
  const navigate = useNavigate(); // look at courses.js to find out what we are doing here

  const toStudent = (i) => {
    navigate("student", { state: props.props[i] }); // navigate to the student page and send the student data (props.props[i] [one specific student object]) to the student page
  };

  return (
    <table class="table">
      {" "}
      {/*this is the table that will display the students data*/}
      <thead>
        <tr>
          <th scope="col">#</th> {/*this is the table headers*/}
          <th scope="col">Name</th>
          <th scope="col">ID</th>
          <th scope="col">lab assignment</th>
          <th scope="col">knowledge checks</th>
          <th scope="col">tests</th>
          <th scope="col">Participation</th>
          <th scope="col">Final Grade</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {/*this is the table body that will display the students data*/}
        {/*this is a map function that will loop through the students data and display it in the table*/}
        {props.props.map((e) => (
          <tr
            onClick={() => {
              toStudent(parseInt(e.no - 1));
            }}
          >
            {" "}
            {/*when the user click on the student row it will call the toStudent function and pass along the specific student data the user clicked on (parse int just turns string to int)*/}
            {/*this is the table data*/}
            <th scope="row">{e.no}</th>{" "}
            {/*e represenrs the current object we are mapped to*/}
            <td>{e.name}</td>
            <td>{e.id}</td>
            <td>{e.lab}</td>
            <td>{e.knowledge}</td>
            <td>{e.tests}</td>
            <td>{e.participation}</td>
            <td>{e.final}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table; // export the component so we can use it in other files
