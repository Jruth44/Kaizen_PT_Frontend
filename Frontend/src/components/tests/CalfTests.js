import React from 'react';

const CalfTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Calf-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify calf strains, tears, or other gastrocnemius/soleus complex conditions.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Thompson Test
        </label>
        <small style={{ color: "#555" }}>
          Tests for Achilles tendon rupture. Squeeze the calf muscle with the patient kneeling or lying prone.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.thompson}
            onChange={() => onSpecialTestChange("thompson")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Resisted Plantarflexion Test</label>
        <small style={{ color: "#555" }}>
          Tests for calf strain. Push against resistance with the foot pointing downward.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.resisted_plantarflexion}
            onChange={() => onSpecialTestChange("resisted_plantarflexion")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Calf Palpation</label>
        <small style={{ color: "#555" }}>
          Checking for tenderness, nodules or defects in muscle tissue.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.calf_palpation}
            onChange={() => onSpecialTestChange("calf_palpation")}
          />
          Positive Test Result
        </label>
      </div>

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Calf Range of Motion
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Ankle Dorsiflexion (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.dorsiflexion}
            onChange={(e) => onAngleChange("dorsiflexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Ankle Plantarflexion (°):</label>
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

export default CalfTests;