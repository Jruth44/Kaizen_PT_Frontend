import React from 'react';

const HipTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Hip Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential hip issues. Perform them gently and stop if you experience severe pain.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Hip Flexion Pain Test
        </label>
        <small style={{ color: "#555" }}>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Lie on your back on a firm surface.</li>
            <li>Slowly bring your knee toward your chest, using your hands to assist if needed.</li>
            <li>Note any pain in the front of the hip or groin area.</li>
            <li>Next, while holding your knee to your chest, rotate your lower leg inward (internal rotation).</li>
            <li>Note if this rotation increases your pain.</li>
          </ol>
          Pain with hip flexion and internal rotation may indicate hip joint issues such as impingement or labral tears.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.fadir}
            onChange={() => onSpecialTestChange("fadir")}
          />
          Pain with Hip Flexion and Internal Rotation
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Single Leg Stance Test</label>
        <small style={{ color: "#555" }}>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand near a wall or stable surface for support if needed.</li>
            <li>Stand on your affected leg for 30 seconds.</li>
            <li>Observe in a mirror if possible.</li>
            <li>Check if your pelvis drops on the opposite side (the non-standing leg side).</li>
            <li>Note any pain or difficulty maintaining balance.</li>
          </ol>
          If your pelvis drops on the non-standing side, this may indicate hip abductor weakness, which is commonly seen in various hip conditions.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.trendelenburg}
            onChange={() => onSpecialTestChange("trendelenburg")}
          />
          Pelvis Drops or Pain During Single Leg Stance
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Hip Range of Motion Self-Assessment
      </label>
      <small style={{ color: "#555" }}>
        Compare movement in your affected hip to your unaffected hip. Estimate the percentage of normal movement.
      </small>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Knee to Chest (Flexion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Rotation Inward (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.internal_rotation}
            onChange={(e) => onAngleChange("internal_rotation", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Rotation Outward (%):</label>
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