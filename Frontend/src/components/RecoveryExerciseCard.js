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
    <div className={`exercise-card ${completed ? 'completed' : ''}`}>
      {bodyPart && (
        <div className="badge">{bodyPart}</div>
      )}
      
      <h3>{exerciseName}</h3>
      
      <p>{instructions}</p>
      
      {purpose && (
        <div className="purpose">
          <strong>Purpose:</strong> {purpose}
        </div>
      )}

      <div className="input-group">
        <div className="input-container">
          <span className="input-label">Sets Completed</span>
          <input
            type="number"
            value={values[0]}
            onChange={(e) => handleValueChange(0, e.target.value)}
            min="0"
          />
        </div>
        
        <div className="input-container">
          <span className="input-label">Reps Per Set</span>
          <input
            type="number"
            value={values[1]}
            onChange={(e) => handleValueChange(1, e.target.value)}
            min="0"
          />
        </div>
        
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChange}
            id={`complete-${exerciseName.replace(/\s+/g, '-').toLowerCase()}`}
          />
          <label 
            htmlFor={`complete-${exerciseName.replace(/\s+/g, '-').toLowerCase()}`}
            style={{ marginLeft: "0.5rem" }}
          >
            Mark as completed
          </label>
        </div>
      </div>
      
      <div className="notes-container">
        <div className="input-label">Notes</div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes about how this exercise felt..."
        />
      </div>
    </div>
  );
}

export default RecoveryExerciseCard;