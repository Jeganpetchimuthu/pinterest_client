import React, { useState } from "react";
import "./AddProfile.css";

import axios from "axios";
import ProfileImg from "./ProfileImg";

function AddProfile() {
  const [Profile, setProfile] = useState([
    {
      FirstName: "",
      SureName: "",
      UserName: "",
    },
  ]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...Profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `https://pintrest-server.onrender.com/api/profile/6541e094709e599f9035606c`,
        Profile
      );
      console.log("User information updated:", response.data);
    } catch (error) {
      console.error("Error updating user information:", error.message);
    }
  };

  return (
    <div className="public_profile">
      <br></br>
      <ProfileImg />
      <form className="form_containeri" onSubmit={handleSubmit}>
        <label className="lable-content" htmlFor="FirstName">
          FirstName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="FirstName"
            placeholder="FirstName"
            value={Profile.FirstName}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label className="lable-content" htmlFor="SureName">
          SurName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="SureName"
            placeholder="SureName"
            value={Profile.SureName}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <br></br>
        <label className="lable-content" htmlFor="UserName">
          UserName:
          <br></br>
          <br></br>
          <input
            className="public_profile-user"
            type="text"
            name="UserName"
            placeholder="UserName"
            value={Profile.UserName}
            onChange={handleChange}
          ></input>
        </label>
        <br></br>
        <br></br>
        <button className="done-btn" type="submit">
          Done
        </button>
      </form>
    </div>
  );
}

export default AddProfile;
