import React from "react";
import { Link } from "react-router-dom";
import banner from "../Assets/banner.jpg";
import "../Styles/Home.scss";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Incitatus</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit fugiat
          est, a aliquid labore mollitia at ex tempora rem. Exercitationem
          blanditiis ea eius, modi minus deserunt delectus asperiores facere
          illo.
        </p>
        <Link to="/shop">
          <button>Purchase</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
