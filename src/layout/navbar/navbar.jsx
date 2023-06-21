import "./navbar.css";
import ProfilePhoto from "../../assets/image/profile-photo.jpg";
export const Navbar = () => {
  return (
    <div className="Navbar">
      <h1 className="Navbar__logo">Bilim'ol</h1>
      <div className="Navbar__nav">
        <a href="#" className="Navbar__link">
          Home
        </a>
        <a href="#" className="Navbar__link">
          Leaderboard
        </a>
        <a href="#" className="Navbar__link">
          Lessons
        </a>
        <a href="#" className="Navbar__link">
          Profile
        </a>
        <img className="Navbar__profilephoto" src={ProfilePhoto} alt="" />
      </div>
    </div>
  );
};
