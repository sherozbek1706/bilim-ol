import "./lead_table_row.css";
import circleLogo from "../../assets/image/circle-logo.png";
export const LeadTableRow = ({ data }) => {
  return (
    <>
      {data.map((user, idx) => (
        <div className="LeadTableRow" key={user.id}>
          <div className="LeadTableRow__profileside">
            <p className="LeadTableRow_idx">{idx + 1}</p>
            <img
              src={user.image}
              className="LeadTableRow__profile"
              alt="Profile"
            />
            <p className="LeadTableRow__fullname">
              {user.first_name} {user.last_name}
            </p>
          </div>
          <div className="LeadTableRow__pointside">
            <p className="LeadTableRow__point">{user.point}</p>
            <img className="circleLogo" src={circleLogo} alt="L" />
          </div>
        </div>
      ))}
    </>
  );

  data.map((user) => (
    <div className="LeadTableRow">
      <h1>{user}</h1>
    </div>
  ));
};
