import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import axios from "axios";
function ChickenManias(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [gril, setGril] = useState([{ image: "" }]);
  const [thanthuri, setThanthuri] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/MasalaChicken")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/RoastChicken")
      .then((res) => setGril(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/ChicckenLolipop")
      .then((res) => setThanthuri(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <br></br>
      <div className="Houseship">
        <h1>Chicken Mania</h1>
        <h5 className="shipContent">
          Discover Pinterest's 10 best ideas and inspiration for Chicken
          Mania.Be inspired and try out new thinks.
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
                <h1 className="jega">Chicken briyani</h1>
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
                  <p className="content">chickenMania</p>
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
        {gril.map((singleData) => {
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
                <h1 className="jega">chicken Fry</h1>
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
                  <p className="content">chicken mania</p>
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
        {thanthuri.map((singleData) => {
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
                <h1 className="jega">Chicken curry</h1>
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
                  <p className="content">chicken curry</p>
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
export default ChickenManias;
