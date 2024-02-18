import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Explore.css";
import axios from "axios";

function Explore(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [nail, setNail] = useState([[{ image: "" }]]);
  const [plant, setPlant] = useState([[{ image: "" }]]);
  const [animal, setAnimal] = useState([[{ image: "" }]]);
  const [hobby, setHobby] = useState([[{ image: "" }]]);
  const [art, setArt] = useState([[{ image: "" }]]);
  const [travels, setTravels] = useState([[{ image: "" }]]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/HomeDesign")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/summerNail")
      .then((res) => setNail(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/plants")
      .then((res) => setPlant(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/animal")
      .then((res) => setAnimal(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Christmas")
      .then((res) => setHobby(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Art")
      .then((res) => setArt(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/Travels")
      .then((res) => setTravels(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  return (
    <div className="exploreIcon">
      <br></br>

      <h1 className="explore-head ">Explore the best of Pinterest</h1>
      <div className="exploreDeadline">
        <span>
          {data.map((singleData) => {
            if (singleData.image) {
              const base64String = btoa(
                String.fromCharCode(
                  ...new Uint32Array(singleData.image.data.data)
                )
              );
              return (
                <span key={item._id}>
                  <Link className="houseview" to="/house">
                    <img
                      className="homeImage"
                      src={`data:image/png;base64,${base64String}`}
                      alt="img"
                    />
                    <h2 className="house-name">Shipping Container House</h2>
                  </Link>
                </span>
              );
            } else {
              return null;
            }
          })}
        </span>
        <span>
          {nail.map((singleData) => {
            if (singleData.image) {
              const base64String = btoa(
                String.fromCharCode(
                  ...new Uint32Array(singleData.image.data.data)
                )
              );
              return (
                <span key={item._id}>
                  <Link className="houseview" to="/nail">
                    <img
                      className="nail"
                      src={`data:image/png;base64,${base64String}`}
                      alt="img"
                    />
                    <h2 className="house-name1">Nail Stamping</h2>
                  </Link>
                </span>
              );
            } else {
              return null;
            }
          })}
        </span>

        <span>
          {plant.map((singleData) => {
            if (singleData.image) {
              const base64String = btoa(
                String.fromCharCode(
                  ...new Uint32Array(singleData.image.data.data)
                )
              );
              return (
                <span key={item._id}>
                  <Link className="houseview" to="/plant">
                    <img
                      className="plant"
                      src={`data:image/png;base64,${base64String}`}
                      alt="img"
                    />
                    <h2 className="house-name2">Hanging Plants</h2>
                  </Link>
                </span>
              );
            } else {
              return null;
            }
          })}
        </span>
      </div>
      <div>
        <h4 className="explore-subtitle">Discover interests</h4>
      </div>
      <div className="exploredeadlines2">
        <div>
          {animal.map((singleData) => {
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
                      <Link to="/animal">
                        <img
                          className="plantImage12"
                          src={`data:image/png;base64,${base64String}`}
                          alt="img"
                        />
                      </Link>
                    </span>
                    <span className="img-ps">
                      <h2>Animal</h2>
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
          {hobby.map((singleData) => {
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
                      <Link to="/hobbies">
                        <img
                          className="plantImage2"
                          src={`data:image/png;base64,${base64String}`}
                          alt="img"
                        />
                      </Link>
                    </span>
                    <span className="img-ps2">
                      <h2>Hobbies</h2>
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
          {art.map((singleData) => {
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
                      <Link to="/Art">
                        <img
                          className="plantImage3"
                          src={`data:image/png;base64,${base64String}`}
                          alt="img"
                        />
                      </Link>
                    </span>
                    <span className="img-ps3">
                      <h2>Art</h2>
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
          {travels.map((singleData) => {
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
                      <Link to="/travels">
                        <img
                          className="plantImage4"
                          src={`data:image/png;base64,${base64String}`}
                          alt="img"
                        />
                      </Link>
                    </span>
                    <span className="img-ps4">
                      <h2>Travels</h2>
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
    </div>
  );
}

export default Explore;
