import React from "react";
import "./Cofirmation.css";

function Confirmation({ values }) {
  return (
    <div className="confirmationPage-container">
      <div className="wrapper">
        {/* <h1 className="confirmation-title">Confirmation</h1> */}
        <div className="info-group">
          <p className="info-label">Name:</p>
          <p className="info-value">{values.name}</p>
        </div>
        <div className="info-group">
          <p className="info-label">Email:</p>
          <p className="info-value">{values.email}</p>
        </div>
        <div className="info-group">
          <p className="info-label">Phone:</p>
          <p className="info-value">{values.phone}</p>
        </div>
        <div className="info-group">
          <p className="info-label">Address 1:</p>
          <p className="info-value">{values.addressLine1}</p>
        </div>
        <div className="info-group">
          <p className="info-label">Address 2:</p>
          <p className="info-value">{values.addressLine2}</p>
        </div>
        <div className="info-group">
          <p className="info-label">City:</p>
          <p className="info-value">{values.city}</p>
        </div>
        <div className="info-group">
          <p className="info-label">State:</p>
          <p className="info-value">{values.state}</p>
        </div>
        <div className="info-group">
          <p className="info-label">Zip:</p>
          <p className="info-value">{values.zip}</p>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
