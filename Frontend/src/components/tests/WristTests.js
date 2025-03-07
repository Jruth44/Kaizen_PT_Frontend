import React from 'react';

const WristTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Wrist-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify wrist conditions such as carpal tunnel syndrome, ligament injuries, or tendonitis.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Phalen's Test
        </label>
        <small style={{ color: "#555" }}>
          Tests for carpal tunnel syndrome. Flex both wrists and press the backs of hands together for 1 minute.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.phalens}
            onChange={() => onSpecialTestChange("phalens")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Finkelstein Test</label>
        <small style={{ color: "#555" }}>
          Tests for De Quervain's tenosynovitis. Make a fist with thumb inside and bend wrist toward pinky side.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.finkelstein}
            onChange={() => onSpecialTestChange("finkelstein")}
          />
          Positive Test Result
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Wrist Range of Motion
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
      </div>
    </fieldset>
  );
};

export default WristTests;