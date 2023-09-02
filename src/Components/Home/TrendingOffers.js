import React from "react";

function TrendingOffers({ second }) {
  return (
    <>
      <div className="TrendingOffersContainer">
        <h1>TRENDING OFFERS</h1>
        <div
          className="TrendingOffers"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          {second.map((x, i) => {
            return (
              <div
                key={i}
                className="card"
                style={{ backgroundColor: x.backgroundColor }}
              >
                <img src={x.imgLink} alt="" />
                <div className="card_content">
                  <p>{x.vehicle}</p>
                  <h3>{x.title}</h3>
                  <p>{x.validUpto}</p>
                  <p>{x.couponCode}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img src="https://st.redbus.in/Images/99/webreferal.png" alt="" />
      </div>
    </>
  );
}

export default TrendingOffers;
