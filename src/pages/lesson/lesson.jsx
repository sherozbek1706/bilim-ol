import "./lesson.css";
import { Navbar, Sitebar, Lesson } from "../../layout";
import { Tabname } from "../../components";
import { useState } from "react";
export const Lessons = () => {
  const [lessonId, setLessonId] = useState(1);
  const handleTakeID = (id) => {
    setLessonId(id);
  };
  return (
    <div className="Lessons">
      <Navbar />
      <Tabname text={"Lessons"} />
      <div className="Lessons__table">
        <Sitebar handleTakeID={(id) => handleTakeID(id)} />
        <Lesson id={lessonId} />
      </div>
    </div>
  );
};
