import "./navbar.css";
import ProfilePhoto from "../../assets/image/profile-photo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const isLoggin = JSON.parse(localStorage.getItem("isLoggin"));

  const handleActiveTab = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  return (
    <>
      <div className="Navbar">
        <h1 className="Navbar__logo">
          <Link to="/" className="Navbar__logolink">
            Bilim'ol
          </Link>
        </h1>
        <div className="Navbar__nav">
          <Link to="/" className="Navbar__link">
            Home
          </Link>
          <Link to="/leaderboard" className="Navbar__link">
            Leaderboard
          </Link>
          <Link to={isLoggin ? "/lessons" : "/login"} className="Navbar__link">
            {isLoggin ? "Lessons" : "Login"}
          </Link>
          {/* <Link to="/profile" className="Navbar__link">
          Profile
        </Link> */}
          <img
            className="Navbar__profilephoto"
            src={isLoggin ? isLoggin.image : ProfilePhoto}
            alt=""
          />
        </div>
        <i class="fa-solid fa-bars hamburger" onClick={handleActiveTab}></i>
      </div>

      <div
        className={`Navbar__responsive  ${isActive ? "stick__navbar" : ""} `}
      >
        <i class="fa-solid fa-xmark navbar_close" onClick={handleActiveTab}></i>
        <h1 className="Navbar__logo">
          <Link to="/" className="Navbar__logolink" onClick={handleActiveTab}>
            Bilim'ol
          </Link>
        </h1>
        <div className="Navbar__nav">
          <Link to="/" className="Navbar__link" onClick={handleActiveTab}>
            Home
          </Link>
          <Link
            to="/leaderboard"
            className="Navbar__link"
            onClick={handleActiveTab}
          >
            Leaderboard
          </Link>
          <Link
            to={isLoggin ? "/lessons" : "/login"}
            className="Navbar__link"
            onClick={handleActiveTab}
          >
            {isLoggin ? "Lessons" : "Login"}
          </Link>
          {/* <Link to="/profile" className="Navbar__link">
          Profile
        </Link> */}
          <img
            className="Navbar__profilephoto"
            src={isLoggin ? isLoggin.image : ProfilePhoto}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
