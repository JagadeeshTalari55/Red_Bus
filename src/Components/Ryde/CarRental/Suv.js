import "./Suv.css";
const VehicalsType = [
  {
    Cities: "Bangalore to Mysore",
    Distance: "145 Kms included",
    CabPrices: "₹4042",
    Para1: "145 kms",
    Para2: "Extra fee ₹20/km after 145Km",
    Para3: "onwards",
  },
  {
    Cities: "Mumbai to Pune",
    Distance: "155 Kms included",
    CabPrices: "₹3145",
    Para1: "155 kms",
    Para2: "Extra fee ₹24/km after 155Km",
    Para3: "onwards",
  },
  {
    Cities: "Delhi to Agra",
    Distance: "230 Kms included",
    CabPrices: "₹3702",
    Para1: "230 kms",
    Para2: "Extra fee ₹24/km after 155Km",
    Para3: "onwards",
  },
  {
    Cities: "Delhi to Jaipur",
    Distance: "297 Kms included",
    CabPrices: "₹4225",
    Para1: "297 kms",
    Para2: "Extra fee ₹12.5/km after 297Km",
    Para3: "onwards",
  },
  {
    Cities: "Pune to Mumbai",
    Distance: "161 Kms included",
    CabPrices: "₹3853",
    Para1: "161 kms",
    Para2: "Extra fee ₹24/km after 161Km",
    Para3: "onwards",
  },
  {
    Cities: "Delhi to Haridwar",
    Distance: "229 Kms included",
    CabPrices: "₹4322",
    Para1: "229 kms",
    Para2: "Extra fee ₹15.25/km after 229Km",
    Para3: "onwards",
  },
];

const VehicalsType2 = [
  {
    Img: "https://s3.rdbuz.com/Images/PropHatchback.png?auto=format&fit=max&w=96",
    ImgHeading: "Hatchback",
    ImgPara: "Indica, Swift or similar",
  },
  {
    Img: "https://s3.rdbuz.com/Images/PropSuv.png?auto=format&fit=max&w=96",
    ImgHeading: "Suv",
    ImgPara: "Innova, Xylo or similar",
  },
  {
    Img: "https://s3.rdbuz.com/Images/PropSedan.png?auto=format&fit=max&w=96",
    ImgHeading: "Sedan",
    ImgPara: "Etios, Dzire or similar",
  },
];

function Suvs() {
  return (
    <>
      {/* Img Data */}
      <div style={{ width: "70vw", margin: "auto" }}>
        {VehicalsType2.map((y) => {
          return (
            <div className="VehicalsImgData">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  border: "1px solid grey",
                }}
              >
                <img width={"100px"} src={y.Img} alt="" />
                {/* <label htmlFor="hatchBack"> */}
                <div>
                  <h2>{y.ImgHeading}</h2>
                  <p>{y.ImgPara}</p>
                </div>
                {/* </label> */}
                <input id="hatchBack" type="radio" name="Cabs"></input>
              </div>
            </div>
          );
        })}
      </div>
      {/* --------------------------*/}

      {/* --------VehicalsData--------- */}
      <div className="ImgHeadings">
        <h3>Cabs from Car Rentals</h3>
        <h3>Included Kms and Extra Prices</h3>
        <h3>Cab Prices</h3>
      </div>
      {VehicalsType.map((x) => {
        return (
          <div className="VehicalsData">
            {/* Cities Session */}
            <div>
              <h3>{x.Cities}</h3>
              <p>{x.Para1}</p>
            </div>
            {/*  */}

            {/*  */}
            <div>
              <h3>
                <img
                  width={"18px"}
                  src="https://www.redbus.in/bus-hire/images/seoCarRental/tick.png?auto=format&fit=max&w=16"
                  alt=""
                />
                {x.Distance}
              </h3>
              <p>{x.Para2}</p>
            </div>
            {/*  */}

            {/*  */}
            <div>
              <h3>{x.CabPrices}</h3>
              <p>{x.Para3}</p>
            </div>
            {/*  */}
            <button className="btn">Book</button>
          </div>
        );
      })}
      {/* ------------------ */}
    </>
  );
}

export default Suvs;
