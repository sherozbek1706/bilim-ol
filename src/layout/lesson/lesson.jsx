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
      <h3 className="Lesson__number">{lesson.id} - DARS</h3>
      <h1 className="Lesson_name">{lesson.name}</h1>
      {lessonText.map((item) => {
        if (item.tag == "p") {
          return <p key={item.id}>{item.text}</p>;
        } else if (item.tag == "a") {
          return (
            <div key={item.id}>
              <a href={item.href}>{item.text}</a>
              <br />
            </div>
          );
        }
      })}
      <img className="Lesson_image" src={lesson.image} alt="" />
    </div>
  );
};
