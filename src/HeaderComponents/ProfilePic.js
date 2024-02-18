import React, { useEffect, useState } from "react";
import "./ProfilePic.css";
import axios from "axios";

function ProfilePic(item) {
  const [data, setData] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pintrest-server.onrender.com/api/img")

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
            <div key={item._id}>
              <img
                className="profile-img"
                src={`data:image/png;base64,${base64String}`}
                alt="img"
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ProfilePic;
