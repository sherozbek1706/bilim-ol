import "./lesson.css";
import { Lessons } from "../../database";
import { useEffect, useState } from "react";
// import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
export const Lesson = ({ id }) => {
  const [lesson, setLesson] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    const existLesson = Lessons.find((l) => l.id == id);
    console.log(existLesson);
    setLesson(existLesson);

    
  }, [id]);

  // const docs = [
  //   {
  //     uri: "ww.docx",
  //     fileType: "docx",
  //     // fileName: "lesson1.docx",
  //   },
  // ];

  return (
    <div className="Lesson">
      <h1>Lesson {lesson.name}</h1>
      <p>{data}</p>
    </div>
  );
};
