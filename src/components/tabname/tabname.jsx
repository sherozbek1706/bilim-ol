import "./tabname.css";
import tabLogo from "../../assets/image/tab-logo.jpg";
export const Tabname = ({ text }) => {
  return (
    <div className="Tabname">
      <img src={tabLogo} className="Tabname__logo" alt="" />
      <h1 className="Tabname__text">{text}</h1>
    </div>
  );
};
