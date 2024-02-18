import React, { useState } from "react";
import axios from "axios";
import "./UploadImage.css";
function UploadImage() {
  const [file, setFile] = useState();

  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);

    axios
      .post("https://pintrest-server.onrender.com/api/createImage", formdata)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="file-containera">
      <br></br>
      <br></br>
      <div className="contenttexta"></div>
      <input
        className="files"
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <span className="imgSizea">only upload 110kb size of photos</span>
      <button className="img-submitsa" onClick={handleUpload}>
        Upload Image
      </button>
    </div>
  );
}

export default UploadImage;
