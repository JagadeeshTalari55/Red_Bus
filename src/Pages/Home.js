import React from "react";
import TrendingOffers from "../Components/Home/TrendingOffers";
import PrimoCards from "../Components/Home/PrimoCards";
import PartneredRTC from "../Components/Home/PartneredRTC";
import GlobalPresence from "../Components/Home/GlobalPresence";

function Home({ first, PartneredRTCs, GlobalPresenceCountries }) {
  return (
    <>
      <div className="SearchBuses">
        <div className="searchBusesElement element1">
          <img src="./Images/fromBus.png" alt="" />
          <p>From</p>
        </div>
        <div className="searchBusesElement element2">
          {" "}
          <img src="./Images/toBus.png" alt="" />
          To
        </div>
        <div className="searchBusesElement">
          <img src="./Images/dateImg.png" alt="" />
          Date
        </div>
        <div className="searchBusesElement searchBuses">SEARCH BUSES</div>
      </div>
      <TrendingOffers second={first}></TrendingOffers>
      <PrimoCards></PrimoCards>
      <PartneredRTC PartneredRTCs={PartneredRTCs}></PartneredRTC>
      <GlobalPresence
        GlobalPresenceCountries={GlobalPresenceCountries}
      ></GlobalPresence>
    </>
  );
}

export default Home;
