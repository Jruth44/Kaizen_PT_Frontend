import React from 'react';

const KneeTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Knee-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify potential knee ligament or meniscus issues.
        Check the box if the test reproduces your pain.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Anterior Drawer Test
        </label>
        <small style={{ color: "#555" }}>
          Tests for ACL integrity. Knee bent at 90°, forward pressure on tibia.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.anterior_drawer}
            onChange={() => onSpecialTestChange("anterior_drawer")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>McMurray Test</label>
        <small style={{ color: "#555" }}>
          Tests for meniscus tears. Knee rotation with extension from flexed position.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.mcmurray}
            onChange={() => onSpecialTestChange("mcmurray")}
          />
          Positive Test Result
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Knee Range of Motion
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
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

export default KneeTests;