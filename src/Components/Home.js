import React, { useEffect, useState } from "react";
import DateTime from "../Date";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
function Home(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [nail, setNail] = useState([[{ image: "" }]]);
  const [plant, setPlant] = useState([[{ image: "" }]]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/life")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Anime")
      .then((res) => setNail(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/food")
      .then((res) => setPlant(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <DateTime className="date" />
      <h1>Stay Inspired</h1>
      <div>
        <span>
          {data.map((singleData) => {
            if (singleData.image) {
              const base64String = btoa(
                String.fromCharCode(
                  ...new Uint32Array(singleData.image.data.data)
                )
              );
              return (
                <span key={item._id}>
                  <Link className="houseview" to="/life">
                    <img
                      className="homeImage"
                      src={`data:image/png;base64,${base64String}`}
                      alt="img"
                    />
                    <h2 className="house-name">Life</h2>
                  </Link>
                </span>
              );
            } else {
              return null;
            }
          })}
        </span>
        <span>
          {nail.map((singleData) => {
            if (singleData.image) {
              const base64String = btoa(
                String.fromCharCode(
                  ...new Uint32Array(singleData.image.data.data)
                )
              );
              return (
                <span key={item._id}>
                  <Link className="houseview" to="/anime">
                    <img
                      className="nail"
                      src={`data:image/png;base64,${base64String}`}
                      alt="img"
                    />
                    <h2 className="house-name1">Anime</h2>
                  </Link>
                </span>
              );
            } else {
              return null;
            }
          })}
        </span>

        <span>
          {plant.map((singleData) => {
            if (singleData.image) {
              const base64String = btoa(
                String.fromCharCode(
                  ...new Uint32Array(singleData.image.data.data)
                )
              );
              return (
                <span key={item._id}>
                  <Link className="houseview" to="/food">
                    <img
                      className="plant"
                      src={`data:image/png;base64,${base64String}`}
                      alt="img"
                    />
                    <h2 className="house-name2">Food</h2>
                  </Link>
                </span>
              );
            } else {
              return null;
            }
          })}
        </span>
      </div>
      <div className="homecontent">
        <h4>That's it for today</h4>
        <h4>Come back tomorrow for more inspiration </h4>
      </div>
    </div>
  );
}

export default Home;
