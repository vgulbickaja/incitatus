import React from "react";
import big from "../Assets/big.jpg";
import "../Styles/About.scss";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${big})` }}
      ></div>
      <div className="aboutBottom">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          perspiciatis doloribus. Quos, excepturi at! Voluptatibus veritatis
          magni ducimus quam molestiae iste itaque dolorem saepe. Pariatur cum
          sit sint mollitia quas?
        </p>
      </div>
    </div>
  );
}

export default About;
