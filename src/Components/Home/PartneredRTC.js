import React from "react";

function PartneredRTC({ PartneredRTCs }) {
  return (
    <>
      <div className="GlobalPresence">
        <h1>PARTNERED WITH</h1>
        <div>
          <h1>25 RTC'S</h1>
          <button>View All</button>
        </div>
        <div className="countries">
          {PartneredRTCs.map((x, i) => {
            return (
              <div key={i} className="country partneredRtc">
                <img src={x.imgLink} alt="" />
                <h3>{x.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PartneredRTC;
