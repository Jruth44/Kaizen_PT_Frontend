import React from 'react';

const KneeTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Knee Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential knee issues. Note that these are simplified versions of clinical tests and should not replace professional evaluation.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Knee Pain with Squatting Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand with feet shoulder-width apart, holding onto a stable surface for balance if needed.</li>
            <li>Slowly bend your knees to perform a partial squat (only go as deep as comfortable).</li>
            <li>Pay attention to any pain, clicking, or grinding in the knee joint.</li>
            <li>Return to standing position slowly.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.anterior_drawer}
            onChange={() => onSpecialTestChange("anterior_drawer")}
          />
          Experienced Pain or Clicking During Squatting
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Single Leg Balance Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand near a wall or stable surface (in case you need support).</li>
            <li>Lift one foot off the ground and balance on the affected leg.</li>
            <li>Try to maintain this position for 30 seconds.</li>
            <li>Note any pain, instability, or difficulty maintaining balance.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.mcmurray}
            onChange={() => onSpecialTestChange("mcmurray")}
          />
          Experienced Pain or Instability During Single Leg Balance
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Knee Range of Motion Self-Assessment
      </label>
      <small style={{ color: "#555" }}>
        Sitting on a chair or edge of a bed, measure how far you can bend and straighten your knee.
        Normal knee flexion is around 135° and full extension is 0° (completely straight). 
        Use a smartphone app (search for "goniometer app") or estimate visually.
      </small>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        <div>
          <label>Knee Bending (Flexion in °):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Knee Straightening (Extension in °):</label>
          <input
            type="number"
            value={specializedData.joint_angles.extension}
            onChange={(e) => onAngleChange("extension", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.2rem" }}>
            (0° is fully straight, use negative values if you can't fully straighten)
          </small>
        </div>
      </div>
    </fieldset>
  );
};

export default KneeTests;