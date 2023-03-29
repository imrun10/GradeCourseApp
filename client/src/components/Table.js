import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import { useState } from "react";

import './componentsCSS.css'

function Table(props) {
    const navigate = useNavigate();

    const toStudent = (i) => {
        navigate('student', {state: props.props[i]});
    }

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
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
          {props.props.map((e) => (
            <tr onClick={()=>{toStudent(parseInt(e.no-1))}}>
                <th scope="row">{e.no}</th>
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
    );}


export default Table;

  

