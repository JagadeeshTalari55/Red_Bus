import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
// import { FaAmilia, FaFacebookF } from "react-icons/fa6";
import Ryde from "./Pages/Ryde/Ryde";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RydeRail from "./Pages/RydeRail";
import CarRental from "./Pages/Ryde/CarRental";

const trendingOffers = [
  {
    imgLink:
      "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#1D4DA5",
  },
  {
    imgLink: "http://st.redbus.in/Images/INDOFFER/SUPERHIT/80x80_SUPERHIT.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#387A79",
  },
  {
    imgLink: "https://st.redbus.in/Images/INDOFFER/BUS200/80x80_BUS200.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#72171C",
  },
  {
    imgLink: "https://st.redbus.in/Images/INDOFFER/RB200/80x80_RB200.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#2F95AE",
  },
  {
    imgLink: "https://st.redbus.in/Images/APSRTC/new/APSRTC_3.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#1D4DA5",
  },
];

const PartneredRTCs = [
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/10283.png",
    title: "APSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/GSRTC.svg",
    title: "GSRTC",
  },
  {
    imgLink: "https://st.redbus.in/Images/carousel/TSRTC.png",
    title: "TSRTC",
  },
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/10823.png",
    title: "MSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/KERALA-RTC.svg",
    title: "Kerala RTC",
  },
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/16426.png",
    title: "SBSTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/RSRTC.svg",
    title: "RSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/UPSRTC.svg",
    title: "UPSRTC",
  },
];

const GlobalPresenceCountries = [
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Colombia.svg",
    title: "Colombia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/India.svg",
    title: "India",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Indonesia.svg",
    title: "Indonesia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Malaysia.svg",
    title: "Malaysia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Peru.svg",
    title: "Peru",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Singapore.svg",
    title: "Singapore",
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Navbar></Navbar>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                first={trendingOffers}
                PartneredRTCs={PartneredRTCs}
                GlobalPresenceCountries={GlobalPresenceCountries}
              ></Home>
            }
          ></Route>
          <Route path="/ryde" element={<Ryde></Ryde>}></Route>
          <Route path="/ryderail" element={<RydeRail></RydeRail>}></Route>
          <Route path="/carRental" element={<CarRental></CarRental>}></Route>
        </Routes>
        {/* <Route path="/ryderail" elemetn={}></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
