import React from 'react';

const ShoulderTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Shoulder-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify shoulder impingement or rotator cuff issues. 
        Check the box if the test reproduces your pain.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Hawkins-Kennedy Test
        </label>
        <small style={{ color: "#555" }}>
          Instructions: Flex the shoulder and elbow to 90°, then rotate your arm
          internally. A sharp pain in the front of your shoulder often indicates a 
          "positive" test.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.hawkins_kennedy}
            onChange={() => onSpecialTestChange("hawkins_kennedy")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Neer Test</label>
        <small style={{ color: "#555" }}>
          Instructions: Fully raise (forward flex) your arm. If it causes pain near the top 
          of the shoulder, this could indicate impingement.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.neer}
            onChange={() => onSpecialTestChange("neer")}
          />
          Positive Test Result
        </label>
      </div>

      <div>
        <label style={{ display: "block", fontWeight: "bold" }}>Empty Can Test</label>
        <small style={{ color: "#555" }}>
          Instructions: Lift your arms straight forward at shoulder height, thumbs pointing 
          down (like emptying a can). Push up against resistance. Pain or weakness may 
          indicate rotator cuff strain.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.empty_can}
            onChange={() => onSpecialTestChange("empty_can")}
          />
          Positive Test Result
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Shoulder Range of Motion
      </label>
      <small style={{ color: "#555" }}>
        If you've measured or estimated your range (in degrees), enter it below. 
        Otherwise, feel free to leave these blank.
      </small>
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
          <label>Abduction (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.abduction}
            onChange={(e) => onAngleChange("abduction", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default ShoulderTests;