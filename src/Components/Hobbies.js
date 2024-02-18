import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

import axios from "axios";

function Hobbies(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [paperCraft, setPaperCraft] = useState([{ image: "" }]);
  const [roomDecor, setRoomDecor] = useState([{ image: "" }]);
  const [weddingGift, setWeddingGift] = useState([{ image: "" }]);
  const [styleFood, setStyleFood] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Hobbies")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/RoomDecor")
      .then((res) => setPaperCraft(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/StyleFood")
      .then((res) => setRoomDecor(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/wedding")
      .then((res) => setWeddingGift(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/paperCreaft")
      .then((res) => setStyleFood(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <div className="Houseship">
        <br></br>
        <h1>Best Hobbies For Men That Can Only Improve Your Life</h1>
        <h5 className="shipContent">
          Discover Pinterest's 10 best ideas and inspiration for hobbies.Be
          inspired and try out new thinks.
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
                <h1 className="jega">
                  50 Best Hobbies For Men That Can Only Improve Your Life
                </h1>
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
                  <p className="content">Hobbies</p>
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
        {paperCraft.map((singleData) => {
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
                <h1 className="jega">
                  Innspiring Quilling Designs Paper Crafts and Unique Ideas For
                  Valentines Day
                </h1>
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
                  <p className="content">Hobbies</p>
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
        {roomDecor.map((singleData) => {
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
                <h1 className="jega">
                  Creating a Mini Art of your Food Hobbies
                </h1>
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
                  <p className="content">Hobbies</p>
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
        {weddingGift.map((singleData) => {
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
                <h1 className="jega">Croissant photography Hobby</h1>
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
                    Arun <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">Hobbies</p>
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
        {styleFood.map((singleData) => {
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
                <h1 className="jega">
                  Best Marriage Gifts,First Night Gifts And Wedding Gift Ideas
                </h1>
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
                    Guna <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">Hobbies</p>
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

export default Hobbies;
