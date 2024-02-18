import React, { useState, useEffect } from "react";
import "./PinterestProfile.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
//import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
//import { Avatar } from "@mui/material";
//import Image from "./Image/baby.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
//import ProfilePic from "../HeaderComponents/ProfilePic";

function PinterestProfile(item) {
  const [data, setData] = useState([{ image: "" }]);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [users, setUsers] = useState([
    {
      FirstName: "",
      SureName: "",
      UserName: "",
    },
  ]);

  useEffect(() => {
    axios

      .get("https://pintrest-server.onrender.com/api/img")

      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has on error"));
  }, []);
  useEffect(
    (e) => {
      axios
        .get("https://pintrest-server.onrender.com/api/profile")
        .then((users) => setUsers(users.data))
        .catch((error) => console.log(error));
    },
    [users]
  );

  return (
    <div className="Profile">
      <br></br>
      <br></br>
      <br></br>
      <Link to="/img">
        <button type="button" className="edit-btn">
          Edit
        </button>
      </Link>
      <div className="profile-info">
        {data.map((singleData) => {
          if (singleData.image) {
            const base64String = btoa(
              String.fromCharCode(
                ...new Uint32Array(singleData.image.data.data)
              )
            );
            return (
              <div key={item._id}>
                <img
                  className="profile-imgs"
                  src={`data:image/png;base64,${base64String}`}
                  alt="img"
                />
              </div>
            );
          } else {
            return null;
          }
        })}
        <br></br>
        <form>
          <span className="name"></span>
          <span className="name"></span>
          <span className="name"></span>
        </form>
        {users.map((user) => {
          return (
            <div>
              <form key={user.id}>
                <span className="user">{user.FirstName}</span>
                <span className="users">{user.SureName}</span>
                <br></br>
                <br></br>
                <span className="user1">{user.UserName}</span>
              </form>
            </div>
          );
        })}
        <br></br>
        <span className="profile_follower">
          <span className="pf_1" onClick={() => setFollowers(followers + 1)}>
            {followers}.followers
          </span>
          <span className="pf_2" onClick={() => setFollowing(following + 1)}>
            {following}.following
          </span>
        </span>
        <br></br>
        <input
          className="input_box"
          type="searchbox"
          placeholder="Search Your Pin"
        />
        <SearchOutlinedIcon className="ser-icon" />
      </div>
    </div>
  );
}

export default PinterestProfile;
