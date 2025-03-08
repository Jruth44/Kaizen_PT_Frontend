import React from 'react';

const FootTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Foot Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify common foot conditions such as plantar fasciitis, Morton's neuroma, or arch problems.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Plantar Fascia Stretch Test
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit on a chair and cross your affected foot over your other leg.</li>
            <li>Grasp your toes and gently pull them back toward your shin.</li>
            <li>Use your other hand to feel the arch of your foot (the plantar fascia).</li>
            <li>The plantar fascia should feel tight when you pull your toes back.</li>
            <li>Note any pain in your heel or along the arch of your foot.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.windlass}
            onChange={() => onSpecialTestChange("windlass")}
          />
          Pain in Heel or Arch with Toe Extension
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Forefoot Squeeze Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>With your hand, squeeze across the width of your forefoot (the ball of your foot).</li>
            <li>Apply gentle pressure between the metatarsal bones (the long bones that connect to your toes).</li>
            <li>Note any sharp or shooting pain, particularly if it radiates into your toes.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.mortons}
            onChange={() => onSpecialTestChange("mortons")}
          />
          Sharp Pain with Forefoot Compression
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Wet Footprint Test</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Fill a shallow pan with water or use a wet towel.</li>
            <li>Step onto the wet surface, then step onto a piece of paper or dry surface where your footprint will show.</li>
            <li>Observe the shape of your footprint.</li>
            <li>A normal arch shows a curve along the inside of the foot.</li>
            <li>A flat arch shows little to no curve (most of the foot contacts the ground).</li>
            <li>A high arch shows a very pronounced curve (little contact between the ball and heel).</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.navicular_drop}
            onChange={() => onSpecialTestChange("navicular_drop")}
          />
          Flat Foot Arch Observed
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Foot Range of Motion Self-Assessment
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Foot Inward Tilt (Inversion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.inversion}
            onChange={(e) => onAngleChange("inversion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
        <div>
          <label>Foot Outward Tilt (Eversion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.eversion}
            onChange={(e) => onAngleChange("eversion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
      </div>

      <div style={{ backgroundColor: "#fff3cd", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #ffcc00" }}>
        <strong>Morning Pain:</strong> For plantar fasciitis, note if your first steps in the morning are especially painful. This classic symptom occurs because the plantar fascia tightens overnight and then is suddenly stretched when you stand.
      </div>
    </fieldset>
  );
};

export default FootTests;