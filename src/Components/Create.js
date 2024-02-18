import { NavLink } from "react-router-dom";
import "./Create.css";
import ImageCreate from "./ImageCreate";
function Create() {
  return (
    <div className="craeteimages">
      <br></br>
      <NavLink to="/upload">
        <button className="btn-upload">Upload</button>
      </NavLink>
      <br></br>
      <ImageCreate />
    </div>
  );
}

export default Create;
