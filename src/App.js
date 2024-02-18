import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Create from "./Components/Create";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Message from "./Components/Message";
import Header from "./HeaderComponents/Header";
import UploadImage from "./Components/UploadImage";
import HouseComponent from "./Components/HouseComponent";
import NailComponents from "./Components/NailComponents";
import Plant from "./Components/Plant/Plant";
import HangingGarden, {
  HangingPlant,
  Houseplant,
  Indoor,
} from "./Components/Plant/HangingGarden";
import Pinterest from "./Components/Pinterest";

import Profile from "./Components/Profile";
import PinterestProfile from "./Components/PinterestProfile";

import WallPaperIphone from "./Components/WallPaperIphone";
import HealthyFood from "./Components/Chicken/HealthyFood";
import BackGround from "./Components/BackGround";
import AnimalImg from "./Components/Animals/AnimalImg";
import AnimalArticle from "./Components/Animals/AnimalArticle";
import Hobbies from "./Components/Hobbies";
import Art from "./Components/Art";
import Travels from "./Components/Travels";
import Life from "./Components/Life";
import Anime from "./Components/Anime";
import Food from "./Components/Food";
import RedBackGround from "./Components/BackGrounds/RedBackGround";
import RoseBackGrount from "./Components/BackGrounds/RoseBackGrount";
import WallBackgrount from "./Components/BackGrounds/WallBackgrount";
import BlackPeperChicken from "./Components/Chicken/BlackPeperChicken";
import ButterChicken from "./Components/Chicken/ButterChicken";
import ChickenManias from "./Components/Chicken/ChickenManias";
import AutumnWallpaper from "./Components/WallPapers/AutumnWallpaper";
import AutumWallpaper from "./Components/WallPapers/AutumWallpaper";
import IphoneWallpaper from "./Components/WallPapers/IphoneWallpaper";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/message" element={<Message />} />
          <Route exact path="/upload" element={<UploadImage />} />
          <Route exact path="/house" element={<HouseComponent />} />
          <Route exact path="/nail" element={<NailComponents />} />
          <Route exact path="/plant" element={<Plant />} />
          <Route exact path="/plant1" element={<HangingGarden />} />
          <Route exact path="/plant2" element={<HangingPlant />} />
          <Route exact path="/plant3" element={<Houseplant />} />
          <Route exact path="/plant4" element={<Indoor />} />
          <Route exact path="/pinterest" element={<Pinterest />} />
          <Route exact path="/profileImage" element={<PinterestProfile />} />
          <Route exact path="/img" element={<Profile />} />
          <Route exact path="/Healthyfood" element={<HealthyFood />} />
          <Route exact path="/chikenkaima" element={<BackGround />} />
          <Route exact path="/iphone" element={<WallPaperIphone />} />
          <Route exact path="/animalImage" element={<AnimalImg />} />
          <Route exact path="/animal" element={<AnimalArticle />} />
          <Route exact path="/hobbies" element={<Hobbies />} />
          <Route exact path="/Art" element={<Art />} />
          <Route exact path="/travels" element={<Travels />} />
          <Route exact path="/life" element={<Life />} />
          <Route exact path="/anime" element={<Anime />} />
          <Route exact path="/food" element={<Food />} />
          <Route exact path="/red" element={<RedBackGround />} />
          <Route exact path="/rose" element={<RoseBackGrount />} />
          <Route exact path="/wall" element={<WallBackgrount />} />
          <Route
            exact
            path="/blackpeperChicken"
            element={<BlackPeperChicken />}
          />
          <Route exact path="/butterChicken" element={<ButterChicken />} />
          <Route exact path="/chickenManias" element={<ChickenManias />} />
          <Route exact path="/autums" element={<AutumnWallpaper />} />
          <Route exact path="/appleWallpaper" element={<AutumWallpaper />} />
          <Route exact path="/iphoneWallpaper" element={<IphoneWallpaper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
