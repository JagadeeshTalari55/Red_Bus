import "./RydeNavbar.css";

function RydeNavbar() {
  return (
    <div>
      <nav>
        <div id="head">
          <img
            id="bus"
            src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
            alt=""
          ></img>
          <div id="busticket">
            <img
              id="bluebus"
              src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
              alt=""
            ></img>
            <div id="ticket">Bus ticket</div>
          </div>
          <div id="bikeride">
            <img
              id="bluebike"
              src="https://st.redbus.in/web/images/layout/ryde_vertical.svg"
              alt=""
            ></img>
            <div id="cabrental">cab rental</div>
          </div>
          <div id="trainride">
            <img
              id="bluetrain"
              src="https://st.redbus.in/web/images/layout/rail_vertical.svg"
              alt=""
            ></img>
            <div id="trainticket">Train ticket</div>
          </div>
          <div id="help">
            {" "}
            <span>help</span>
          </div>
          <div id="account">
            <svg
              id="person"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />{" "}
            </svg>
            <span>account</span>
            <svg
              id="doen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <i class="icon icon-help_new icon_rb_secondary_item"></i>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </nav>

      {/* {<TrendingOffers></TrendingOffers>} */}
    </div>
  );
}

export default RydeNavbar;
