import "./statistic.css";
import CountUp from "react-countup";
import { Lessons, Users } from "../../database";
export const Statistic = () => {
  return (
    <div className="Main__statistics">
      <div className="Statistic">
        <h1 className="Statistic__number">
          <CountUp
            end={Lessons.length - 1}
            duration={7}
            className="number_coutr"
          />
        </h1>
        <div className="Statistic__rightside">
          <h2 className="Statistic__name">Darslar</h2>
          <p className="Statistic__p">Hamma dars</p>
        </div>
      </div>
      <div className="Statistic">
        <h1 className="Statistic__number">
          <CountUp end={Users.length} duration={10} className="number_coutr" />
        </h1>
        <div className="Statistic__rightside">
          <h2 className="Statistic__name">O'quvchilar</h2>
          <p className="Statistic__p">Hamma o'quvchi</p>
        </div>
      </div>
      <div className="Statistic">
        <h1 className="Statistic__number">
          <CountUp
            end={(Lessons.length - 1) * 12}
            duration={5}
            className="number_coutr"
          />
        </h1>
        <div className="Statistic__rightside">
          <h2 className="Statistic__name">So'zlar</h2>
          <p className="Statistic__p">Hamma so'z</p>
        </div>
      </div>
    </div>
  );
};
