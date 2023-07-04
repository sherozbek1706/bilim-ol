import { Button } from "../../components/";
import { Navbar, Statistic } from "../../layout";
import "./main.css";
export const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <div className="Main__section">
        <h1 className="Main__text">Bilim'ol</h1>
        <Statistic />
        <div className="Main__buttons">
          <Button name={"Leaderboard"} link={"/leaderboard"} />
          <Button name={"Lessons"} link={"/lessons"} />
        </div>
      </div>
    </div>
  );
};
