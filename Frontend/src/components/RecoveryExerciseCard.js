// RecoveryExerciseCard.js
import React, { useState } from "react";

function RecoveryExerciseCard({ bodyPart, exerciseName, instructions, initialValues = [0, 0], onLogChange }) {
  const [values, setValues] = useState(initialValues);
  const [logCheck, setLogCheck] = useState(false);

  const handleValueChange = (idx, val) => {
    const updated = [...values];
    updated[idx] = val;
    setValues(updated);
  };

  return (
    <div className="exercise-card">
      <div style={{ fontSize: "0.8rem", color: "#ff4646", textTransform: "uppercase" }}>{bodyPart}</div>
      <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{exerciseName}</div>
      <div style={{ fontSize: "0.9rem", color: "#666", margin: "0.5rem 0" }}>{instructions}</div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <div>
          <div style={{ fontSize: "0.8rem", color: "#999" }}>Value 1</div>
          <input
            type="number"
            value={values[0]}
            onChange={(e) => handleValueChange(0, e.target.value)}
            style={{ width: "60px" }}
          />
        </div>
        <div>
          <div style={{ fontSize: "0.8rem", color: "#999" }}>Value 2</div>
          <input
            type="number"
            value={values[1]}
            onChange={(e) => handleValueChange(1, e.target.value)}
            style={{ width: "60px" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <label style={{ fontSize: "0.8rem", color: "#999", marginBottom: "4px" }}>Log</label>
          <input
            type="checkbox"
            checked={logCheck}
            onChange={(e) => {
              setLogCheck(e.target.checked);
              onLogChange && onLogChange(e.target.checked);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RecoveryExerciseCard;
