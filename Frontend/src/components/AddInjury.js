// AddInjury.js
import React, { useState } from "react";
import InjuryQuestionnaireForm from "./InjuryQuestionnareForm";

function AddInjury({ userEmail }) {
  return (
    <div>
      <h3>Add an Injury</h3>
      <p>Submitting injury information for <strong>{userEmail}</strong>.</p>

      <hr style={{ margin: "1rem 0" }} />

      {/* Injury Questionnaire Form now always uses the logged in user's email */}
      <InjuryQuestionnaireForm selectedPatient={userEmail} />
  </div>
  );
}

export default AddInjury;
