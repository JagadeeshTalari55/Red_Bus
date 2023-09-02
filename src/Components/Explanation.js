import React, { useState } from "react";
import "./Explanation.css";

function Explanation() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  return (
    <>
      <div className="boxsParent">
        <div
          className="box"
          onClick={() => {
            setActive(!active);
          }}
        >
          <label htmlFor="first">First Text</label>
          <input type="radio" id="first" name="x" />
        </div>
        <div
          className="box"
          onClick={() => {
            setActive2(!active2);
          }}
        >
          <label htmlFor="second">second Text</label>
          <input type="radio" id="second" name="x" />
        </div>
        <div
          className="box"
          onClick={() => {
            setActive3(!active3);
          }}
        >
          <label htmlFor="third">third Text</label>
          <input type="radio" id="third" name="x" />
        </div>
      </div>
      <div className={active ? "displayBlock" : "defaultNone"}>
        <h1>First Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          amet, suscipit maiores sint quas velit pariatur. Autem, nemo
          provident?
        </p>
      </div>
      <div className={active2 ? "displayBlock" : "defaultNone"}>
        <h1>Second Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          amet, suscipit maiores sint quas velit pariatur. Autem, nemo
          provident?
        </p>
      </div>
      <div className={active3 ? "displayBlock" : "defaultNone"}>
        <h1>Third Content</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          amet, suscipit maiores sint quas velit pariatur. Autem, nemo
          provident?
        </p>
      </div>
    </>
  );
}

export default Explanation;
