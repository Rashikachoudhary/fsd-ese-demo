import "./App.css";

import CandidateForm from "./CandidateForm";
import CandidateList from "./CandidateList";
import JobForm from "./JobForm";

function App() {
  return (
    <div className="container">
      <h1>Candidate Shortlisting System</h1>

      <CandidateForm />

      <CandidateList />

      <JobForm />
    </div>
  );
}

export default App;