import React from "react";
import Sedan from "../../Components/Ryde/CarRental/Sedan";
import Hatchback from "../../Components/Ryde/CarRental/Hatchback";
import Suvs from "../../Components/Ryde/CarRental/Suv";
import Explanation from "../../Components/Explanation";
import ImageSlider from "../../Components/ImageSlider";
import SeatBooking from "../../Components/SeatBooking";

function CarRental() {
  return (
    <div>
      <Explanation></Explanation>
      <ImageSlider></ImageSlider>
      <SeatBooking></SeatBooking>

      {/* <Suvs></Suvs> */}
      {/* <Sedan></Sedan> */}
      {/* <Hatchback></Hatchback> */}
    </div>
  );
}

export default CarRental;
