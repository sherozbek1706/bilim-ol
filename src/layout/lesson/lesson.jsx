import { useEffect, useState } from "react";
import { Lessons } from "../../database";
import "./lesson.css";

export const Lesson = ({ id }) => {
  const [lesson, setLesson] = useState([]);
  const [lessonText, setLessonText] = useState([]);

  useEffect(() => {
    const existLesson = Lessons.find((l) => l.id == id);
    setLesson(existLesson);
    setLessonText(existLesson.text);
  }, [id]);
  return (
    <div className="Lesson">
      <h1 className="Lesson_name">{lesson.name}</h1>
      {lessonText.map((item) => {
        if (item.tag == "p") {
          return <p>{item.text}</p>;
        } else if (item.tag == "a") {
          return (
            <>
              <a href={item.href}>{item.text}</a>
              <br />
            </>
          );
        }
      })}
      <img className="Lesson_image" src={lesson.image} alt="" />
    </div>
  );
};
