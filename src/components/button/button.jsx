import { Link } from "react-router-dom";
import "./button.css";
export const Button = ({ name, link }) => {
  return (
    <Link to={link} className="Button__text">
      <button className="Button">{name}</button>
    </Link>
  );
};
