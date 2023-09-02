import React from "react";
// import { Link } from "react-router-dom";

function VehiclesYouCanBook(p) {
  return (
    <>
      <div
        style={{
          backgroundImage: p.bgImg,
          backgroundRepeat: "no-repeat",
          border: "1px solid transparent",
          borderRadius: "5px",
          width: "28%",
          minHeight: "230px",
          padding: "15px",
        }}
      >
        <h3>{p.heading}</h3>
        <p>{p.para}</p>
      </div>
    </>
  );
}

export default VehiclesYouCanBook;
