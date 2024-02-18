import React from "react";
import "./Pinterest.css";
import pinterest from "../Components/Img/img.png";
import { Link } from "react-router-dom";
import Chicken, { ChickenMania, WallPaper } from "./Chicken";

function Pinterest() {
  return (
    <div className="pinterestcontainers">
      <h1 className="container-lg">Get your next</h1>
      <h2 className="container-lgs">Here’s how it works</h2>
      <div className="pinterestFoods">
        <span>
          <Chicken />
        </span>
        <span className="titleexplores">
          <h1 className="titleexplore">Search for an idea</h1>
          <h3 className="titleExplore">
            What do you want to try next? Think <br />
            of something you’re into – such as <br /> 'easy chicken dinner' –
            and see what <br /> you find.
          </h3>
          <Link to="/Healthyfood">
            <button type="submit" className="explore-btn">
              Explore
            </button>
          </Link>
        </span>
      </div>
      <div className="pinterest">
        <span>
          <ChickenMania />
        </span>
        <span className="contentPinterest">
          <h1 className="headPinterest">Save Ideas you like</h1>
          <h2>Collect yours Favourites so you can get back to them latter</h2>
          <br></br>
          <Link to="/chikenkaima">
            <button type="submit" className="explore-btn">
              Explore
            </button>
          </Link>
        </span>
      </div>
      <div className="pinterest-lg">
        <span>
          <WallPaper />
        </span>
        <span className="contentPinterest-lg">
          <h1 className="headPinterest-lg">
            See it, make it,
            <br /> try it, do it
          </h1>
          <h2>
            The best part of Pinterest is discovering <br /> new things and
            ideas from people <br />
            around the world.
          </h2>
          <br></br>
          <Link to="/iphone">
            <button type="submit" className="explore-btn-lg">
              Explore
            </button>
          </Link>
        </span>
      </div>
      <div>
        <img src={pinterest} alt="img" className="imgpin"></img>
        <span className="signupPinterest">
          Sign-up <br />
          to get your <br />
          ideas
        </span>
      </div>
    </div>
  );
}

export default Pinterest;
