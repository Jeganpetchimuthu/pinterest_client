import React, { useEffect, useState } from "react";
import "./ImageCreate.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import axios from "axios";
function ImageCreate(item) {
  const [data, setData] = useState([{ image: "" }]);

  useEffect(() => {
    axios

      .get("https://pintrest-server.onrender.com/api/createImage")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);

  const deleteImage = async (id) => {
    try {
      await axios.delete(
        `https://pinterest-project-88ux.onrender.com/api/deleteImage/${id}`
      );

      setData(data.filter((singleData) => singleData._id !== id));
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="createImage-container">
      {data.map((singleData) => {
        if (singleData.image) {
          const base64String = btoa(
            String.fromCharCode(...new Uint32Array(singleData.image.data.data))
          );
          return (
            <span key={item._id}>
              <img
                className="creatImage"
                src={`data:image/png;base64,${base64String}`}
                alt="img"
              />
              <button
                className="deleteImageIcons"
                value={singleData.delete}
                onClick={() => deleteImage(singleData._id)}
              >
                <DeleteOutlineIcon />
              </button>
            </span>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ImageCreate;
