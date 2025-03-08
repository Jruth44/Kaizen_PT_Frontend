import React from 'react';

const HamstringTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Hamstring Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify hamstring strains, flexibility issues, or other hamstring-related conditions.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Seated Hamstring Stretch Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit on a firm surface with your affected leg straight out in front of you.</li>
            <li>Keep your knee straight and your foot flexed (toes pointing up).</li>
            <li>Gently lean forward, reaching toward your toes until you feel a stretch.</li>
            <li>Note where you feel the stretch or discomfort (back of thigh, knee, calf).</li>
            <li>Observe how far you can reach compared to your unaffected side.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.active_knee_extension}
            onChange={() => onSpecialTestChange("active_knee_extension")}
          />
          Limited Flexibility or Pain with Hamstring Stretch
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Prone Knee Bend Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Lie face down on a flat surface.</li>
            <li>Keeping your thigh flat on the surface, slowly bend your knee.</li>
            <li>Try to bring your heel toward your buttocks.</li>
            <li>Note any pain in the back of your thigh as you bend your knee.</li>
            <li>Compare how far you can bend your knee with your unaffected leg.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.prone_resisted_knee_flexion}
            onChange={() => onSpecialTestChange("prone_resisted_knee_flexion")}
          />
          Pain or Limited Knee Bending When Prone
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Hamstring Palpation Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit or lie down with your leg relaxed.</li>
            <li>Gently press along the back of your thigh, from just below your buttocks to just above your knee.</li>
            <li>Note any specific spots that are tender or painful.</li>
            <li>Compare the feeling to your unaffected leg.</li>
            <li>Check for any lumps, gaps, or differences in muscle tone between sides.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.hamstring_palpation}
            onChange={() => onSpecialTestChange("hamstring_palpation")}
          />
          Tender Spots or Abnormalities in Hamstring
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Hamstring Flexibility Self-Assessment
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Straight Leg Raise (degrees):</label>
          <input
            type="number"
            value={specializedData.joint_angles.straight_leg_raise}
            onChange={(e) => onAngleChange("straight_leg_raise", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (Estimate angle from hip to raised leg)
          </small>
        </div>
        <div>
          <label>Knee Bend Angle When Sitting (degrees):</label>
          <input
            type="number"
            value={specializedData.joint_angles.popliteal_angle}
            onChange={(e) => onAngleChange("popliteal_angle", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (Angle between thigh and lower leg)
          </small>
        </div>
      </div>

      <div style={{ backgroundColor: "#e0f2fe", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #0369a1" }}>
        <strong>Tip:</strong> For hamstring strains, remember "PRICE" treatment: Protect, Rest, Ice, Compression, and Elevation in the acute phase. Gradual return to stretching and strengthening is important for recovery, but don't push through sharp pain.
      </div>
    </fieldset>
  );
};

export default HamstringTests;