import React from "react";
import "./Header.css";
//import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
//import TextsmsTwoToneIcon from "@mui/icons-material/TextsmsTwoTone";
//import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProfilePic from "./ProfilePic";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerComponents">
      <span className="headerNavication">
        <span>
          <Link to="/pinterest">
            <img
              className="pinterestImg"
              src="data:image/png;base64,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"
              alt="pinterestImage"
            ></img>
          </Link>
        </span>
        <Link className="homenav" to="/">
          <span className="home">Today</span>
        </Link>
        <Link className="homenav" to="/explore">
          <span className="explore">Explore</span>
        </Link>
        <Link className="homenav" to="/create">
          <span className="create">Create</span>
        </Link>

        <span>
          <SearchOutlinedIcon className="searchIcon" />
          <input
            className="input"
            placeholder="               Search for easy hut food etc..."
          />
        </span>

        <Link className="homenav" to="/login">
          <span className="login">Log in</span>
        </Link>
        <Link className="homenav" to="/signup">
          <span className="signup">Sign up</span>
        </Link>

        <Link to="/profileImage">
          <span>
            <ProfilePic />
          </span>
        </Link>
      </span>
    </div>
  );
}

export default Header;
