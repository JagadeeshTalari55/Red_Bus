import React from "react";
import "./Ryde.css";
import RydeFacilities from "../../Components/Ryde/RydeFacilities";
import VehiclesYouCanBook from "../../Components/Ryde/VehiclesYouCanBook";
import RydeFooter from "../../Components/Footer/Ryde/RydeFooter";
import CustomerReviews from "../../Components/Ryde/CustomerReviews/CustomerReviews";
import MoreAboutRyde from "../../Components/Ryde/MoreAboutRyde";
import RydeFAQ from "../../Components/Ryde/RydeFAQs/RydeFAQ";
// import RydeNavbar from "../../Components/Navbar/RydeNavbar/RydeNavbar";
import { Link } from "react-router-dom";

const vehiclesulike = [
  {
    heading: "Hatchbacks and Sedans",
    para: "Ideal for about 2-4 people",
    bgImg:
      "url('https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group5.svg')",
  },
  {
    heading: "SUVs",
    para: "Ideal for about 4-7 people",
    bgImg:
      "url('https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group6.svg')",
  },
  {
    heading: "Tempo Travellers",
    para: "Ideal for 8-16 people",
    bgImg:
      "url('https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group7.svg')",
  },
  {
    heading: "Buses and Mini Buses",
    para: "Ideal for more than 18 people",
    bgImg:
      "url('https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group8.svg')",
  },
];

function Ryde() {
  return (
    <div className="RydePage_Wrapper">
      {/* <RydeNavbar></RydeNavbar> */}
      <div className="vehiclesYouCanBook">
        {vehiclesulike.map((u, i) => {
          return (
            <Link key={i} to="/carRental">
              <VehiclesYouCanBook
                bgImg={u.bgImg}
                key={u.heading}
                heading={u.heading}
                para={u.para}
              ></VehiclesYouCanBook>
            </Link>
          );
        })}
      </div>
      <CustomerReviews></CustomerReviews>
      <MoreAboutRyde></MoreAboutRyde>
      <RydeFAQ></RydeFAQ>

      <RydeFacilities></RydeFacilities>
      <RydeFooter></RydeFooter>
    </div>
  );
}

export default Ryde;
