import React from 'react';

const CalfTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Calf Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify potential calf muscle strains, tears, or Achilles tendon issues.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Heel Raise Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Stand with your feet flat on the ground, near a wall or chair for balance if needed.</li>
            <li>Try to rise up onto your toes, lifting both heels off the ground.</li>
            <li>Now try the same movement on just the affected leg.</li>
            <li>Attempt to repeat the single-leg heel raise 10 times.</li>
            <li>Note any weakness, pain, or inability to perform the heel raise on the affected side.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.thompson}
            onChange={() => onSpecialTestChange("thompson")}
          />
          Difficulty or Pain with Heel Raises
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Calf Squeeze Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit with your legs extended and feet relaxed.</li>
            <li>Gently squeeze your calf muscle in different areas, comparing the sensation to your unaffected leg.</li>
            <li>Note any areas of tenderness, lumps, or gaps in the muscle.</li>
            <li>Pay special attention to pain along the Achilles tendon at the back of your ankle.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.calf_palpation}
            onChange={() => onSpecialTestChange("calf_palpation")}
          />
          Tenderness or Abnormal Sensation in Calf
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Resisted Ankle Plantar Flexion</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit on a chair with your feet flat on the floor.</li>
            <li>Use your opposite foot to provide resistance against the ball of your affected foot.</li>
            <li>Push down with your affected foot against this resistance.</li>
            <li>Note any pain in your calf muscle or Achilles tendon during this resistance.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.resisted_plantarflexion}
            onChange={() => onSpecialTestChange("resisted_plantarflexion")}
          />
          Pain with Resisted Foot Pushing
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Ankle Range of Motion Self-Assessment
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Point Toes Up (Dorsiflexion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.dorsiflexion}
            onChange={(e) => onAngleChange("dorsiflexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
        <div>
          <label>Point Toes Down (Plantarflexion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.plantarflexion}
            onChange={(e) => onAngleChange("plantarflexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
      </div>

      <div style={{ backgroundColor: "#e0f2fe", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #0369a1" }}>
        <strong>Warning:</strong> If you suspect a complete Achilles tendon rupture (sudden snap sensation, inability to stand on toes, significant swelling), seek immediate medical attention rather than continuing with self-assessment.
      </div>
    </fieldset>
  );
};

export default CalfTests;