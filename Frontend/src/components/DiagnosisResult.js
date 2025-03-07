import React from 'react';

const DiagnosisResult = ({ diagnosisResult }) => {
  if (!diagnosisResult) return null;
  
  return (
    <div
      id="diagnosis-result"
      style={{
        marginTop: "2rem",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #dee2e6",
        borderLeft: "4px solid #ff4646",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
      }}
    >
      <h3 style={{ color: "#ff4646", marginBottom: "1.5rem", fontSize: "1.5rem" }}>
        AI Analysis Results
      </h3>

      <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#333" }}>Preliminary Diagnosis:</h4>
        <p style={{ marginTop: "0.5rem", lineHeight: "1.6" }}>{diagnosisResult.diagnosis}</p>
      </div>

      <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#333" }}>Clinical Reasoning:</h4>
        <p style={{ whiteSpace: "pre-wrap", marginTop: "0.5rem", lineHeight: "1.6" }}>{diagnosisResult.reasoning}</p>
      </div>

      <div>
        <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "#333" }}>Recommended Next Steps:</h4>
        <p style={{ marginTop: "0.5rem", lineHeight: "1.6" }}>{diagnosisResult.recommendations}</p>
      </div>
    </div>
  );
};

export default DiagnosisResult;