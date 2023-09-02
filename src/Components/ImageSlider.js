import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ImageSlider.css";

const allImages = [
  "https://s1.rdbuz.com/busoperatorimages/1643566112286_raw_md.jpeg",
  "https://s1.rdbuz.com/busoperatorimages/1643566112275_raw_md.jpeg",
  "https://s1.rdbuz.com/busoperatorimages/1643566913116_raw_md.jpeg",
  "https://s1.rdbuz.com/busoperatorimages/1643566112275_raw_md.jpeg",
];

function ImageSlider() {
  const [count, setCount] = useState(0);

  function PrevBtnLogic() {
    if (count == 0) {
      setCount(allImages.length - 1);
    } else {
      setCount(count - 1);
    }
  }

  function NextBtnLogic() {
    if (count == allImages.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <div>
      <h2>ImageSlider</h2>
      <div className="imgContainer">
        <button className="ImgSliderBtn imgBtn1" onClick={PrevBtnLogic}>
          <IoIosArrowBack></IoIosArrowBack>
        </button>
        <img src={allImages[count]} alt="" />
        <button className="ImgSliderBtn imgBtn2" onClick={NextBtnLogic}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
