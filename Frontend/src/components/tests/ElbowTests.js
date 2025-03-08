import React from 'react';

const ElbowTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Elbow Self-Assessment Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These self-assessment tests can help identify common elbow conditions such as tennis elbow, golfer's elbow, or other elbow issues.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Tennis Elbow Test (Lateral Epicondylitis Test)
        </label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit with your arm resting on a table, palm down.</li>
            <li>Make a fist with your hand.</li>
            <li>Extend your wrist (bend it upward).</li>
            <li>Use your other hand to provide resistance against the back of your fist.</li>
            <li>Try to maintain the upward wrist position against this resistance.</li>
            <li>Note any pain on the outside (thumb side) of your elbow.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.cozens}
            onChange={() => onSpecialTestChange("cozens")}
          />
          Pain on Outside of Elbow
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Golfer's Elbow Test (Medial Epicondylitis Test)</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Sit with your arm resting on a table, palm up.</li>
            <li>Make a fist with your hand.</li>
            <li>Flex your wrist (bend it toward you).</li>
            <li>Use your other hand to provide resistance against your fist.</li>
            <li>Try to maintain the flexed wrist position against this resistance.</li>
            <li>Note any pain on the inside (pinky side) of your elbow.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.golfers_elbow}
            onChange={() => onSpecialTestChange("golfers_elbow")}
          />
          Pain on Inside of Elbow
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Grip Strength Comparison</label>
          <ol style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Find an object you can squeeze, like a rolled-up washcloth or a soft ball.</li>
            <li>Squeeze the object firmly with your unaffected hand to feel your normal grip strength.</li>
            <li>Now squeeze with your affected hand.</li>
            <li>Compare the strength between hands and note any pain during gripping.</li>
          </ol>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.valgus_stress}
            onChange={() => onSpecialTestChange("valgus_stress")}
          />
          Reduced Grip Strength or Pain with Gripping
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Elbow Range of Motion Self-Assessment
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Elbow Bending (Flexion %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.flexion}
            onChange={(e) => onAngleChange("flexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
        <div>
          <label>Elbow Straightening (Extension %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.extension}
            onChange={(e) => onAngleChange("extension", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
          <small style={{ display: "block", color: "#555", marginTop: "0.3rem" }}>
            (% compared to unaffected side)
          </small>
        </div>
        <div>
          <label>Forearm Rotation Palm Up (Supination %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.supination}
            onChange={(e) => onAngleChange("supination", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Forearm Rotation Palm Down (Pronation %):</label>
          <input
            type="number"
            value={specializedData.joint_angles.pronation}
            onChange={(e) => onAngleChange("pronation", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#d1fae5", padding: "0.75rem", borderRadius: "4px", marginTop: "1rem", borderLeft: "4px solid #065f46" }}>
        <strong>Tip:</strong> Most elbow conditions respond well to rest, ice, and activity modification. Avoid activities that cause pain and consider using a counterforce brace (tennis elbow strap) for support during daily activities.
      </div>
    </fieldset>
  );
};

export default ElbowTests;