import "./students.css";
import { Tabname } from "../../components";
import { Users } from "../../database";
export const Students = () => {
  return (
    <div className="Students">
      <Tabname text={"Our Students"} />
      <div className="Students__pagination">
        {Users.map((user) => (
          <div className="Students__one" key={user.id}>
            <img className="Student__img" src={user.image} alt="" />
            <h3 className="Student__name">
              {user.last_name} {user.first_name}
            </h3>
            <p className="Student__username">
              Username <span>{user.datail.username}</span>
            </p>
            <br />
            <p className="Student__point">
              Point <span>{user.point}</span>
            </p>
            <br />
            <p className="Student__birthday">
              Birthday <span>{new Date(user.birthday).toDateString()}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
