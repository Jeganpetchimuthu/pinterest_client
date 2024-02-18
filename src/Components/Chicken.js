import React, { useEffect, useState } from "react";
import "./Chicken.css";
import axios from "axios";

function Chicken(item) {
  const [data, setData] = useState([{ image: "" }]);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/ChickenTikka")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <div>
              <span key={item._id}>
                <img
                  className="chickenImg"
                  src={`data:image/png;base64,${base64String}`}
                  alt="img"
                />
              </span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Chicken;

export function ChickenMania(item) {
  const [data, setData] = useState([{ image: "" }]);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Black")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <div className="chickenMania">
              <span key={item._id}>
                <img
                  className="chickenManiaImage1"
                  src={`data:image/png;base64,${base64String}`}
                  alt="img"
                />
              </span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export function WallPaper(item) {
  const [data, setData] = useState([{ image: "" }]);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Autumn")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <div className="chickenMania">
              <span key={item._id}>
                <img
                  className="wallpaperImage1"
                  src={`data:image/png;base64,${base64String}`}
                  alt="img"
                />
              </span>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
