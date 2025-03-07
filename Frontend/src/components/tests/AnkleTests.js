import React from 'react';

const AnkleTests = ({ specializedData, onSpecialTestChange, onAngleChange }) => {
  return (
    <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      <legend style={{ fontWeight: "bold", padding: "0 10px", color: "#3c63a7" }}>Ankle-Specific Tests</legend>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
        These tests help identify ankle ligament injuries, instability, or other conditions.
      </p>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>
          Anterior Drawer Test
        </label>
        <small style={{ color: "#555" }}>
          Tests for anterior talofibular ligament injury. Forward pressure on the heel with ankle in slight plantar flexion.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.ankle_anterior_drawer}
            onChange={() => onSpecialTestChange("ankle_anterior_drawer")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Talar Tilt Test</label>
        <small style={{ color: "#555" }}>
          Tests for calcaneofibular ligament injury. Inversion stress to the ankle.
        </small>
        <br />
        <label style={{ marginTop: "0.3rem", display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            style={{ marginRight: "0.5rem" }}
            checked={specializedData.special_tests.talar_tilt}
            onChange={() => onSpecialTestChange("talar_tilt")}
          />
          Positive Test Result
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Thompson Test</label>
        <small style={{ color: "#555" }}>
          Tests for Achilles tendon rupture. Squeeze the calf muscle with the patient kneeling.
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

      <hr style={{ margin: "1rem 0" }} />

      <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
        Ankle Range of Motion
      </label>
      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
        <div>
          <label>Dorsiflexion (°):</label>
          <input
            type="number"
            value={specializedData.joint_angles.dorsiflexion}
            onChange={(e) => onAngleChange("dorsiflexion", e.target.value)}
            style={{ width: "80px", marginLeft: "0.5rem", padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Plantarflexion (°):</label>
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