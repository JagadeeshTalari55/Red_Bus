import React from "react";

const PrimoData = [
  {
    imgLink:
      "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg",
    title: "1 of 5 buses qualify",
    description:
      "Primo’s strict safety qualification ensures a safer travel for you",
    backgroundColor: "#387A79",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg",
    title: "Preferred by 90%",
    description:
      "90% of travellers re-book Primo buses for its punctuality and comfort",
    backgroundColor: "#387A79",
  },
  {
    imgLink:
      "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg",
    title: "9 Lac+ monthly travellers",
    description: "In 2022, 9 Lac+ people traveled with Primo every month",
    backgroundColor: "#387A79",
  },
];

function PrimoCards() {
  return (
    <>
      <div
        className="TrendingOffers"
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        {PrimoData.map((x) => {
          return (
            <div className="card primoCard">
              <img src={x.imgLink} alt="" />
              <div className="card_content">
                <h3>{x.title}</h3>
                <p>{x.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PrimoCards;
