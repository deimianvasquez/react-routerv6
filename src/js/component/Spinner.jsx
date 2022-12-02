import React from "react";

const Spinner = () => {
  return (
    <div className="contaier">
      <div className="row">
        <div className="col vh-100 d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
