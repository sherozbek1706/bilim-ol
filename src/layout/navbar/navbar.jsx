import "./navbar.css";
import ProfilePhoto from "../../assets/image/profile-photo.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const isLoggin = JSON.parse(localStorage.getItem("isLoggin"));

  const handleActiveTab = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.assign("/");
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
            Bosh sahifa
          </Link>
          <Link to="/leaderboard" className="Navbar__link">
            Eng kuchlilar
          </Link>
          <Link to={isLoggin ? "/lessons" : "/login"} className="Navbar__link">
            {isLoggin ? "Darslar" : "Login"}
          </Link>
          <Link
            to={isLoggin ? "/" : "/login"}
            className="Navbar__link"
            onClick={handleLogout}
          >
            {isLoggin ? "O'chirish" : null}
          </Link>
          <img
            className="Navbar__profilephoto"
            src={isLoggin ? isLoggin.image : ProfilePhoto}
            alt=""
          />
        </div>
        <i className="fa-solid fa-bars hamburger" onClick={handleActiveTab}></i>
      </div>

      <div
        className={`Navbar__responsive  ${isActive ? "stick__navbar" : ""} `}
      >
        <i
          className="fa-solid fa-xmark navbar_close"
          onClick={handleActiveTab}
        ></i>
        <h1 className="Navbar__logo">
          <Link to="/" className="Navbar__logolink" onClick={handleActiveTab}>
            Bilim'ol
          </Link>
        </h1>
        <div className="Navbar__nav">
          <Link to="/" className="Navbar__link" onClick={handleActiveTab}>
            bosh sahifa
          </Link>
          <Link
            to="/leaderboard"
            className="Navbar__link"
            onClick={handleActiveTab}
          >
            eng kuchlilar
          </Link>
          <Link
            to={isLoggin ? "/lessons" : "/login"}
            className="Navbar__link"
            onClick={handleActiveTab}
          >
            {isLoggin ? "darslar" : "Login"}
          </Link>
          <Link
            to={isLoggin ? "/" : "/login"}
            className="Navbar__link"
            onClick={handleLogout}
          >
            {isLoggin ? "Chiqish" : null}
          </Link>
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
