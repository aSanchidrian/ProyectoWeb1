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
      // const resp = await axios.get("https://jsonplaceholder.ir/users");
      setInfo([
        {
          id: 1,
          name: "Django",
          description:
            "Framework web de alto nivel que permite el desarrollo rápido de sitios web seguros y mantenibles.",
          // code: "{`html { background: red; }` {`body { color: blue; }`}",
        },
        {
          id: 2,
          name: "Flask",
          description:
            "Flask es un framework ligero escrito en Python que facilita el desarrollo de aplicaciones Web bajo el patrón MVC, similar a Sinatra de Ruby o Express de Node.js.",
        },
        {
          id: 3,
          name: "Tornado",
          description:
            "Tornado es un framework web de Python y una biblioteca de networking asíncrona, desarrollada originalmente en FriendFeed.",
        },
        {
          id: 4,
          name: "web2py",
          description:
            "Framework de código abierto en Python para el desarrollo ágil de aplicaciones web seguras conectadas a servicios de bases de datos.",
        },
        {
          id: 5,
          name: "Bottle",
          description:
            "Bottle es una framework ligera y rápida para Python. No tiene dependencias externas, a excepción de la Librería Estándar de Python.",
        },
        {
          id: 6,
          name: "CherryPy",
          description:
            "CherryPy permite a los desarrolladores crear aplicaciones web de la misma manera que lo harían en cualquier otro programa orientada a objetos.",
        },
        {
          id: 7,
          name: "Falcon",
          description:
            "Falcon es un framework web de Python confiable y de alto rendimiento para construir backends y microservicios de aplicaciones a gran escala.",
        },
        {
          id: 8,
          name: "Pyramid",
          description:
            "Pyramid es una framework de código abierto que combina Pylons 1.0 y repoze.bfg. También fue una de las primeras frameworks en ser compatible con Python 3.",
        },
        {
          id: 9,
          name: "TurboGears",
          description:
            "Turbogears fue inicialmente creada como una capa full-stack encima de Pylons, pasando a convertise una interfaz web WSGI independiente que puede actuar tanto como una framework full stack (como Django) o como una micro framewowrk (como Django).",
        },
        {
          id: 10,
          name: "Hug",
          description:
            "Hug es una framework que simplifica la creacion de API&#39;s a traves de mutliples interfaces.",
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
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

      {info.map((info) => (
        <Card info={info} />
      ))}
    </div>
  );
}

export default App;
