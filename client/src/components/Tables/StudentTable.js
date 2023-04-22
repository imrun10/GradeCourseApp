import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import '../style/componentsCSS.css' // importing css file

function StudentTable(props) {
  const navigate = useNavigate();

  return (
    <table class="table">
      {" "}
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">ID</th>
          <th scope="col">Grade</th>
          <th scope="col">GPA</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {props.props.map((e) => (
          <tr>
            <td>{e.name}</td>
            <td>{e.id}</td>
            <td>{e.grade}</td>
            <td>{e.gpa}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable; // export the component so we can use it in other files
