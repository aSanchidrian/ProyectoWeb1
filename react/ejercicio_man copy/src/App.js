import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import Modal from "react-bootstrap/Modal";

import Card from "./Card";

function App() {
  const [info, setInfo] = useState([]);

  const sendGetRequest = async () => {
    try {
      const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
      setInfo(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <div>

      {/* div */}
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              PyLibs
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#web">
                    Web
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#datascience">
                    Data-Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#others">
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <br></br>
      <br></br>

      {/* cards */}
      <div className="mt-2">
        {info.map((elemento) => (
          <Card info={elemento} />
        ))}
      </div>
    </div>
  );
}

export default App;
