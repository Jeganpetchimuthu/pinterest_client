import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export default function AnimalArticle(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [lion, setLion] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/wild")
      .then((res) => setLion(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  useEffect(() => {
    axios

      .get("https://pinterest-serer.onrender.com/api/tiger")
      .then((res) => setData(res.data))
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
                <h1 className="hanging-h">Animals</h1>
                <br></br>
                <h3 className="hanging-h5">
                  Animals are the best. Boost your mood with funny cat memes,
                  scroll photos of adorable puppies, or learn everything you
                  need to know about caring for the new family pet.
                </h3>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h1 className="plant-subtitle">Explore Animals articles</h1>
      <br></br>
      <div>
        {lion.map((singleData) => {
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
                    <Link to="/animalImage">
                      <img
                        className="wildAnimal"
                        src={`data:image/png;base64,${base64String}`}
                        alt="img"
                      />
                    </Link>
                  </span>
                  <span className="img-ps1">
                    <h2>Wild Animals</h2>
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
