import "./navbar.css";
import ProfilePhoto from "../../assets/image/profile-photo.jpg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("isLoggin"));

  return (
    <div className="Navbar">
      <h1 className="Navbar__logo">Bilim'ol</h1>
      <div className="Navbar__nav">
        <Link to="/" className="Navbar__link">
          Home
        </Link>
        <Link to="/leaderboard" className="Navbar__link">
          Leaderboard
        </Link>
        <Link to="/lessons" className="Navbar__link">
          Lessons
        </Link>
        <Link to="/profile" className="Navbar__link">
          Profile
        </Link>
        <img
          className="Navbar__profilephoto"
          src={userInfo ? userInfo.image : ProfilePhoto}
          alt=""
        />
      </div>
    </div>
  );
};
