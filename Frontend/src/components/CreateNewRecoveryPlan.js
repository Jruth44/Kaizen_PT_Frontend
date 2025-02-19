// CreateNewRecoveryPlan.js
import React, { useState, useEffect } from "react";
import { getPatientInjuries } from "../services/api";

function CreateNewRecoveryPlan({ userEmail }) {
  const [injuries, setInjuries] = useState([]);

  useEffect(() => {
    // Fetch injuries when the component mounts or when userEmail changes.
    if (userEmail) {
      fetchInjuries();
    }
  }, [userEmail]);

  const fetchInjuries = async () => {
    try {
      const data = await getPatientInjuries(userEmail);
      setInjuries(data);
    } catch (error) {
      console.error("Error fetching injuries:", error);
    }
  };

  const formatSpecialTests = (tests) => {
    if (!tests) return "None";
    return Object.entries(tests)
      .map(([test, result]) => `${test}: ${result ? "Positive" : "Negative"}`)
      .join(", ");
  };

  return (
    <div>
      <h3>Create a New Recovery Plan</h3>
      <p>
        Viewing injury assessments for <strong>{userEmail}</strong>.
      </p>
      
      {injuries.length > 0 ? (
        <div>
          <h4>Previous Injury Assessments</h4>
          {injuries.map((injury, index) => (
            <div 
              key={index}
              style={{ 
                marginBottom: "1.5rem", 
                padding: "1rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
                border: "1px solid #dee2e6"
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Body Part:</strong> {injury.body_part}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Description:</strong> {injury.hurting_description}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Date of Onset:</strong> {injury.date_of_onset}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Aggravating Factors:</strong> {injury.aggravating_factors}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Easing Factors:</strong> {injury.easing_factors}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Mechanism of Injury:</strong> {injury.mechanism_of_injury}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Pain Levels:</strong> Best: {injury.severity_best}, Worst: {injury.severity_worst}, Daily Avg: {injury.severity_daily_avg}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Nature of Pain:</strong> {injury.nature_of_pain}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Stage:</strong> {injury.stage}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Stability:</strong> {injury.stability}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <strong>Special Tests:</strong> {formatSpecialTests(injury.specialized_data?.special_tests)}
              </div>

              <div style={{ 
                marginTop: "1.5rem", 
                padding: "1rem", 
                backgroundColor: "#fff",
                borderRadius: "4px",
                border: "1px solid #dee2e6"
              }}>
                <h5 style={{ color: "#ff4646", marginBottom: "1rem" }}>AI Analysis</h5>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Diagnosis:</strong>
                  <p>{injury.diagnosis}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong>Clinical Reasoning:</strong>
                  <p style={{ whiteSpace: "pre-wrap" }}>{injury.reasoning}</p>
                </div>
                <div>
                  <strong>Recommendations:</strong>
                  <p>{injury.recommendations}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No injury assessments found for {userEmail}.</p>
      )}
    </div>
  );
}

export default CreateNewRecoveryPlan;
