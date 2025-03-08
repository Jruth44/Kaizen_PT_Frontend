import React from 'react';

const NeckTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Neck Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential neck issues. Perform them gently and stop if you experience severe pain.
      </p>

      <div style={{ backgroundColor: "#fff3cd", padding: "0.75rem", borderRadius: "4px", marginBottom: "1rem", borderLeft: "4px solid #ffcc00" }}>
        <strong>Safety Note:</strong> If you're experiencing severe neck pain, dizziness, numbness, or weakness in your arms, please seek professional medical attention before attempting these tests.
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Gentle Active Range of Motion Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit in a comfortable, upright position.</li>
            <li>Slowly and gently turn your head to the right as far as comfortable.</li>
            <li>Return to center, then turn your head to the left.</li>
            <li>Return to center, then tilt your head toward each shoulder.</li>
            <li>Finally, gently look up toward the ceiling, then down toward the floor.</li>
            <li>Note any movements that cause pain, and if the pain radiates into your arms.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.spurlings}
            onChange={() => onSpecialTestChange("spurlings")}
          />
          Pain with neck movement (particularly if it radiates to arm)
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Scalene Stretch Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit in a comfortable, upright position.</li>
            <li>Gently tilt your head away from the painful side (ear toward shoulder).</li>
            <li>While holding this position, gently look toward the ceiling.</li>
            <li>Hold for 5-10 seconds if comfortable.</li>
            <li>Note if this reproduces your typical pain or sends pain/tingling down your arm.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.upper_limb_tension}
            onChange={() => onSpecialTestChange("upper_limb_tension")}
          />
          Pain or tingling in arm during the stretch
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Neck Range of Motion Self-Assessment
      </label>
      <small style={{ color: "#555" }}>
        Estimate how far you can move in different directions compared to what feels normal for you.
        Enter approximate percentage of normal movement (100% = normal, 50% = half of normal, etc.)
      </small>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Looking Down/Up (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Looking Left/Right (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.rotation}
            onChange={(e) => onAngleChange("rotation", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Tilting Ear to Shoulder (%):</label>
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

export default NeckTests;