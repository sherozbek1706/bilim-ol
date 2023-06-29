import "./sitebar.css";
import { Lessons } from "../../database";

export const Sitebar = ({ handleTakeID }) => {
  return (
    <div className="Sitebar">
      {Lessons.map((lesson, idx) => (
        <div
          className="Sitebar__row"
          key={lesson.id}
          onClick={() => handleTakeID(lesson.id)}
        >
          <h3 className="Sitebar__rowname">
            {idx}. {lesson.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
