import { useState } from "react";
import API from "./api";

function JobForm() {
  const [skills, setSkills] = useState("");
  const [results, setResults] = useState([]);

  const handleMatch = async () => {
    const res = await API.post("/match", {
      requiredSkills: skills.split(","),
      minExperience: 1,
    });

    setResults(res.data);
  };

  return (
    <div>
      <input
        placeholder="Required Skills"
        onChange={(e) => setSkills(e.target.value)}
      />

      <button onClick={handleMatch}>
        Match Candidates
      </button>

      {results.map((r) => (
        <div className="card" key={r._id}>
          <h3>{r.name}</h3>
          <p>Score: {r.matchScore}%</p>
        </div>
      ))}
    </div>
  );
}

export default JobForm;