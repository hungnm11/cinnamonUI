/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/scss/img/cinnmoai.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="" className="logo" />
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Nav1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Nav2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Nav3
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              <FontAwesomeIcon icon={faBars} />
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <h1 className="display-4">State 1</h1>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col" className="text-right">
                Point
              </th>
              <th scope="col">Level</th>
              <th scope="col">Star</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mike</td>
              <td className="text-right">1,230</td>
              <td>
                <div className="progress">
                  <div
                    style={{ width: "80%" }}
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </td>
              <td className="text-center">
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
              </td>
              <td className="text-center">
                <FontAwesomeIcon icon={faTrash} color="gray" />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Alex</td>
              <td className="text-right">45</td>
              <td>
                <div className="progress">
                  <div
                    style={{ width: "50%" }}
                    className="progress-bar progress-bar-striped bg-warning"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </td>
              <td className="text-center">
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
              </td>
              <td className="text-center">
                <FontAwesomeIcon icon={faTrash} color="gray" />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Christopher</td>
              <td className="text-right">0</td>
              <td>
                <div className="progress">
                  <div
                    style={{ width: "20%" }}
                    className="progress-bar progress-bar-striped bg-danger"
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </td>
              <td className="text-center">
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
              </td>
              <td className="text-center">
                <FontAwesomeIcon icon={faTrash} color="gray" />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John</td>
              <td className="text-right">-60</td>
              <td>
                <div className="progress">
                  <div
                    style={{ width: "80%" }}
                    role="progressbar"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </td>
              <td></td>
              <td className="text-center">
                <FontAwesomeIcon icon={faTrash} color="gray" />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="col-sm-12 text-right">
          <button type="button" className="btn btn-secondary">
            Edit
          </button>
          <button type="button" className="btn btn-primary">
            Ok
          </button>
        </div>
      </div>
      <footer className="footer py-3">
        <div className="container">
          <div className="row">
          <div className="col-6">
            <span className="text-muted">Extend Human Potential</span>
          </div>
          <div className="col-6">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. 
            </span>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
