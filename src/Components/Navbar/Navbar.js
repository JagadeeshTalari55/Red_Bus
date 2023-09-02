import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar_wrapper" style={{ display: "flex" }}>
        <div style={{ display: "flex", gap: "50px", width: "60%" }}>
          {/* logo */}
          <div>
            <img
              src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
              alt=""
            />
          </div>
          {/* ----- */}
          {/* <div className="nav_middle_sec" style={{ display: "flex" }}> */}
          {/* Home Bus Tickets */}
          <div>|</div>
          <Link to="/">
            <div>
              <img
                src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
                alt=""
              />
              <p>Bus Tickets</p>
            </div>
          </Link>
          {/* ---- */}
          {/* Ryde Page */}
          <Link to="/ryde">
            <div>
              <img
                src="https://st.redbus.in/web/images/layout/ryde_vertical.svg"
                alt=""
              />
              <p>Cab Rental</p>
            </div>
          </Link>
          {/* ----- */}
          {/* RydeRail */}
          <Link to="/ryderail">
            <div>
              <img
                src="https://st.redbus.in/web/images/layout/rail_vertical.svg"
                alt=""
              />
              <p>Train Tickets</p>
            </div>
          </Link>
          {/* ------ */}
          {/* </div> */}
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <img
              src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
              alt=""
            />
            Help
          </div>
          <div>
            <img
              src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
              alt=""
            />
            Account
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
