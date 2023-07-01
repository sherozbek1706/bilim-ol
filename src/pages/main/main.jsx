import { Button } from "../../components/";
import { Navbar } from "../../layout";
import "./main.css";
export const Main = () => {
  return (
    <div className="Main">
      <Navbar />
      <div className="Main__section">
        <h1 className="Main__text">Bilim'ol</h1>
        <p className="Main__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in id,
          minus soluta modi explicabo assumenda? Asperiores quaerat placeat
          soluta perferendis et, ad amet perspiciatis modi deleniti explicabo
          aliquam laborum eaque tenetur! Repellendus est, voluptas eaque
          voluptates quis enim unde dignissimos laborum odit excepturi
          molestias?
        </p>
        <div className="Main__buttons">
          <Button name={"Leaderboard"} link={"/leaderboard"} />
          <Button name={"Lessons"} link={"/lessons"} />
        </div>
      </div>
    </div>
  );
};
