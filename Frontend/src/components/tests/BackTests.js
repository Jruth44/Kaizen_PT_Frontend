import React from 'react';

const BackTests = ({ specializedData, onSpecialTestChange, onAngleChange, handleSelectChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Back-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify spinal conditions, disc issues, or nerve impingement.
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
    </fieldset>
  );
};

export default BackTests;