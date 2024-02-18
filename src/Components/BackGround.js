import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ChickenKaima.css";
import axios from "axios";

export default function BackGround(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [wall, setWall] = useState([{ image: "" }]);
  const [red, setRed] = useState([{ image: "" }]);
  const [rose, setRose] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Premium")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Wall")
      .then((res) => setRed(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Red")
      .then((res) => setWall(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Rose")
      .then((res) => setRose(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div className="plantContainer">
      <div>
        {data.map((singleData) => {
          if (singleData.image) {
            const base64String = btoa(
              String.fromCharCode(
                ...new Uint32Array(singleData.image.data.data)
              )
            );
            return (
              <div className="houses">
                <span key={item._id}>
                  <img
                    className="plantImage1"
                    src={`data:image/png;base64,${base64String}`}
                    alt="img"
                  />
                </span>
                <h1 className="hanging-h">Background</h1>
                <br></br>
                <h3 className="hanging-h5">
                  Meal prep doesn’t have to be boring. From seasonal recipes to
                  stunning food photos, Pinterest has all the food and drink
                  inspiration you need.
                </h3>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="plant-subtitle">Explore Background Decorations</h1>
      <br></br>
      <div>
        {wall.map((singleData) => {
          if (singleData.image) {
            const base64String = btoa(
              String.fromCharCode(
                ...new Uint32Array(singleData.image.data.data)
              )
            );
            return (
              <div className="plant-f1">
                <span key={item._id}>
                  <span>
                    <Link to="/red">
                      <img
                        className="plantImage12"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps">
                    <h2>Red Background</h2>
                  </span>
                </span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      <div>
        {rose.map((singleData) => {
          if (singleData.image) {
            const base64String = btoa(
              String.fromCharCode(
                ...new Uint32Array(singleData.image.data.data)
              )
            );
            return (
              <div>
                <span key={item._id}>
                  <span>
                    <Link to="/rose">
                      <img
                        className="plantImage2"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps2">
                    <h2>Rose Background</h2>
                  </span>
                </span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <br></br>
      <div>
        {red.map((singleData) => {
          if (singleData.image) {
            const base64String = btoa(
              String.fromCharCode(
                ...new Uint32Array(singleData.image.data.data)
              )
            );
            return (
              <div>
                <span key={item._id}>
                  <span>
                    <Link to="/wall">
                      <img
                        className="plantImage3"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps3">
                    <h2> Wall Background</h2>
                  </span>
                </span>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
