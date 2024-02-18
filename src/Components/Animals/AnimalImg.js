import React, { useEffect, useState } from "react";

import { Avatar } from "@mui/material";
import "../HouseComponent.css";
import axios from "axios";

export default function AnimalImg(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [deer, setDeer] = useState([{ image: "" }]);
  const [zebra, setZebra] = useState([{ image: "" }]);
  const [cat, setCat] = useState([{ image: "" }]);
  const [ox, setOx] = useState([{ image: "" }]);
  const [monky, setmonky] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/deer")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/cat")
      .then((res) => setDeer(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/dog")
      .then((res) => setZebra(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/ox")
      .then((res) => setCat(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/monkey")
      .then((res) => setOx(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/horse")
      .then((res) => setmonky(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <br></br>
      <div className="Houseship">
        <h1>Fascinating Mammal Species and Their Unique Characteristics</h1>
        <h5 className="shipContent">
          Explore the incredible world of mammals and discover their diverse
          range of species. From mammals that fly to those that live underwater,
          learn about their fascinating characteristics and behaviors.
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
                <h1 className="jega">About Wild Animals: Picture of a Lion</h1>
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
                  <p className="content">animal photography</p>
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
        {deer.map((singleData) => {
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
                  About Wild Animals: Picture of a zebra stallion
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
                  <p className="content">animal photography</p>
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
        {zebra.map((singleData) => {
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
                <h1 className="jega"> About Wild Animals: Picture of a dog</h1>
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
                  <p className="content">animal photography</p>
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
        {cat.map((singleData) => {
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
                <h1 className="jega"> About Wild Animals: Picture of a ox</h1>
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
                  <p className="content">animal photography</p>
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
        {ox.map((singleData) => {
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
                  {" "}
                  About Wild Animals: Picture of a Monkey
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
                  <p className="content">animal photography</p>
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
        {monky.map((singleData) => {
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
                  {" "}
                  About Wild Animals: Picture of a horse stallion
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
                    lowrance <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">animal photography</p>
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
