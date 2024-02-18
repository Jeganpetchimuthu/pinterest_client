import React, { useState } from "react";
import axios from "axios";
import "./ProfileImg.css";
function ProfileImg() {
  const [file, setFile] = useState();

  const handleUpdate = (e) => {
    const formdata = new FormData();
    formdata.append("file", file);

    axios
      .put(
        "https://pinterest-project-88ux.onrender.com/api/profileImage/657b12af79a5c4e6fa978ccc",
        formdata
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className="updateProfileImages">
      <input
        className="file "
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="updateImg-submit" onClick={handleUpdate}>
        updated profile photo
      </button>
    </div>
  );
}

export default ProfileImg;
