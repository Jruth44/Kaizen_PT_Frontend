import React from 'react';

const ShoulderTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Shoulder Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential shoulder issues. Follow each instruction carefully and check the box if you experience pain.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Painful Arc Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand in front of a mirror with your arm relaxed at your side.</li>
            <li>Slowly raise your arm out to the side, palm facing down.</li>
            <li>Continue raising your arm in a smooth motion as high as possible.</li>
            <li>Lower your arm back down in the same path.</li>
            <li>Note if you experience pain between approximately 60-120 degrees of elevation (midway through the movement).</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.hawkins_kennedy}
            onChange={() => onSpecialTestChange("hawkins_kennedy")}
          />
          Experienced Pain During Test
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Active Shoulder Flexion Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand with your arm relaxed at your side.</li>
            <li>Slowly raise your arm forward and upward as high as possible.</li>
            <li>Note if you experience pain, particularly at the top of the movement.</li>
            <li>Lower your arm back down slowly.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.neer}
            onChange={() => onSpecialTestChange("neer")}
          />
          Experienced Pain During Test
        </label>
      </div>

      <div>
        <label style={{ display: "block", fontWeight: "bold" }}>Resisted External Rotation Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand with your elbow bent at 90 degrees and tucked close to your side.</li>
            <li>Position your forearm across your abdomen.</li>
            <li>Try to rotate your forearm outward against resistance (you can use a doorframe or sturdy furniture).</li>
            <li>Alternatively, use your other hand to provide resistance.</li>
            <li>Note if you experience pain with this resistance.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.empty_can}
            onChange={() => onSpecialTestChange("empty_can")}
          />
          Experienced Pain During Test
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Shoulder Range of Motion Self-Assessment
      </label>
      <small style={{ color: "#555" }}>
        Using a smartphone app (search for "goniometer app") or simply observing in a mirror, estimate your range of motion in degrees.
        Normal shoulder flexion is around 180° and abduction around 180°.
      </small>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        <div>
          <label>Forward Elevation (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Side Elevation (°):</label>
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