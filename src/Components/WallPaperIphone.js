import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WallPaperIphone.css";
import axios from "axios";

export default function WallPaperIphone(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [apple, setApple] = useState([{ image: "" }]);
  const [autums, setAutumn] = useState([{ image: "" }]);
  const [iphone, setIphone] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Autumn")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/tropoicalWallpaper")
      .then((res) => setApple(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/SeaWallpaper")
      .then((res) => setAutumn(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/AppleWallpaper")
      .then((res) => setIphone(res.data))
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
                <h1 className="hanging-h">WallPaper</h1>
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
      <h1 className="plant-subtitle">Explore More like this</h1>
      <br></br>
      <div>
        {apple.map((singleData) => {
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
                    <Link to="/autums">
                      <img
                        className="plantImage12"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps">
                    <h2>AppleWallpaper</h2>
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
        {autums.map((singleData) => {
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
                    <Link to="/appleWallpaper">
                      <img
                        className="plantImage2"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps2">
                    <h2>Autumn Wallpaper</h2>
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
        {iphone.map((singleData) => {
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
                    <Link to="/iphoneWallpaper">
                      <img
                        className="plantImage3"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps3">
                    <h2>Ipad WallPaper</h2>
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
