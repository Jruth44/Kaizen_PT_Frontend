import React from 'react';

const LowerBackTests = ({ specializedData, onSpecialTestChange, onAngleChange, handleSelectChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Lower Back-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify lumbar spine conditions, disc issues, or nerve impingement in the lower back.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Straight Leg Raise
        </label>
        <small style={{ color: "#555" }}>
          Tests for disc herniation and sciatic nerve irritation. Lie on back while examiner lifts straightened leg.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.straight_leg_raise}
            onChange={() => onSpecialTestChange("straight_leg_raise")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Slump Test</label>
        <small style={{ color: "#555" }}>
          Tests for nerve root irritation. Sitting with knees and hips flexed, neck flexed, then extending knee.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.slump_test}
            onChange={() => onSpecialTestChange("slump_test")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Femoral Nerve Tension Test</label>
        <small style={{ color: "#555" }}>
          Tests for femoral nerve irritation. Lying on stomach, flex knee while examiner extends hip.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.femoral_nerve_tension}
            onChange={() => onSpecialTestChange("femoral_nerve_tension")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Centralization/Peripheralization</label>
        <small style={{ color: "#555" }}>
          During movement testing, does your pain move toward the center of your back (centralization) or away toward extremities (peripheralization)?
        </small>
        <br />
        <div style={{ marginTop: "0.5rem" }}>
          <select
            value={specializedData.special_tests.centralization || ""}
            onChange={(e) => handleSelectChange(e, "centralization")}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }}
          >
            <option value="">Select response</option>
            <option value="centralization">Centralization (improved)</option>
            <option value="peripheralization">Peripheralization (worse)</option>
            <option value="no_change">No change</option>
          </select>
        </div>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Lower Back Range of Motion
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Lumbar Flexion (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Lumbar Extension (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.extension}
            onChange={(e) => onAngleChange("extension", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Lateral Flexion (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.lateral_flexion}
            onChange={(e) => onAngleChange("lateral_flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default LowerBackTests;