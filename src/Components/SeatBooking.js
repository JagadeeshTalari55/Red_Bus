import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { TbSteeringWheel } from "react-icons/tb";
import "./SeatBooking.css";

function SeatBooking() {
  const [activeBtn, setActiveBtn] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function seatsMngmt(seatNo) {
    const newActiveBtnArray = activeBtn.map((eachbtn, i) => {
      if (seatNo === i) {
        return !eachbtn;
      }
      return eachbtn;
    });

    setActiveBtn(newActiveBtnArray);
  }
  return (
    <div className="seatBookingParent">
      <h1>SeatBooking</h1>
      <section className="seatPriceBtnsWrapper">
        <div>
          <h4>Seat Price</h4>
          <button className="seatPriceBtn">All</button>
          <button className="seatPriceBtn">1990</button>
          <button className="seatPriceBtn">2090</button>
          <button className="seatPriceBtn">2290</button>
        </div>
        <RxCrossCircled style={{ fontSize: "30px" }}></RxCrossCircled>
      </section>
      <section className="DecksWrapper">
        Lower Deck
        <div className="LowerDeck">
          <div className="DeckLine1"></div>
          <div className="LowerDeckPart1">
            <TbSteeringWheel className="steering"></TbSteeringWheel>
            <div className="deckBtnsLine">
              {activeBtn.map((x, i) => {
                return (
                  <button
                    className={activeBtn[i] ? "deckBtnsActive" : "deckBtns"}
                    onClick={() => {
                      seatsMngmt(i);
                    }}
                  >
                    {activeBtn[i] ? `L${i + 1}` : ""}
                    <div
                      className={activeBtn[i] ? "pillowNone" : "pillow"}
                    ></div>
                  </button>
                );
              })}
              {/* <button
                className={activeBtn[0] ? "deckBtnsActive" : "deckBtns"}
                onClick={() => {
                  seatsMngmt(0);
                }}
              >
                <div className={activeBtn[0] ? "pillowNone" : "pillow"}></div>
              </button> */}
              {/* <button
                className={activeBtn[1] ? "deckBtnsActive" : "deckBtns"}
                onClick={() => {
                  seatsMngmt(1);
                }}
              >
                <div className={activeBtn[1] ? "pillowNone" : "pillow"}></div>
              </button>
              <button
                className={activeBtn[2] ? "deckBtnsActive" : "deckBtns"}
                onClick={() => {
                  seatsMngmt(2);
                }}
              >
                <div className={activeBtn[2] ? "pillowNone" : "pillow"}></div>
              </button>
              <button
                className={activeBtn[3] ? "deckBtnsActive" : "deckBtns"}
                onClick={() => {
                  seatsMngmt(3);
                }}
              >
                <div className={activeBtn[3] ? "pillowNone" : "pillow"}></div>
              </button>
              <button
                className={activeBtn[4] ? "deckBtnsActive" : "deckBtns"}
                onClick={() => {
                  seatsMngmt(4);
                }}
              >
                <div className={activeBtn[4] ? "pillowNone" : "pillow"}></div>
              </button>
              <button
                className={activeBtn[5] ? "deckBtnsActive" : "deckBtns"}
                onClick={() => {
                  seatsMngmt(5);
                }}
              >
                <div className={activeBtn[5] ? "pillowNone" : "pillow"}></div>
              </button> */}
            </div>
            <div className="deckBtnsLine">
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
            </div>
          </div>
          <div className="deckBtnsLine">
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
          </div>
        </div>
        Upper Deck
        <div className="LowerDeck">
          <div className="LowerDeckPart1">
            <div className="deckBtnsLine">
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
            </div>
            <div className="deckBtnsLine">
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
              <button className="deckBtns">
                <div className="pillow"></div>
              </button>
            </div>
          </div>
          <div className="deckBtnsLine">
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
            <button className="deckBtns">
              <div className="pillow"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SeatBooking;
