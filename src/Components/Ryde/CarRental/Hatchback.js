import React from "react";
import "./Hatchback.css";
const VehicleType = [
  {
    Cities: "Banglore to Mysore",
    Distance: "145kms included",
    CabPrices: "₹2434",
    Para1: "145kms",
    Para2: "Extra fee ₹13.5/km after 145Km",
    Para3: "onwards",
  },
  {
    Cities: "Mumbai to Pune",
    Distance: "143 Kms included",
    CabPrices: "₹2381",
    Para1: "143 kms",
    Para2: "Extra fee ₹15.4/km after 143Km",
    Para3: "onwards",
  },
  {
    Cities: "Delhi to Agra",
    Distance: "243 Kms included",
    CabPrices: "₹2844",
    Para1: "243 kms",
    Para2: "Extra fee ₹9.75/km after 243Km",
    Para3: "onwards",
  },
  {
    Cities: "Delhi to Jaipur",
    Distance: "297 Kms included",
    CabPrices: "₹2844",
    Para1: "297 kms",
    Para2: "Extra fee ₹9/km after 297Km",
    Para3: "onwards",
  },
  {
    Cities: "Delhi to Haridwar",
    Distance: "229 Kms included",
    CabPrices: "₹3224",
    Para1: "229 kms",
    Para2: "Extra fee ₹11.75/km after 229Km",
    Para3: "onwards",
  },
];

function Hatchback() {
  return (
    <div>
      <div
        className="hatch"
        style={{ backgroundColor: "#e9f0ff", gap: "100px" }}
      >
        <h3>Cabs from Car Rentals</h3>
        <h3>Included Kms and Extra Prices</h3>
        <h3>Cab Prices</h3>
      </div>
      {VehicleType.map((x) => {
        return (
          <div className="hatch" style={{ justifyContent: "space-between" }}>
            <div>
              <h3>{x.Cities}</h3>
              <p>{x.Para1}</p>
            </div>
            <div>
              <h3>
                <img
                  src="https://www.redbus.in/bus-hire/images/seoCarRental/tick.png?auto=format&fit=max&w=16"
                  alt=""
                  width={20}
                />
                {x.Distance}
              </h3>
              <p>{x.Para2}</p>
            </div>
            <div>
              <h3>{x.CabPrices}</h3>
              <p>{x.Para3}</p>
            </div>
            <div>
              <button>Book</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Hatchback;
