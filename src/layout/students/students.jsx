import "./students.css";
import { Tabname } from "../../components";
import { Users } from "../../database";
export const Students = () => {
  return (
    <div className="Students">
      <Tabname text={"Bizning o'quvchilar"} />
      <div className="Students__pagination">
        {Users.map((user) => (
          <div className="Students__one" key={user.id}>
            <img className="Student__img" src={user.image} alt="" />
            <h3 className="Student__name">
              {user.last_name} {user.first_name}
            </h3>
            <p className="Student__username">
              Login <span>{user.datail.username}</span>
            </p>
            <br />
            <p className="Student__point">
              Ball <span>{user.point}</span>
            </p>
            <br />
            <p className="Student__birthday">
              Tug'ilgan sana <span>{new Date(user.birthday).toDateString()}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
