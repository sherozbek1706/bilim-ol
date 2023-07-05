import { Tabname } from "../../components";
import { LeadTable, Navbar } from "../../layout";
import "./leaderboard.css";
export const Leaderboard = () => {
  return (
    <div className="Leaderboard">
      <Navbar />
      <Tabname text={"Eng kuchlilar jadvali"} />
      <LeadTable />
    </div>
  );
};
