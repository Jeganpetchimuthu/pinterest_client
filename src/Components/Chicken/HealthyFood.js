import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HealthyFood.css";
import axios from "axios";

export default function HealthyFood(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [butter, setButter] = useState([{ image: "" }]);
  const [chicken, setChicken] = useState([{ image: "" }]);
  const [mania, setMania] = useState([{ image: "" }]);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Chicken")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/ButterChicken")
      .then((res) => setButter(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/ChickenMania")
      .then((res) => setChicken(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/noodle")
      .then((res) => setMania(res.data))
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
                <h1 className="hanging-h">Food and Drinks</h1>
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
      <h1 className="plant-subtitle">Explore Food and Drink articles</h1>
      <br></br>
      <div>
        {butter.map((singleData) => {
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
                    <Link to="/blackpeperChicken">
                      <img
                        className="plantImage12"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps">
                    <h2>BlackPepperChicken</h2>
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
        {chicken.map((singleData) => {
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
                    <Link to="/butterChicken">
                      <img
                        className="plantImage2"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps2">
                    <h2>ButterChicken</h2>
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
        {mania.map((singleData) => {
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
                    <Link to="/chickenManias">
                      <img
                        className="plantImage3"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps3">
                    <h2>ChickenMania</h2>
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
