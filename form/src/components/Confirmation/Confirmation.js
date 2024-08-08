import React from "react";
import "./Cofirmation.css";

function Confirmation({ values }) {
  return (
    <div className="confirmationPage-container">
      <div className="wrapper">
        <p>Name: {values.name}</p>
        <p>Email: {values.email}</p>
        <p>Phone: {values.phone}</p>
        <p>Address 1: {values.addressLine1}</p>
        <p>Address 2: {values.addressLine2}</p>
        <p>City: {values.city}</p>
        <p>State: {values.state}</p>
        <p>Zip: {values.zip}</p>
      </div>
    </div>
  );
}

export default Confirmation;
