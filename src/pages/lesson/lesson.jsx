import "./lesson.css";
import { Navbar, Sitebar, Lesson } from "../../layout";
import { Tabname } from "../../components";
import { useEffect, useState } from "react";
export const Lessons = () => {
  const lclessonId = localStorage.getItem("lesson_id") || 1;
  const [lessonId, setLessonId] = useState(lclessonId);
  const handleTakeID = (id) => {
    setLessonId(id);
  };

  useEffect(() => {
    localStorage.setItem("lesson_id", lessonId);
    console.log("Lesson = ", lessonId);
  }, [lessonId]);

  return (
    <div className="Lessons">
      <Navbar />
      <Tabname text={"Lessons"} />
      <div className="Lessons__table">
        <Sitebar handleTakeID={(id) => handleTakeID(id)} id={lessonId} />
        <Lesson id={lessonId} />
      </div>
    </div>
  );
};
