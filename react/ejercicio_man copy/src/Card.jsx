import React from "react";

const card = ({ info }) => {
  return (
    <div 
      class="card text-black bg-light mt-3 d-inline-block"
      style={{ width: "30rem", marginRight: "1rem" }}
    >
      <div class="card-header">{info.username}</div>
      <div class="card-body">
        <h5 class="card-title">{info.name}</h5>
        <p class="card-text">{info.address.street}</p>

        <button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
          More info
        </button>
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              {info.name}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default card;
