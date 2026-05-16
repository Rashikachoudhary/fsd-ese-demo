import { useEffect, useState } from "react";
import API from "./api";

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    const res = await API.get("/candidates");
    setCandidates(res.data);
  };

  return (
    <div>
      <h2>Candidates</h2>

      {candidates.map((c) => (
        <div className="card" key={c._id}>
          <h3>{c.name}</h3>
       {/* <p>{c.skills.join(", ")}</p> */}
        </div>
      ))}
    </div>
  );
}

export default CandidateList;