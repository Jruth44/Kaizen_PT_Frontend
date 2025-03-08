// /src/components/InjuryQuestionnareForm.js
import React, { useState } from "react";
import { submitInjuryQuestionnaire } from "../services/api";

// Import the new BodyPartSelector instead of BodyMap
import BodyPartSelector from "./BodyPartSelector";

import BasicInfoFields from "./BasicInfoFields";
import SecondaryInfoFields from "./SecondaryInfoFields";
import PainRatingScale from "./PainRatingScale";
import SpecializedTests from "./SpecializedTests";
import DiagnosisResult from "./DiagnosisResult";

// Utilities for form data
import {
  defaultFormData,
  getDefaultSpecializedData,
  prepareSubmissionData,
} from "./InjuryFormUtils";

function InjuryQuestionnaireForm({ selectedPatient }) {
  const [formData, setFormData] = useState(defaultFormData);
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes for standard fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle body part selection
  const handleBodyPartSelect = (bodyPart) => {
    setFormData((prev) => ({
      ...prev,
      body_part: bodyPart,
      // Update specialized_data defaults whenever a new body part is chosen
      specialized_data: getDefaultSpecializedData(bodyPart),
    }));
  };

  // Handle changes for specialized tests
  const handleSpecialTestChange = (testName, value) => {
    // Some tests (like dropdowns) might pass a value, checkboxes just toggle
    if (value !== undefined) {
      setFormData((prev) => ({
        ...prev,
        specialized_data: {
          ...prev.specialized_data,
          special_tests: {
            ...prev.specialized_data.special_tests,
            [testName]: value,
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        specialized_data: {
          ...prev.specialized_data,
          special_tests: {
            ...prev.specialized_data.special_tests,
            [testName]: !prev.specialized_data.special_tests[testName],
          },
        },
      }));
    }
  };

  // Handle changes for joint angle inputs
  const handleAngleChange = (angleName, angleValue) => {
    setFormData((prev) => ({
      ...prev,
      specialized_data: {
        ...prev.specialized_data,
        joint_angles: {
          ...prev.specialized_data.joint_angles,
          [angleName]: angleValue,
        },
      },
    }));
  };

  // Handle select changes for special tests
  const handleSelectChange = (e, fieldName) => {
    handleSpecialTestChange(fieldName, e.target.value);
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = prepareSubmissionData(formData);

    try {
      const result = await submitInjuryQuestionnaire(selectedPatient, payload);
      setDiagnosisResult(result);
      setIsSubmitting(false);

      // Scroll to the AI Analysis result
      const resultElement = document.getElementById("diagnosis-result");
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitting(false);
      // Handle error messages more gracefully
      if (err.response) {
        setError(
          `Error: ${err.response.data?.detail || "Server error occurred"}`
        );
      } else if (err.request) {
        setError(
          "Error: Could not connect to the server. Please check if the backend is running."
        );
      } else {
        setError(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div>
      <h2 style={{ color: "#3c63a7", marginBottom: "1rem" }}>
        Add or Update Your Injury Info
      </h2>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem" }}>
        Please fill out the questions below to help us (and our AI) understand
        your current injury. Don't worry if you're unsure about any
        tests or technical details—just fill in what you can!
      </p>

      {/* Display any error message */}
      {error && (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "0.5rem",
            marginBottom: "1.5rem",
            marginTop: "1rem",
            border: "1px solid #f5c6cb",
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Body Part Selector Dropdown - replacing the interactive Body Map */}
      <div style={{ marginBottom: "2rem" }}>
        <BodyPartSelector
          selectedBodyPart={formData.body_part}
          onSelectBodyPart={handleBodyPartSelect}
        />
      </div>

      {/* The main injury form */}
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        {/* The body_part is tracked via the selector above, but we store it in hidden input too */}
        <input type="hidden" name="body_part" value={formData.body_part} />

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#3c63a7", marginBottom: "1rem" }}>
            Selected Body Part: {formData.body_part}
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#666",
              padding: "0.5rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
              borderLeft: "3px solid #3c63a7",
            }}
          >
            Fill out the details below specifically for your{" "}
            <strong>{formData.body_part}</strong> injury.
          </p>
        </div>

        {/* Basic Information Fields */}
        <BasicInfoFields formData={formData} handleChange={handleChange} />

        {/* Pain Rating Scale */}
        <PainRatingScale painRatings={formData} handleChange={handleChange} />

        {/* Secondary Information Fields */}
        <SecondaryInfoFields formData={formData} handleChange={handleChange} />

        {/* Specialized Tests (conditional based on body_part) */}
        <SpecializedTests
          bodyPart={formData.body_part}
          specializedData={formData.specialized_data}
          onSpecialTestChange={handleSpecialTestChange}
          onAngleChange={handleAngleChange}
          handleSelectChange={handleSelectChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            marginTop: "2rem",
            background: "#ff4646",
            color: "#fff",
            padding: "1rem 2rem",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            borderRadius: "4px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            opacity: isSubmitting ? 0.7 : 1,
            fontSize: "1.1rem",
            transition: "all 0.2s ease",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Save My Injury Information"}
        </button>
      </form>

      {/* Show the AI Analysis Results (Diagnosis) */}
      <DiagnosisResult diagnosisResult={diagnosisResult} />
    </div>
  );
}

export default InjuryQuestionnaireForm;