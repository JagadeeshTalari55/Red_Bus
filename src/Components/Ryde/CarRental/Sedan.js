import React from "react";
const VehicleType = [
  {
    Cities: "Banglore to Mysore",
    Distance: "145kms included",
    CabPrices: "₹2434",
    Para1: "145kms",
    Para2: "Extra fee ₹13.5/km after 145kms",
    Para3: "onwards",
  },
  {
    Cities: "Mumbai to Pune",
    Distance: "155 Kms included",
    CabPrices: "₹2494",
    Para1: "155 kms",
    Para2: "Extra fee ₹16/km after 155Km",
    Para3: "onwards",
  },
  {
    Cities: "Delhi to Agra",
    Distance: "230 Kms included",
    CabPrices: "₹2736",
    Para1: "230 kms",
    Para2: "Extra fee ₹16/km after 230Km",
    Para3: "onwards",
  },

  {
    Cities: "Delhi to Jaipur",
    Distance: "297 Kms included",
    CabPrices: "₹3122",
    Para1: "297 kms",
    Para2: "Extra fee ₹9/km after 297Km",
    Para3: "onwards",
  },
  {
    Cities: "Pune to Mumbai",
    Distance: "161 Kms included",
    CabPrices: "₹3346",
    Para1: "161 kms",
    Para2: "Extra fee ₹16/km after 161Km",
    Para3: "onwards",
  },
];
function Sedan() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          //   justifyContent: "space-between",
          // gap: "350px",
          backgroundColor: "#E9F0FF",
          width: "80vw",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <h3>Cabs from Car Rentals</h3>
        <h3>Included Kms and Extra Prices</h3>
        <h3>Cab Prices</h3>
      </div>
      <div>
        {VehicleType.map((x) => {
          return (
            <div
              style={{
                // display: "flex",
                // gap: "100px",
                border: "1px solid black",
                borderRadius: "10px",
                // width: "80vw",

                // margin: "auto",
                // justifyContent: "space-between",
              }}
            >
              <div>
                <h3>{x.Cities}</h3>
                <p>{x.Para1}</p>
              </div>
              <div>
                <h3>
                  <img
                    // style={{ width: "15px", height: "15px" }}
                    src="https://www.redbus.in/bus-hire/images/seoCarRental/tick.png?auto=format&fit=max&w=16"
                  ></img>
                  {x.Distance}
                </h3>
                <p>{x.Para2}</p>
              </div>
              <div>
                <h3>{x.CabPrices}</h3>
                <p>{x.Para3}</p>
              </div>
              <div
                style={{
                  //   backgroundColor: "#D84E55",
                  color: "white",
                  width: "110px",
                  height: "30px",
                  marginTop: "50px",
                  marginRight: "30px",
                }}
              >
                <button
                  style={{ backgroundColor: "#D84E55", padding: "10px 20px" }}
                >
                  Book
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sedan;
