import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Plant.css";
import axios from "axios";

export default function Plant(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [garden, setGarden] = useState([{ image: "" }]);
  const [plant, setPlant] = useState([{ image: "" }]);
  const [house, setHouse] = useState([{ image: "" }]);
  const [indoor, setIndoor] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/hangingPlant")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/hangingGarden")
      .then((res) => setGarden(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/housePlant")
      .then((res) => setPlant(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/indoor")
      .then((res) => setHouse(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios
      .get("https://pinterest-serer.onrender.com/api/plant1")
      .then((res) => setIndoor(res.data))
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
                <h1 className="hanging-h">Hanging plants</h1>
                <br></br>
                <h3 className="hanging-h5">
                  Discover how best to leverage hanging plants to enhance any
                  space within your home.
                </h3>

                <h3 className="hanging-h1">
                  These unique plants are crowd pleaser that will be sure to
                  inspire any plant-lover or guest...More
                </h3>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="plant-subtitle">Related interests</h1>
      <br></br>
      <div>
        {garden.map((singleData) => {
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
                    <Link to="/plant1">
                      <img
                        className="plantImage12"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps">
                    <h2>HangingGarden</h2>
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
        {plant.map((singleData) => {
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
                    <Link to="/plant2">
                      <img
                        className="plantImage2"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps2">
                    <h2>Hanging Plants</h2>
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
        {house.map((singleData) => {
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
                    <Link to="/plant3">
                      <img
                        className="plantImage3"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps3">
                    <h2>House Plant</h2>
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
        {indoor.map((singleData) => {
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
                    <Link to="/plant4">
                      <img
                        className="plantImage4"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps4">
                    <h2>Indoor</h2>
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
