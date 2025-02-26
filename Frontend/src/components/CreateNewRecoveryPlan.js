import React, { useState, useEffect } from "react";
import { getPatientInjuries, generateRecoveryPlan, getWeeklySchedule } from "../services/api";

function CreateNewRecoveryPlan({ userEmail }) {
  const [injuries, setInjuries] = useState([]);
  const [recoveryPlan, setRecoveryPlan] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch injuries when the component mounts or when userEmail changes.
    if (userEmail) {
      fetchInjuries();
      fetchRecoveryPlan();
    }
  }, [userEmail]);

  const fetchInjuries = async () => {
    try {
      const data = await getPatientInjuries(userEmail);
      setInjuries(data);
    } catch (error) {
      console.error("Error fetching injuries:", error);
      setError("Failed to load injuries. Please try again later.");
    }
  };

  const fetchRecoveryPlan = async () => {
    try {
      const data = await getWeeklySchedule(userEmail);
      // Check if the data actually contains a recovery plan with exercises
      const hasExercises = Object.values(data).some(day => day.length > 0);
      if (hasExercises) {
        setRecoveryPlan(data);
      }
    } catch (error) {
      console.error("Error fetching recovery plan:", error);
      // Don't set error here as the user might not have a plan yet
    }
  };

  const handleGeneratePlan = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const plan = await generateRecoveryPlan(userEmail);
      setRecoveryPlan(plan);
      setIsGenerating(false);
    } catch (error) {
      console.error("Error generating recovery plan:", error);
      setError(
        error.response?.data?.detail ||
        "Failed to generate recovery plan. Please try again later."
      );
      setIsGenerating(false);
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
      
      {error && (
        <div style={{ 
          padding: "0.75rem", 
          backgroundColor: "#f8d7da",
          color: "#721c24",
          borderRadius: "0.25rem",
          marginBottom: "1rem"
        }}>
          {error}
        </div>
      )}

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

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <button
              onClick={handleGeneratePlan}
              disabled={isGenerating}
              style={{
                background: "#ff4646",
                color: "#fff",
                padding: "0.5rem 1rem",
                border: "none",
                cursor: isGenerating ? "not-allowed" : "pointer",
                borderRadius: "4px",
                opacity: isGenerating ? 0.7 : 1
              }}
            >
              {isGenerating ? "Generating Plan..." : "Generate Recovery Plan"}
            </button>
            <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "0.5rem" }}>
              This will create a personalized weekly exercise plan based on your injuries.
            </p>
          </div>

          {recoveryPlan && (
            <div style={{ marginTop: "2rem" }}>
              <h4>Your Weekly Recovery Plan</h4>
              <p style={{ marginBottom: "1rem" }}>
                Below is your personalized recovery plan based on your injury assessments:
              </p>
              
              {Object.entries(recoveryPlan).map(([day, exercises]) => (
                <div 
                  key={day}
                  style={{ 
                    marginBottom: "1.5rem", 
                    padding: "1rem",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "4px",
                    border: "1px solid #dee2e6"
                  }}
                >
                  <h5 style={{ marginBottom: "0.75rem", color: "#333" }}>{day}</h5>
                  
                  {exercises.length > 0 ? (
                    exercises.map((exercise, index) => (
                      <div 
                        key={index}
                        style={{ 
                          marginBottom: "1rem",
                          padding: "0.75rem",
                          backgroundColor: "#fff",
                          borderRadius: "4px",
                          border: "1px solid #eee"
                        }}
                      >
                        <div style={{ fontWeight: "bold", color: "#ff4646" }}>
                          {exercise.name || (typeof exercise === 'string' ? exercise : 'Exercise')}
                        </div>
                        
                        {exercise.sets && exercise.reps && (
                          <div style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.25rem" }}>
                            {exercise.sets} sets x {exercise.reps} reps
                          </div>
                        )}
                        
                        {exercise.description && (
                          <div style={{ marginTop: "0.5rem" }}>
                            <strong>Instructions:</strong>
                            <p>{exercise.description}</p>
                          </div>
                        )}
                        
                        {exercise.purpose && (
                          <div style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#666" }}>
                            <strong>Purpose:</strong> {exercise.purpose}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p style={{ color: "#666", fontStyle: "italic" }}>Rest day or no exercises scheduled.</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <p>No injury assessments found for {userEmail}.</p>
          <p>Please add injury information first by going to the "Add an Injury" section.</p>
        </div>
      )}
    </div>
  );
}

export default CreateNewRecoveryPlan;