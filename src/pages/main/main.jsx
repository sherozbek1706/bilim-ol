import { Button } from "../../components/";
import { Navbar, Statistic, Students } from "../../layout";
import "./main.css";
export const Main = () => {
  return (
    <>
      <div className="Main">
        <Navbar />
        <div className="Main__section">
          <h1 className="Main__text">Bilim'ol</h1>
          <Statistic />
          <div className="Main__buttons">
            <Button name={"Eng kuchlilar"} link={"/leaderboard"} />
            <Button name={"Darslar"} link={"/lessons"} />
          </div>
        </div>
      </div>
      <Students />
    </>
  );
};
