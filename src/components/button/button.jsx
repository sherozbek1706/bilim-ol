import { Link } from "react-router-dom";
import "./button.css";
export const Button = ({ name, link }) => {
  return (
    <button className="Button">
      <Link to={link} className="Button__text">
        {name}
      </Link>
    </button>
  );
};
