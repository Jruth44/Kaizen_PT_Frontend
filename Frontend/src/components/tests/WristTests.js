import React from 'react';

const WristTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Wrist Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential wrist and hand issues. Perform them gently and stop if you experience severe pain.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Modified Phalen's Test (Wrist Flexion Test)
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Place the backs of your hands together with your fingers pointing down.</li>
            <li>Let your wrists fall into flexion (bend forward).</li>
            <li>Hold this position for 60 seconds.</li>
            <li>Note if you experience numbness or tingling in your fingers, particularly in the thumb, index, middle, or half of the ring finger.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.phalens}
            onChange={() => onSpecialTestChange("phalens")}
          />
          Experienced Numbness/Tingling During Test
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Thumb to Pinky Side Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Make a fist with your thumb tucked inside your fingers.</li>
            <li>Gently bend your wrist toward your pinky side.</li>
            <li>Note any pain at the base of your thumb or along the thumb side of your wrist.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.finkelstein}
            onChange={() => onSpecialTestChange("finkelstein")}
          />
          Pain at Thumb Side of Wrist
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Wrist Range of Motion Self-Assessment
      </label>
      <small style={{ color: "#555" }}>
        Compare movement in your affected wrist to your unaffected wrist. Estimate the percentage of normal movement.
      </small>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Wrist Bending Down (Flexion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Wrist Bending Up (Extension %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.extension}
            onChange={(e) => onAngleChange("extension", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#e0f2fe", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #0369a1" }}>
        <strong>Tip:</strong> For wrist conditions, it's often helpful to track grip strength as well. You can use a household object like a rolled-up washcloth and squeeze it, comparing the strength between your hands.
      </div>
    </fieldset>
  );
};

export default WristTests;