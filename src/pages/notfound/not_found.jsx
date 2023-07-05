import { Link } from "react-router-dom";
import "./not_found.css";
import { Button } from "../../components";
export const NotFound = () => {
  return (
    <div className="NotFound">
      <h2>Page Not Found 404!</h2>
      <Button name="Bosh Sahifa" link="/" />
    </div>
  );
};
