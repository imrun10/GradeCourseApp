import './App.css';
import React, { useState } from "react";
import Axios from 'axios'

function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  function sendFile () {
    Axios.post("http://localhost:3001/api/save/",{
    arr:array,
    }).then(console.log("SENT"))}

    function showData () {
      Axios.get("http://localhost:3001/api/show/").then(console.log("shown"))
    }
    


  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
            
          }}
        >
          IMPORT CSV

        </button>

        <button onClick= {(e) => {
          sendFile();
        }}>
          +
        </button>

        <button onClick= {(e) => {showData();}}></button>
      </form>
 
      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;