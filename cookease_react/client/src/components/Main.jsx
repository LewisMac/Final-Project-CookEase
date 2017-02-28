import React from "react";

const Main = (props) => (
  <div className="container">
  <div className="Header">
  <button className="header-button">login</button>
  <h1>CookEase</h1>
  <button className="header-button">Shopping List</button>
  </div>
  <div className="input-box-div">
  <input type="text" className="input-box" placeholder="Search">
  </input>
  </div>
    {props.children}
  </div>
)

export default Main