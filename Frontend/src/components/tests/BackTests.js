import React from 'react';

const BackTests = ({ specializedData, onSpecialTestChange, onAngleChange, handleSelectChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Back Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential back issues. Perform them gently and stop if you experience severe pain.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Forward Bending Test
        </label>
        <small style={{ color: "#555" }}>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand with feet shoulder-width apart.</li>
            <li>Slowly bend forward, reaching toward your toes (only go as far as comfortable).</li>
            <li>Note if and where you feel pain or restriction.</li>
            <li>Return to standing position slowly.</li>
            <li>Pay attention to whether the movement makes your symptoms better, worse, or unchanged.</li>
          </ol>
          Pain during forward bending may indicate disc issues or muscle strain. This also helps assess whether your symptoms centralize (move toward spine) or peripheralize (move away from spine).
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.straight_leg_raise}
            onChange={() => onSpecialTestChange("straight_leg_raise")}
          />
          Experienced Pain During Forward Bending
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Seated Forward Lean Test</label>
        <small style={{ color: "#555" }}>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit on a firm chair with feet flat on the floor.</li>
            <li>Slowly bend forward, reaching toward your feet.</li>
            <li>Note any pain in your back or legs.</li>
            <li>Return to upright sitting position.</li>
          </ol>
          Pain radiating from your back into your leg during this test may indicate potential nerve involvement.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.slump_test}
            onChange={() => onSpecialTestChange("slump_test")}
          />
          Experienced Pain Radiating to Leg
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Symptom Response to Movement</label>
        <small style={{ color: "#555" }}>
          During the above tests or general movements throughout the day, does your pain move toward the center of your back (centralization) or away toward extremities (peripheralization)?
        </small>
        <br />
        <div style={{ marginTop: "0.5rem" }}>
          <select
            value={specializedData.special_tests.centralization || ""}
            onChange={(e) => handleSelectChange(e, "centralization")}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }}
          >
            <option value="">Select response</option>
            <option value="centralization">Centralization (pain moves toward spine - often a good sign)</option>
            <option value="peripheralization">Peripheralization (pain moves toward limbs - often concerning)</option>
            <option value="no_change">No change in pain location</option>
          </select>
        </div>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <div style={{ backgroundColor: "#fff3cd", padding: "0.75rem", borderRadius: "4px", marginBottom: "1rem", borderLeft: "4px solid #ffcc00" }}>
        <strong>Safety Note:</strong> These tests are simplified versions of clinical tests. Stop immediately if you experience severe pain, and consult a healthcare professional. These tests should not replace professional evaluation.
      </div>

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Back Movement Self-Assessment
      </label>
      <small style={{ color: "#555" }}>
        Estimate how far you can move in different directions compared to what feels normal for you.
        Enter approximate percentage of normal movement (100% = normal, 50% = half of normal, etc.)
      </small>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Forward Bending (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Backward Bending (%):</label>
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

export default BackTests;