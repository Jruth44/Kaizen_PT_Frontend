import React from 'react';

const HipTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Hip-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify hip-related conditions such as labral tears, impingement, or bursitis.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          FADIR Test (Flexion, Adduction, Internal Rotation)
        </label>
        <small style={{ color: "#555" }}>
          Tests for hip impingement or labral tears. Pain with flexed hip being adducted and internally rotated.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.fadir}
            onChange={() => onSpecialTestChange("fadir")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Trendelenburg Test</label>
        <small style={{ color: "#555" }}>
          Tests for hip abductor weakness. Standing on one leg, if the pelvis drops on the non-stance side.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.trendelenburg}
            onChange={() => onSpecialTestChange("trendelenburg")}
          />
          Positive Test Result
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Hip Range of Motion
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
          <label>Internal Rotation (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.internal_rotation}
            onChange={(e) => onAngleChange("internal_rotation", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>External Rotation (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.external_rotation}
            onChange={(e) => onAngleChange("external_rotation", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default HipTests;