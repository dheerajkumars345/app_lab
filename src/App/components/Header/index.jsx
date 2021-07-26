import React from "react";

import "./header.style.css";

export default function Header() {
  return (
    <div className="container">
      {/* <div className="title"> */}
      <h3>App Lab</h3>
      {/* </div> */}
      <nav>
        <div className="home">Home</div>
        <div>Key Features</div>
        <div>Pricing</div>
        <div>Testiminial</div>
        <div>FAQ</div>
        <button>Try for free</button>
      </nav>
    </div>
  );
}
