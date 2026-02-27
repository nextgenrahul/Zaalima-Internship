import { useState } from "react";
import "./App.css";

function App() {
  const [resume, setResume] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [matchScore, setMatchScore] = useState<number | null>(null);

  const handleAnalyze = () => {
    // Temporary mock score (later connect to backend)
    const randomScore = Math.floor(Math.random() * 40) + 60;
    setMatchScore(randomScore);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>ATSmith</h1>
      <p>AI Resume Architect & ATS Optimizer</p>

      <hr style={{ margin: "20px 0" }} />

      {/* Resume Upload */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Upload Resume</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setResume(e.target.files ? e.target.files[0] : null)
          }
        />
        {resume && <p>Selected: {resume.name}</p>}
      </div>

      {/* Job Description */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Paste Job Description</h3>
        <textarea
          rows={6}
          style={{ width: "100%" }}
          placeholder="Paste job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Analyze Resume
      </button>

      {/* Match Result */}
      {matchScore !== null && (
        <div style={{ marginTop: "30px" }}>
          <h2>ATS Match Score: {matchScore}%</h2>
          <p>
            {matchScore > 80
              ? "Excellent alignment!"
              : matchScore > 65
              ? "Good match. Some improvements possible."
              : "Needs optimization for better ATS ranking."}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;