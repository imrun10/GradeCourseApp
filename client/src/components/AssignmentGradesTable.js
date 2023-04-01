import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import "./componentsCSS.css";

function AssignmentTable(props) {
  const navigate = useNavigate();

  return (
    <table class="table">
      {" "}
      <thead>
        <tr>
          <th scope="col">Assignment Name</th>
          <th scope="col">Grade</th>
          <th scope="col">Low</th>
          <th scope="col">Mean</th>
          <th scope="col">High</th>
          <th scope="col">Weight</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {props.props.map((e) => (
          <tr>
            {" "}
            <td>{e.name}</td>
            <td>{e.grade} %</td>
            <td>{e.low} %</td>
            <td>{e.mean} %</td>
            <td>{e.high} %</td>
            <td>{e.weight} %</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AssignmentTable; // export the component so we can use it in other files
