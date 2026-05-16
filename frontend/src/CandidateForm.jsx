import { useState } from "react";
import API from "./api";

function CandidateForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    skills: "",
    experience: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/candidates", {
      ...form,
      skills: form.skills.split(","),
    });

    alert("Candidate Added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        placeholder="Skills"
        onChange={(e) =>
          setForm({ ...form, skills: e.target.value })
        }
      />

      <input
        placeholder="Experience"
        onChange={(e) =>
          setForm({ ...form, experience: e.target.value })
        }
      />

      <button>Add</button>
    </form>
  );
}

export default CandidateForm;