import React from 'react';

const AnkleTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Ankle Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential ankle issues. Perform them gently and stop if you experience severe pain.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Single Leg Balance Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand near a wall or stable surface for support if needed.</li>
            <li>Lift the uninjured foot off the ground and try to balance on the affected ankle.</li>
            <li>Try to maintain this position for 30 seconds.</li>
            <li>Note any pain, instability, or difficulty maintaining balance.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.ankle_anterior_drawer}
            onChange={() => onSpecialTestChange("ankle_anterior_drawer")}
          />
          Experienced Instability or Pain During Balance Test
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Heel Raise Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand flat on both feet, using a wall or chair for balance if needed.</li>
            <li>Lift both heels off the ground, rising onto your toes.</li>
            <li>If that's comfortable, try with just the affected foot.</li>
            <li>Attempt to repeat the heel raise 10 times.</li>
            <li>Note any pain, weakness, or inability to lift the heel.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.thompson}
            onChange={() => onSpecialTestChange("thompson")}
          />
          Pain or Weakness with Heel Raise
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Ankle Swelling Check</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Compare your affected ankle with your unaffected ankle.</li>
            <li>Look for differences in size, particularly around the ankle bones.</li>
            <li>Press gently with your finger around the ankle and note if it leaves an indentation (pitting edema).</li>
            <li>Check if there's tenderness when you press around the ankle bones.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.talar_tilt}
            onChange={() => onSpecialTestChange("talar_tilt")}
          />
          Noticeable Swelling or Tenderness
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Ankle Range of Motion Self-Assessment
      </label>
      <small style={{ color: "#555" }}>
        Compare the movement in your affected ankle to your unaffected ankle. Try these movements while seated with your leg extended.
      </small>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Point Toes Up (Dorsiflexion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.dorsiflexion}
            onChange={(e) => onAngleChange("dorsiflexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Point Toes Down (Plantarflexion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.plantarflexion}
            onChange={(e) => onAngleChange("plantarflexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default AnkleTests;