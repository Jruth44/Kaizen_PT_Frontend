import React from 'react';

const UpperBackTests = ({ specializedData, onSpecialTestChange, onAngleChange, handleSelectChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Upper Back Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify common upper back (thoracic spine) issues and postural problems.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Seated Rotation Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit on a chair with good posture and arms crossed over your chest.</li>
            <li>Keeping your hips facing forward, rotate your upper body to the right as far as comfortable.</li>
            <li>Return to center, then rotate to the left.</li>
            <li>Pay attention to any pain, stiffness, or clicking sensations.</li>
            <li>Note if rotation is more limited to one side than the other.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.thoracic_rotation}
            onChange={() => onSpecialTestChange("thoracic_rotation")}
          />
          Limited or Painful Rotation
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Wall Angel Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand with your back against a wall, feet about 6 inches from the wall.</li>
            <li>Press your lower back, upper back, and head against the wall.</li>
            <li>Bring your arms up against the wall in a "W" position (elbows bent at 90 degrees).</li>
            <li>Try to slide your arms up the wall into a "Y" position while keeping your back and arms in contact with the wall.</li>
            <li>Note any difficulty keeping your back or arms against the wall during the movement.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.scapular_dyskinesia}
            onChange={() => onSpecialTestChange("scapular_dyskinesia")}
          />
          Difficulty with Wall Angel Test
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Symptom Response to Movement</label>
        <small style={{ color: "#555" }}>
          During the above tests or with movements throughout the day, does your pain move toward the center of your back (centralization) or spread outward toward your shoulders/arms (peripheralization)?
        </small>
        <br />
        <div style={{ marginTop: "0.5rem" }}>
          <select
            value={specializedData.special_tests.centralization || ""}
            onChange={(e) => handleSelectChange(e, "centralization")}
            style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc", width: "100%" }}
          >
            <option value="">Select response</option>
            <option value="centralization">Centralization - pain moves toward spine (often a good sign)</option>
            <option value="peripheralization">Peripheralization - pain moves outward (often concerning)</option>
            <option value="no_change">No change in pain location</option>
          </select>
        </div>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Upper Back Range of Motion Self-Assessment
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
        <div>
          <label>Rotation (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.rotation}
            onChange={(e) => onAngleChange("rotation", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Posture Self-Assessment
        </label>
          Take a photo of your side profile or ask someone to observe you from the side when standing naturally. Check for:
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Forward head position (ear in front of shoulder)</li>
            <li>Rounded shoulders (shoulders rolled forward)</li>
            <li>Increased thoracic curve (hunchback appearance)</li>
          </ul>
      </div>

      <div style={{ backgroundColor: "#e0f2fe", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #0369a1" }}>
        <strong>Tip:</strong> Upper back pain often responds well to mobility exercises and postural corrections. Remember to take regular breaks from prolonged sitting and practice gentle mobility exercises throughout the day.
      </div>
    </fieldset>
  );
};

export default UpperBackTests;