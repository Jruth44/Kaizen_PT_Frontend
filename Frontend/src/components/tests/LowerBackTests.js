import React from 'react';

const LowerBackTests = ({ specializedData, onSpecialTestChange, onAngleChange, handleSelectChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Lower Back Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify common lower back issues. Perform them gently and stop if you experience severe pain.
      </p>

      <div style={{ backgroundColor: "#fff3cd", padding: "0.75rem", borderRadius: "4px", marginBottom: "1rem", borderLeft: "4px solid #ffcc00" }}>
        <strong>Safety Warning:</strong> If you experience severe pain, numbness, tingling, or weakness in your legs, or changes in bowel/bladder function, stop these tests and seek immediate medical attention.
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Gentle Forward Bending Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand with feet shoulder-width apart.</li>
            <li>Place your hands on your thighs for support.</li>
            <li>Slowly bend forward as far as is comfortable, letting your hands slide down your legs.</li>
            <li>Pay close attention to where you feel pain or stiffness.</li>
            <li>Note whether the pain stays in your back or moves into your leg(s).</li>
            <li>Return to standing slowly, using your hands on your thighs for support.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.straight_leg_raise}
            onChange={() => onSpecialTestChange("straight_leg_raise")}
          />
          Pain With Forward Bending
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Seated Knee Extension Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit on a firm chair or edge of bed with good posture.</li>
            <li>Straighten one knee at a time (extend your lower leg).</li>
            <li>Note if this movement causes pain to radiate down your leg.</li>
            <li>Try the same movement with a slightly slouched posture.</li>
            <li>Compare if the slouched position increases leg symptoms.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.slump_test}
            onChange={() => onSpecialTestChange("slump_test")}
          />
          Pain Radiating Down Leg During Test
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Single Knee to Chest Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Lie on your back on a firm surface.</li>
            <li>Bend one knee and bring it toward your chest.</li>
            <li>Hold your knee with both hands and gently pull it closer to your chest.</li>
            <li>Note any pain in your back or if the movement is limited compared to the other side.</li>
            <li>Return to starting position and try with the other leg.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.femoral_nerve_tension}
            onChange={() => onSpecialTestChange("femoral_nerve_tension")}
          />
          Pain or Limited Movement with Knee to Chest
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Symptom Response to Movement</label>
        <small style={{ color: "#555" }}>
          When performing the above tests or during your daily activities, does your pain move toward the center of your back (centralization) or away from your back into your leg(s) (peripheralization)?
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
            <option value="peripheralization">Peripheralization - pain moves into leg(s) (often concerning)</option>
            <option value="no_change">No change in pain location</option>
          </select>
        </div>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Lower Back Range of Motion Self-Assessment
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
          <label>Side Bending (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.lateral_flexion}
            onChange={(e) => onAngleChange("lateral_flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#e0f2fe", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #0369a1" }}>
        <strong>Directional Preference Tip:</strong> Pay attention to which movements make your symptoms better versus worse. Many back problems respond well to specific directional exercises based on your unique presentation.
      </div>
    </fieldset>
  );
};

export default LowerBackTests;