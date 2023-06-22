import { Tabname } from "../../components";
import { LeadTable, Navbar } from "../../layout";
import "./leaderboard.css";
export const Leaderboard = () => {
  return (
    <div className="Leaderboard">
      <Navbar />
      <Tabname text={"Leaderboard Table"} />
      <LeadTable />
    </div>
  );
};
