import React, { useEffect, useState } from "react";

import { Avatar } from "@mui/material";
import "../HouseComponent.css";
import axios from "axios";

export default function HangingGarden(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [hangingGarden, setHangingGarden] = useState([{ image: "" }]);
  const [gardens, setGardens] = useState([{ image: "" }]);
  const [hangingWindow, setHangingWindow] = useState([{ image: "" }]);
  const [hangingDoor, setHangingDoor] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant2")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant3")
      .then((res) => setHangingGarden(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant4")
      .then((res) => setGardens(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant5")
      .then((res) => setHangingWindow(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant6")
      .then((res) => setHangingDoor(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <br></br>
      <div className="Houseship">
        <h1>HangingGarden</h1>
        <h5 className="shipContent">
          Discover Pinterest's 10 best ideas and inspiration for Plant.Be
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
                <h1 className="jega">Hanging Garden</h1>
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
                  <p className="content">HangingGarden</p>
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
        {hangingGarden.map((singleData) => {
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
                  HeadPlanters Are An Unexpected And Fun Wall Planter
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
                  <p className="content">HangingGarden</p>
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
        {gardens.map((singleData) => {
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
                <h1 className="jega">Vertical Garden Ideas For Small Spaces</h1>
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
                  <p className="content">HangingGarden</p>
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
        {hangingWindow.map((singleData) => {
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
                  DIY Picture Frame Vertical Garden/Green Wall
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
                    Arun <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">HangingGarden</p>
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
        {hangingDoor.map((singleData) => {
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
                  Home makeover:Stone is the hero of this renovated houses
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
                  <p className="content">HangingGarden</p>
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

export function HangingPlant(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [plant, setPlant] = useState([{ image: "" }]);
  const [housePlant, setHousePlant] = useState([{ image: "" }]);
  const [homeDecor, setHomeDecor] = useState([{ image: "" }]);
  const [plantHanging, setPlantHanging] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant7")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant8")
      .then((res) => setPlant(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant9")
      .then((res) => setHousePlant(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant5")
      .then((res) => setHomeDecor(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant11")
      .then((res) => setPlantHanging(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <br></br>
      <div className="Houseship">
        <h1>HangingPlant</h1>
        <h5 className="shipContent">
          Discover Pinterest's 10 best ideas and inspiration for HangingPlant.Be
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
                <h1 className="jega">Low-Maintenance Hanging Plants </h1>
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
                  <p className="content">HangingPlant</p>
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
        {plant.map((singleData) => {
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
                <h1 className="jega">Common House Plants</h1>
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
                  <p className="content">HangingPlant</p>
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
        {housePlant.map((singleData) => {
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
                <h1 className="jega">Home decor idea</h1>
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
                  <p className="content">HangingPlant</p>
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
        {homeDecor.map((singleData) => {
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
                  How to Make Mini Inch Plant Hanging Balls|Hanging Plants Ideas
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
                    Arun <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">HangingPlant</p>
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
        {plantHanging.map((singleData) => {
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
                  Plant hanging With Lights Indoor Hanging Plants
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
                  <p className="content">HangingPlant</p>
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

export function Houseplant(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [PaperOmia, setPaperOmia] = useState([{ image: "" }]);
  const [brownHouse, setBrownHouse] = useState([{ image: "" }]);
  const [indoorHanging, setIndoorHanging] = useState([{ image: "" }]);
  const [junglHouse, setJungleHouse] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant12")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plants")
      .then((res) => setPaperOmia(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant2")
      .then((res) => setBrownHouse(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant11")
      .then((res) => setIndoorHanging(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant5")
      .then((res) => setJungleHouse(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  return (
    <div>
      <br></br>
      <div className="Houseship">
        <h1>House plants</h1>
        <h5 className="shipContent">
          Discover Pinterest's 10 best ideas and inspiration for House Plants.Be
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
                  House Plants Centerpiece Ideas Every Plants Grower Should See
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
                  <p className="content">Houseplant</p>
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
        {PaperOmia.map((singleData) => {
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
                  PaperOmia Hoffmannii Care- Our Best Tips
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
                  <p className="content">Houseplant</p>
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
        {brownHouse.map((singleData) => {
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
                  Brown Tips HousePlants Leaves - A Reason Why!
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
                  <p className="content">Houseplant</p>
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
        {indoorHanging.map((singleData) => {
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
                  Macrame plant Hanging With Lights Indoor Hanging Plants Basket
                  with
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
                    Arun <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">Houseplant</p>
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
        {junglHouse.map((singleData) => {
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
                  Creating a Jungle record Corner - Blank & Blooms
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
                  <p className="content">Houseplant</p>
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
export function Indoor(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [stunning, setStunning] = useState([{ image: "" }]);
  const [tallHouse, setTallHouse] = useState([{ image: "" }]);
  const [indoorGrowing, setIndoorGrowing] = useState([{ image: "" }]);
  const [smallIndoor, setSmallIndoor] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant3")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant6")
      .then((res) => setStunning(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant9")
      .then((res) => setTallHouse(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant7")
      .then((res) => setIndoorGrowing(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plant11")
      .then((res) => setSmallIndoor(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  return (
    <div>
      <br></br>
      <div className="Houseship">
        <h1>Indoor</h1>
        <h5 className="shipContent">
          Discover Pinterest's 10 best ideas and inspiration for Indoor.Be
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
                  Beautiful indoor House Plants for the Home in 2024
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
                  <p className="content">Indoor</p>
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
        {stunning.map((singleData) => {
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
                <h1 className="jega">Stunnig Indoor Plant Corner Ideas</h1>
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
                  <p className="content">Indoor</p>
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
        {tallHouse.map((singleData) => {
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
                  The Best Tall HousePlants:Tree-Like Plants to Grow Indoors
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
                  <p className="content">Indoor</p>
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
        {indoorGrowing.map((singleData) => {
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
                  Indoor Growing Under Lights,with leslie Halleck
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
                    Arun <span>saved to</span>
                  </p>
                  <br></br>
                  <p className="content">Indoor</p>
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
        {smallIndoor.map((singleData) => {
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
                  Creative Small Indoor Gardens For Home Decor
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
                  <p className="content">Indoor</p>
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
