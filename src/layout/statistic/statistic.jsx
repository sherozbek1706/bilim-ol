import "./statistic.css";
import CountUp from "react-countup";
import { Lessons, Users } from "../../database";
export const Statistic = () => {
  return (
    <div className="Main__statistics">
      <div className="Statistic">
        <h1 className="Statistic__number">
          <CountUp
            end={Lessons.length}
            duration={7}
            className="number_coutr"
          />
        </h1>
        <div className="Statistic__rightside">
          <h2 className="Statistic__name">Lesson</h2>
          <p className="Statistic__p">All Lessons</p>
        </div>
      </div>
      <div className="Statistic">
        <h1 className="Statistic__number">
          <CountUp end={Users.length} duration={10} className="number_coutr" />
        </h1>
        <div className="Statistic__rightside">
          <h2 className="Statistic__name">Students</h2>
          <p className="Statistic__p">All Students</p>
        </div>
      </div>
      <div className="Statistic">
        <h1 className="Statistic__number">
          <CountUp
            end={(Lessons.length - 1) * 10}
            duration={5}
            className="number_coutr"
          />
        </h1>
        <div className="Statistic__rightside">
          <h2 className="Statistic__name">Words</h2>
          <p className="Statistic__p">All Words</p>
        </div>
      </div>
    </div>
  );
};
