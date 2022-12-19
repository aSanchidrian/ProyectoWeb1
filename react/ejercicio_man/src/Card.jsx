import React from "react";

import Prueba from "./Prueba";

const card = (props) => {
  return (
    <div
      className="card text-black bg-light mt-4 d-inline-block"
      style={{ width: "30rem" }}
    >
      <div className="card-header">
        {props.info.id}
        {props.info.name}
      </div>
      <div className="card-body">
        <h4 className="card-title">{props.info.name}</h4>
        <p className="card-text">
          <img src={props.info.name + ".png"} width="200" height="200" alt="" />
        </p>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={"#modal" + props.info.id}
        >
          Modal
        </button>

        <div
          className="modal"
          id={"modal" + props.info.id}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {props.info.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">{props.info.description}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <p>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-toggle="collapse"
                    data-target={"#collapse" + props.info.id}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Show code example
                  </button>
                </p>
                <div className="collapse" id={"collapse" + props.info.id}>
                  <div className="card card-body">
                    <pre>
                      <code className="language-py">{props.info.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
