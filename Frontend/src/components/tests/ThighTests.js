import React from 'react';

const ThighTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Thigh (Quadriceps) Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify quadriceps strains, tears, or other anterior thigh conditions.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Seated Knee Extension Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit on a chair with your knees bent at 90 degrees.</li>
            <li>Slowly straighten your affected knee until your leg is straight out in front of you.</li>
            <li>Hold this position for 5 seconds if possible.</li>
            <li>Slowly lower your leg back to the starting position.</li>
            <li>Note any pain, weakness, or inability to fully straighten your knee.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.resisted_knee_extension}
            onChange={() => onSpecialTestChange("resisted_knee_extension")}
          />
          Pain or Weakness with Knee Extension
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Thigh Palpation Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit or lie in a comfortable position with your thigh muscles relaxed.</li>
            <li>Using your fingertips, gently press along the front and sides of your thigh.</li>
            <li>Start near the hip and work your way down to just above the knee.</li>
            <li>Note any specific areas of tenderness, swelling, or muscle knots.</li>
            <li>Compare the sensation to your unaffected thigh.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.thigh_palpation}
            onChange={() => onSpecialTestChange("thigh_palpation")}
          />
          Tender Areas or Abnormalities Found
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Heel-to-Buttock Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand near a wall or chair for balance support.</li>
            <li>Bend your affected knee and bring your heel toward your buttock.</li>
            <li>If possible, hold your ankle to assist with this movement.</li>
            <li>Note any pain in the front of your thigh and how close your heel can get to your buttock.</li>
            <li>Compare with your unaffected leg.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.elys_test}
            onChange={() => onSpecialTestChange("elys_test")}
          />
          Pain or Limited Movement with Heel to Buttock
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Thigh Range of Motion Self-Assessment
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Knee Bending (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.knee_flexion}
            onChange={(e) => onAngleChange("knee_flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
        <div>
          <label>Hip Flexion (%):</label>
          <input
            type="number"
            value={specializedData.joint_angles.hip_flexion}
            onChange={(e) => onAngleChange("hip_flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
      </div>

      <div style={{ backgroundColor: "#d1fae5", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #065f46" }}>
        <strong>Recovery Tip:</strong> For quad strains, gentle stretching and progressive strengthening exercises are important for recovery. Start with isometric (static) contractions before progressing to dynamic movements.
      </div>
    </fieldset>
  );
};

export default ThighTests;