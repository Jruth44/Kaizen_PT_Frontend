// src/components/CreateNewRecoveryPlan.js
import React, { useState, useEffect } from "react";
import { getPatientInjuries, generateRecoveryPlan, getWeeklySchedule, deletePatientInjury } from "../services/api";

function CreateNewRecoveryPlan({ userEmail }) {
  const [injuries, setInjuries] = useState([]);
  const [recoveryPlan, setRecoveryPlan] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [selectedInjuries, setSelectedInjuries] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState({ show: false, index: null });

  useEffect(() => {
    // Fetch injuries when the component mounts or when userEmail changes
    if (userEmail) {
      fetchInjuries();
      fetchRecoveryPlan();
    }
  }, [userEmail]);

  const fetchInjuries = async () => {
    try {
      const data = await getPatientInjuries(userEmail);
      setInjuries(data);
      // By default, select all injuries
      setSelectedInjuries(data.map((_, index) => index));
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
    if (selectedInjuries.length === 0) {
      setError("Please select at least one injury to include in your recovery plan.");
      return;
    }

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

  const handleDeleteInjury = async (index) => {
    try {
      await deletePatientInjury(userEmail, index);
      // Filter out the deleted injury and refresh the list
      setInjuries(injuries.filter((_, i) => i !== index));
      setSelectedInjuries(selectedInjuries.filter(i => i !== index).map(i => i > index ? i - 1 : i));
      setDeleteConfirmation({ show: false, index: null });
    } catch (error) {
      console.error("Error deleting injury:", error);
      setError("Failed to delete injury. Please try again later.");
    }
  };

  const toggleInjurySelection = (index) => {
    setSelectedInjuries(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const formatSpecialTests = (tests) => {
    if (!tests) return "None";
    return Object.entries(tests)
      .map(([test, result]) => `${test}: ${result ? "Positive" : "Negative"}`)
      .join(", ");
  };

  return (
    <div>
      <div className="page-header">
        <h2>Create a New Recovery Plan</h2>
        <p className="text-muted">
          Viewing injury assessments for <strong>{userEmail}</strong>
        </p>
      </div>
      
      {error && (
        <div className="alert alert-error">
          {error}
        </div>
      )}

      {injuries.length > 0 ? (
        <div>
          <h3>Previous Injury Assessments</h3>
          <p className="text-muted">
            Select the injuries you want to include in your recovery plan:
          </p>
          
          {injuries.map((injury, index) => (
            <div 
              key={index}
              className="injury-card"
            >
              <div className="injury-header">
                <div>
                  <input 
                    type="checkbox" 
                    id={`injury-${index}`}
                    checked={selectedInjuries.includes(index)}
                    onChange={() => toggleInjurySelection(index)}
                    style={{ marginRight: "0.5rem", transform: "scale(1.2)" }}
                  />
                  <label htmlFor={`injury-${index}`} className="injury-title">
                    {injury.body_part} Injury
                  </label>
                </div>
                <div>
                  {deleteConfirmation.show && deleteConfirmation.index === index ? (
                    <div className="d-flex" style={{ gap: "0.5rem" }}>
                      <button 
                        onClick={() => handleDeleteInjury(index)}
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#dc3545",
                          color: "white"
                        }}
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirmation({ show: false, index: null })}
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#6c757d",
                          color: "white"
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setDeleteConfirmation({ show: true, index })}
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "transparent",
                        color: "#dc3545",
                        border: "1px solid #dc3545"
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>

              <div className="injury-body">
                <div className="injury-grid">
                  <div className="injury-field">
                    <div className="injury-label">Description:</div>
                    <div className="injury-value">{injury.hurting_description}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Date of Onset:</div>
                    <div className="injury-value">{injury.date_of_onset}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Aggravating Factors:</div>
                    <div className="injury-value">{injury.aggravating_factors}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Easing Factors:</div>
                    <div className="injury-value">{injury.easing_factors}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Mechanism of Injury:</div>
                    <div className="injury-value">{injury.mechanism_of_injury}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Pain Levels:</div>
                    <div className="injury-value">
                      Best: {injury.severity_best}, 
                      Worst: {injury.severity_worst}, 
                      Daily Avg: {injury.severity_daily_avg}
                    </div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Nature of Pain:</div>
                    <div className="injury-value">{injury.nature_of_pain}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Stage:</div>
                    <div className="injury-value">{injury.stage}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Stability:</div>
                    <div className="injury-value">{injury.stability}</div>
                  </div>
                  <div className="injury-field">
                    <div className="injury-label">Special Tests:</div>
                    <div className="injury-value">{formatSpecialTests(injury.specialized_data?.special_tests)}</div>
                  </div>
                </div>

                <div className="diagnosis-section">
                  <h4>AI Analysis</h4>
                  <div className="diagnosis-field">
                    <div className="diagnosis-label">Diagnosis:</div>
                    <div className="diagnosis-content">{injury.diagnosis}</div>
                  </div>
                  <div className="diagnosis-field">
                    <div className="diagnosis-label">Clinical Reasoning:</div>
                    <div className="diagnosis-content">{injury.reasoning}</div>
                  </div>
                  <div className="diagnosis-field">
                    <div className="diagnosis-label">Recommendations:</div>
                    <div className="diagnosis-content">{injury.recommendations}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="generate-plan-btn">
            <button
              onClick={handleGeneratePlan}
              disabled={isGenerating || selectedInjuries.length === 0}
              className="btn btn-with-icon"
              style={{
                background: "#ff4646",
                color: "#fff",
                opacity: isGenerating || selectedInjuries.length === 0 ? 0.7 : 1
              }}
            >
              {isGenerating ? "Generating Plan..." : "Generate Recovery Plan"}
            </button>
            <p className="text-muted" style={{ marginTop: "0.5rem" }}>
              This will create a personalized weekly exercise plan based on your selected injuries.
            </p>
          </div>

          {recoveryPlan && (
            <div className="schedule-container">
              <div className="schedule-header">
                <h3 className="schedule-title">Your Weekly Recovery Plan</h3>
              </div>
              
              {Object.entries(recoveryPlan).map(([day, exercises]) => (
                <div key={day} className="day-container">
                  <div className="day-header">
                    <h4 className="day-title">{day}</h4>
                    <span className="day-exercises-count">{exercises.length} exercises</span>
                  </div>
                  
                  <div className="day-content">
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
                      <div className="day-rest">
                        <p>Rest day or no exercises scheduled.</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No Injury Assessments</h3>
          <p>No injury assessments found for {userEmail}.</p>
          <p className="text-muted">Please add injury information first by going to the "Add an Injury" section.</p>
        </div>
      )}
    </div>
  );
}

export default CreateNewRecoveryPlan;