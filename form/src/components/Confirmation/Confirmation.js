import React from "react";
import GetData from "../GetData/GetData";
import "./Cofirmation.css";

function Confirmation() {
  const data = GetData();
  console.log(data);
  return (
    <div className="confirmationPage-container">
      <div className="wrapper">
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Address 1: {data.addressLine1}</p>
        <p>Address 2: {data.addressLine2}</p>
        <p>City: {data.city}</p>
        <p>State: {data.state}</p>
        <p>Zip: {data.zip}</p>
      </div>
    </div>
  );
}

export default Confirmation;
