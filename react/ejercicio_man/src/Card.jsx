import React from "react";

const card = ({ info }) => {
  return (
    <div
      className="card text-black bg-light m-2 mt-4 d-inline-flex"
      style={{ width: "30rem" }}
    >
      <div className="card-header">
        {info.id}
        {info.name}
      </div>
      <div className="card-body">
        <h4 className="card-title">{info.name}</h4>
        <p className="card-text">
          <img src={info.name+".png"} width="200" height="200" />
        </p>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={"#modal" + info.id}
        >
          Modal
        </button>

        <div
          className="modal"
          id={"modal" + info.id}
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {info.name}
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
              <div className="modal-body">{info.description}</div>
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
                    data-target={"#collapse" + info.id}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Show code example
                  </button>
                </p>
                <div className="collapse" id={"collapse" + info.id}>
                  <div className="card card-body">
                    <pre>
                      <code class="language-py">{info.code}</code>
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
