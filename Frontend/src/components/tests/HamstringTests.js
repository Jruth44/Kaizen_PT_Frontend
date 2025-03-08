import React from 'react';

const HamstringTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Hamstring-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify hamstring strains, tears, or other hamstring-related conditions.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Active Knee Extension Test
        </label>
        <small style={{ color: "#555" }}>
          Tests for hamstring flexibility. Lying on back with hip at 90°, attempt to fully extend knee.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.active_knee_extension}
            onChange={() => onSpecialTestChange("active_knee_extension")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Prone Resisted Knee Flexion Test</label>
        <small style={{ color: "#555" }}>
          Tests for hamstring strain. Lying on stomach, bend knee against resistance.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.prone_resisted_knee_flexion}
            onChange={() => onSpecialTestChange("prone_resisted_knee_flexion")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Hamstring Palpation</label>
        <small style={{ color: "#555" }}>
          Checking for tenderness, nodules or gaps in muscle tissue.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.hamstring_palpation}
            onChange={() => onSpecialTestChange("hamstring_palpation")}
          />
          Positive Test Result
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Hamstring Range of Motion
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Straight Leg Raise (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.straight_leg_raise}
            onChange={(e) => onAngleChange("straight_leg_raise", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Popliteal Angle (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.popliteal_angle}
            onChange={(e) => onAngleChange("popliteal_angle", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default HamstringTests;