import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import axios from "axios";
function AutumnWallpaper(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [autum, setAutum] = useState([{ image: "" }]);
  const [snow, setSnow] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/uniqueWallpaper")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/CarWallpaper")
      .then((res) => setAutum(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/FallWallpaper")
      .then((res) => setSnow(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <br></br>
      <div className="Houseship">
        <h1>Flowers Wallpaper</h1>
        <h5 className="shipContent">
          Discover Pinterest's 10 best ideas and inspiration for autum
          wallpaper.Be inspired and try out new thinks.
        </h5>
      </div>
      <br></br>
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
                    className="homeImage1"
                    src={`data:image/png;base64,${base64String}`}
                    alt="img"
                  />
                </span>
                <h1 className="jega">Sun Flowers WallPaper</h1>
                <span>
                  <Avatar className="Ava">
                    <img
                      className="img"
                      src={
                        "https://th.bing.com/th/id/OIP.odSm-Lqc9Au-acbkdUboowHaE-?rs=1&pid=ImgDetMain"
                      }
                      alt="avathar"
                    />
                  </Avatar>
                </span>
                <span>
                  <p className="content">
                    Lori campbell <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">Mountains</p>
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
        {autum.map((singleData) => {
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
                    className="homeImage1"
                    src={`data:image/png;base64,${base64String}`}
                    alt="img"
                  />
                </span>
                <h1 className="jega">Sun Flowers wallpaper</h1>
                <span>
                  <Avatar className="Ava">
                    <img
                      className="img"
                      src={
                        "https://th.bing.com/th/id/OIP.odSm-Lqc9Au-acbkdUboowHaE-?rs=1&pid=ImgDetMain"
                      }
                      alt="avathar"
                    />
                  </Avatar>
                </span>
                <span>
                  <p className="content">
                    Jhon <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">tropical wallpaper</p>
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
        {snow.map((singleData) => {
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
                    className="homeImage1"
                    src={`data:image/png;base64,${base64String}`}
                    alt="img"
                  />
                </span>
                <h1 className="jega">Nature WallPaper</h1>
                <span>
                  <Avatar className="Ava">
                    <img
                      className="img"
                      src={
                        "https://th.bing.com/th/id/OIP.odSm-Lqc9Au-acbkdUboowHaE-?rs=1&pid=ImgDetMain"
                      }
                      alt="avathar"
                    />
                  </Avatar>
                </span>
                <span>
                  <p className="content">
                    Jegan <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">nature</p>
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

export default AutumnWallpaper;
