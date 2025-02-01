// AddInjury.js
import React, { useState } from "react";
import InjuryQuestionnaireForm from "./InjuryQuestionnareForm";

function AddInjury() {
  // Track which patient we are adding the questionnaire to
  const [patientName, setPatientName] = useState("");

  return (
    <div>
      <h3>Add an Injury</h3>
      <p>Select which patient to add an injury for, then fill in the form below.</p>

      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Patient Name:</label>
        <input
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          placeholder="e.g. John Doe"
          style={{ width: "300px", padding: "6px" }}
        />
      </div>

      <hr style={{ margin: "1rem 0" }} />

      {/* Injury Questionnaire Form */}
      {/* We pass `selectedPatient={patientName}` to let the form know which patient to update */}
      <InjuryQuestionnaireForm selectedPatient={patientName} />
    </div>
  );
}

export default AddInjury;
