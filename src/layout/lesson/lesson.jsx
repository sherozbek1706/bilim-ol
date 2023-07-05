import { useEffect, useState } from "react";
import { Lessons } from "../../database";
import Countdown from "react-countdown";
import "./lesson.css";

export const Lesson = ({ id }) => {
  const [lesson, setLesson] = useState([]);
  const [lessonText, setLessonText] = useState([]);
  const [lessonOpened, setLessonOpened] = useState(false);
  const [lessonOpeningTime, setLessonOpeningTime] = useState("");

  useEffect(() => {
    let existLesson = Lessons.find((l) => l.id == id);
    setLesson(existLesson);
    setLessonText(existLesson.text);

    const currentDate = Date.now();
    const lessonOpeningDay = new Date(existLesson.opening_day).getTime();

    if (currentDate > lessonOpeningDay) {
      setLessonOpened(true);
    } else {
      setLessonOpened(false);
    }
    const Uzmonth = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ];
    let kun = existLesson.opening_day.substring(8, 10);
    let oy = existLesson.opening_day.substring(5, 7);
    let yil = existLesson.opening_day.substring(0, 4);
    let soat = existLesson.opening_day.substring(11, 16);

    let overall = `${yil}-yil ${kun}-${
      Uzmonth[oy - 1]
    } ${soat}da dars ochiladi`;
    setLessonOpeningTime(overall);
  }, [id, lessonOpened]);

  const renderer = ({ completed }) => {
    if (completed) {
      setLessonOpened(true);
    }
  };

  if (!lessonOpened) {
    return (
      <div className="Lesson">
        <div className="Lesson__lock">
          <i class="fa-solid fa-lock lesson__lockicon"></i>
          <h2 className="open_time_elon">{lessonOpeningTime}</h2>
          <h1 className="Lesson__locksabab">
            {lesson.id} - dars hozircha yopiq! Bundan oldingi darslarni
            takrorlashingizni so'rab qolamiz. Ochilish vaqti pastda 👇
          </h1>
          <>
            <Countdown
              date={new Date(lesson.opening_day)}
              renderer={renderer}
            />
            <Countdown
              date={new Date(lesson.opening_day)}
              className="Lesson__openingTime"
            />
          </>
        </div>
      </div>
    );
  }

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
