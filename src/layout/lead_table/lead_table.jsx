import "./lead_table.css";
import { Users } from "../../database";
import { LeadTableRow } from "../../components";
import { useEffect, useState } from "react";
export const LeadTable = () => {
  
  const [data, setData] = useState(Users);
  
  
  useEffect(() => {
    const base = data.sort((a, b) => {
      return b.point - a.point;
    });
    console.log(base);

    setData(base);
  }, []);

  return (
    <div className="Leadtable">
      <LeadTableRow data={data} />
    </div>
  );
};
