import React from "react";
import "./CustomerReviews.css";

const ridecarts = {
  products: [
    {
      heading: [
        "kabilan M",
        "Ashish Sonkar",
        "Ravindra G",
        "BALAMURUGAN VEERAKUMAR",
      ],
      para1: [
        "Travelled to Mysore on 12 Aug 2023 with -1 People.",
        "Travelled to Patparganj on 10 Apr 2023 with 4 People.",
        "Travelled to Ooty on 08 Oct 2022 with 12 People.",
        "Travelled to Mettur on 28 Sep 2022 with 12 People.",
      ],

      para2: [
        ' "Overall I liked the travel experience. Driver attitude and behaviour is good" ',
        '"Very nice driver very well behaviour and helpful attitude. I personally feel good with this..." ',
        '"Experienced, friendly and professional behavior by the driver. Thanks to redbus for making my..." ',
        ' "Very great experience. Driver Moorthy is very helpful and very knowledgeable person. He was..."',
      ],
    },
  ],
};

function CustomerReviews() {
  return (
    <>
      {ridecarts.products.map((items) => {
        return (
          <>
            <h3>Customer Reviews</h3>
            <div className="ridecarts">
              <div>
                <span>
                  <img
                    src="https://www.redbus.in/bushire/static/mwebv2/home/group-copy-9.svg"
                    alt=""
                  />{" "}
                  5.0
                </span>
                <h4>{items.heading[0]}</h4>
                <p style={{ color: "#767676" }}>{items.para1[0]}</p>
                <p>{items.para2[0]}</p>
              </div>

              <div>
                <span>
                  <img
                    src="https://www.redbus.in/bushire/static/mwebv2/home/group-copy-9.svg"
                    alt=""
                  />{" "}
                  5.0
                </span>
                <h4>{items.heading[1]}</h4>
                <p style={{ color: "#767676" }}>{items.para1[1]}</p>
                <p>{items.para2[1]}</p>
              </div>

              <div>
                <span>
                  <img
                    src="https://www.redbus.in/bushire/static/mwebv2/home/group-copy-9.svg"
                    alt=""
                  />{" "}
                  5.0
                </span>
                <h4>{items.heading[2]}</h4>
                <p style={{ color: "#767676" }}>{items.para1[2]}</p>
                <p>{items.para2[2]}</p>
              </div>

              <div>
                <span>
                  <img
                    src="https://www.redbus.in/bushire/static/mwebv2/home/group-copy-9.svg"
                    alt=""
                  />{" "}
                  5.0
                </span>
                <h4 style={{ width: "170px" }}>{items.heading[3]}</h4>
                <p style={{ color: "#767676" }}>{items.para1[3]}</p>
                <p>{items.para2[3]}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default CustomerReviews;
