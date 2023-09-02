import React from "react";

function GlobalPresence({ GlobalPresenceCountries }) {
  return (
    <>
      <div className="GlobalPresence">
        <h1>GLOBAL PRESENCE</h1>
        <div className="countries">
          {GlobalPresenceCountries.map((x, i) => {
            return (
              <div key={i} className="country">
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

export default GlobalPresence;
