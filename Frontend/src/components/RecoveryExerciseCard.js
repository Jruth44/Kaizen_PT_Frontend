// RecoveryExerciseCard.js
import React, { useState } from "react";

function RecoveryExerciseCard({ bodyPart, exerciseName, instructions, purpose, initialValues = [0, 0], onLogChange }) {
  const [values, setValues] = useState(initialValues);
  const [completed, setCompleted] = useState(false);
  const [notes, setNotes] = useState("");

  const handleValueChange = (idx, val) => {
    const updated = [...values];
    updated[idx] = val;
    setValues(updated);
  };

  const handleCompletedChange = (e) => {
    setCompleted(e.target.checked);
    if (onLogChange) {
      onLogChange(e.target.checked);
    }
  };

  return (
    <div className="exercise-card" style={{ 
      marginBottom: "1rem", 
      opacity: completed ? 0.7 : 1,
      borderLeft: completed ? "4px solid #28a745" : "1px solid #dee2e6" 
    }}>
      {bodyPart && (
        <div style={{ fontSize: "0.8rem", color: "#ff4646", textTransform: "uppercase" }}>
          {bodyPart}
        </div>
      )}
      
      <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{exerciseName}</div>
      
      <div style={{ fontSize: "0.9rem", color: "#666", margin: "0.5rem 0" }}>
        {instructions}
      </div>
      
      {purpose && (
        <div style={{ fontSize: "0.8rem", color: "#666", marginBottom: "0.5rem" }}>
          <strong>Purpose:</strong> {purpose}
        </div>
      )}

      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        borderTop: "1px solid #eee",
        paddingTop: "0.5rem",
        marginTop: "0.5rem"
      }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#999" }}>Sets Completed</div>
            <input
              type="number"
              value={values[0]}
              onChange={(e) => handleValueChange(0, e.target.value)}
              style={{ width: "60px" }}
            />
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "#999" }}>Reps Per Set</div>
            <input
              type="number"
              value={values[1]}
              onChange={(e) => handleValueChange(1, e.target.value)}
              style={{ width: "60px" }}
            />
          </div>
        </div>
        
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChange}
            id={`complete-${exerciseName.replace(/\s+/g, '-').toLowerCase()}`}
          />
          <label 
            htmlFor={`complete-${exerciseName.replace(/\s+/g, '-').toLowerCase()}`}
            style={{ marginLeft: "0.5rem", fontSize: "0.9rem" }}
          >
            Completed
          </label>
        </div>
      </div>
      
      <div style={{ marginTop: "0.5rem" }}>
        <div style={{ fontSize: "0.8rem", color: "#999", marginBottom: "0.25rem" }}>Notes</div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes about how this exercise felt..."
          style={{ 
            width: "100%", 
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ddd",
            minHeight: "60px"
          }}
        />
      </div>
    </div>
  );
}

export default RecoveryExerciseCard;