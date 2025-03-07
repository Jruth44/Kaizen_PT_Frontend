import React from 'react';

const ElbowTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Elbow-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify tennis elbow, golfer's elbow, or other elbow conditions.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Cozen's Test (Tennis Elbow)
        </label>
        <small style={{ color: "#555" }}>
          Tests for lateral epicondylitis. Make a fist and extend wrist while examiner resists.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.cozens}
            onChange={() => onSpecialTestChange("cozens")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Golfer's Elbow Test</label>
        <small style={{ color: "#555" }}>
          Tests for medial epicondylitis. Wrist flexion against resistance.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.golfers_elbow}
            onChange={() => onSpecialTestChange("golfers_elbow")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Valgus Stress Test</label>
        <small style={{ color: "#555" }}>
          Tests for medial collateral ligament injury. Apply outward pressure to elbow.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.valgus_stress}
            onChange={() => onSpecialTestChange("valgus_stress")}
          />
          Positive Test Result
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Elbow Range of Motion
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Flexion (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Extension (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.extension}
            onChange={(e) => onAngleChange("extension", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Supination (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.supination}
            onChange={(e) => onAngleChange("supination", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Pronation (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.pronation}
            onChange={(e) => onAngleChange("pronation", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default ElbowTests;