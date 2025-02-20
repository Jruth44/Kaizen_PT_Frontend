// InjuryQuestionnaireForm.js
import React, { useState } from "react";
import { submitInjuryQuestionnaire } from "../services/api";

function InjuryQuestionnaireForm({ selectedPatient }) {
  const [formData, setFormData] = useState({
    body_part: "Shoulder",
    hurting_description: "",
    date_of_onset: "",
    what_makes_it_worse: "",
    what_makes_it_better: "",
    mechanism_of_injury: "",
    severity_best: 0,
    severity_worst: 0,
    severity_daily_avg: 0,
    irritability_factors: "",
    nature_of_pain: "",
    stage: "Acute",
    stability: "Not changing",
    specialized_data: {
      special_tests: {
        hawkins_kennedy: false,
        neer: false,
        empty_can: false,
      },
      joint_angles: {
        flexion: "",
        abduction: "",
      },
    },
  });

  const [diagnosisResult, setDiagnosisResult] = useState(null);

  // Handle input changes for standard fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle specialized test checkboxes.
  const handleSpecialTestChange = (testName) => {
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
  };

  // Handle changes for joint angle inputs.
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      body_part: formData.body_part,
      hurting_description: formData.hurting_description,
      date_of_onset: formData.date_of_onset,
      aggravating_factors: formData.what_makes_it_worse,
      easing_factors: formData.what_makes_it_better,
      mechanism_of_injury: formData.mechanism_of_injury,
      severity_best: isNaN(parseInt(formData.severity_best, 10))
        ? 0
        : parseInt(formData.severity_best, 10),
      severity_worst: isNaN(parseInt(formData.severity_worst, 10))
        ? 0
        : parseInt(formData.severity_worst, 10),
      severity_daily_avg: isNaN(parseInt(formData.severity_daily_avg, 10))
        ? 0
        : parseInt(formData.severity_daily_avg, 10),
      irritability_factors: formData.irritability_factors,
      nature_of_pain: formData.nature_of_pain,
      stage: formData.stage,
      stability: formData.stability,
      specialized_data: formData.specialized_data,
    };
  
    try {
      const result = await submitInjuryQuestionnaire(selectedPatient, payload);
      setDiagnosisResult(result);
      alert("Injury questionnaire submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.detail || "Server error occurred"}`);
      } else if (error.request) {
        alert("Error: Could not connect to the server. Please check if the backend is running on http://localhost:8000");
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };
  

  return (
    <div>
      <h2>Add or Update Your Injury Info</h2>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        Please fill out the questions below to help us (and our AI) understand your current injury.
        Don't worry if you're unsure about any tests or technical details—just fill in what you can!
      </p>

      {/* The form is always rendered since selectedPatient is now provided automatically */}
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        {/* Body Part */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            Injured Body Part or Region:
          </label>
          <select
            name="body_part"
            value={formData.body_part}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.3rem" }}
          >
            <option>Shoulder</option>
            <option>Knee</option>
            <option>Hip</option>
            <option>Back</option>
            <option>Neck</option>
            {/* etc. */}
          </select>
        </div>

        {/* Hurting Description */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            Describe Where It Hurts and How It Feels:
          </label>
          <textarea
            name="hurting_description"
            value={formData.hurting_description}
            onChange={handleChange}
            placeholder="E.g. 'A sharp pain in the front of my shoulder...'"
            style={{ width: "100%", minHeight: "60px", padding: "0.3rem" }}
          />
        </div>

        {/* Date of Onset */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            When Did This Injury Start (Date of Onset):
          </label>
          <input
            type="text"
            name="date_of_onset"
            value={formData.date_of_onset}
            onChange={handleChange}
            placeholder="E.g. '2 weeks ago', '06/01/2025', etc."
            style={{ width: "100%", padding: "0.3rem" }}
          />
        </div>

        {/* Aggravating Factors */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            What Makes It Worse? (Aggravating Factors)
          </label>
          <textarea
            name="what_makes_it_worse"
            value={formData.what_makes_it_worse}
            onChange={handleChange}
            placeholder="E.g. 'Reaching overhead, lifting heavy objects...'"
            style={{ width: "100%", minHeight: "60px", padding: "0.3rem" }}
          />
        </div>

        {/* Easing Factors */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            What Makes It Better? (Easing Factors)
          </label>
          <textarea
            name="what_makes_it_better"
            value={formData.what_makes_it_better}
            onChange={handleChange}
            placeholder="E.g. 'Applying ice, resting, taking ibuprofen...'"
            style={{ width: "100%", minHeight: "60px", padding: "0.3rem" }}
          />
        </div>

        {/* Mechanism of Injury */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            How Did It Happen? (Mechanism of Injury)
          </label>
          <input
            type="text"
            name="mechanism_of_injury"
            value={formData.mechanism_of_injury}
            onChange={handleChange}
            placeholder="E.g. 'Fell on my arm', 'Twisted knee playing soccer'..."
            style={{ width: "100%", padding: "0.3rem" }}
          />
        </div>

        {/* Severity */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontWeight: "bold" }}>
              Pain at Best (0-10):
            </label>
            <input
              type="number"
              name="severity_best"
              min="0"
              max="10"
              value={formData.severity_best}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.3rem" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontWeight: "bold" }}>
              Pain at Worst (0-10):
            </label>
            <input
              type="number"
              name="severity_worst"
              min="0"
              max="10"
              value={formData.severity_worst}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.3rem" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontWeight: "bold" }}>
              Daily Average Pain (0-10):
            </label>
            <input
              type="number"
              name="severity_daily_avg"
              min="0"
              max="10"
              value={formData.severity_daily_avg}
              onChange={handleChange}
              style={{ width: "100%", padding: "0.3rem" }}
            />
          </div>
        </div>

        {/* Irritability, Nature, Stage, Stability */}
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Irritability Factors:</label>
          <textarea
            name="irritability_factors"
            value={formData.irritability_factors}
            onChange={handleChange}
            placeholder="What activities or movements quickly aggravate your symptoms?"
            style={{ width: "100%", minHeight: "60px", padding: "0.3rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Nature of Pain:</label>
          <textarea
            name="nature_of_pain"
            value={formData.nature_of_pain}
            onChange={handleChange}
            placeholder="E.g. Clicking, sharp, throbbing, burning..."
            style={{ width: "100%", minHeight: "60px", padding: "0.3rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Stage of Injury:</label>
          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.3rem" }}
          >
            <option value="Acute">Acute (recent, 0-2 weeks)</option>
            <option value="Subacute">Subacute (2-6 weeks)</option>
            <option value="Chronic">Chronic (6+ weeks)</option>
            <option value="Acute on Chronic">Acute on Chronic</option>
          </select>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Stability:</label>
          <select
            name="stability"
            value={formData.stability}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.3rem" }}
          >
            <option>Improving</option>
            <option>Worsening</option>
            <option>Not changing</option>
            <option>Fluctuating</option>
          </select>
        </div>

        {/* Shoulder-specific or other specialized data */}
        {formData.body_part === "Shoulder" && (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Optional Shoulder-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify shoulder impingement or rotator cuff issues. If you know
              how to do them (or a PT has guided you), check the box if it reproduces your pain.
              Otherwise, you can skip them.
            </p>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                Hawkins-Kennedy Test
              </label>
              <small style={{ color: "#555" }}>
                Instructions: Flex the shoulder and elbow to 90°, then rotate your arm
                internally. A sharp pain in the front of your shoulder often indicates a 
                "positive" test.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.hawkins_kennedy}
                  onChange={() => handleSpecialTestChange("hawkins_kennedy")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Neer Test</label>
              <small style={{ color: "#555" }}>
                Instructions: Fully raise (forward flex) your arm. If it causes pain near the top 
                of the shoulder, this could indicate impingement.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.neer}
                  onChange={() => handleSpecialTestChange("neer")}
                />
              </label>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "bold" }}>Empty Can Test</label>
              <small style={{ color: "#555" }}>
                Instructions: Lift your arms straight forward at shoulder height, thumbs pointing 
                down (like emptying a can). Push up against resistance. Pain or weakness may 
                indicate rotator cuff strain.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.empty_can}
                  onChange={() => handleSpecialTestChange("empty_can")}
                />
              </label>
            </div>

            <hr style={{ margin: "1rem 0" }} />

            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Shoulder Range of Motion
            </label>
            <small style={{ color: "#555" }}>
              If you've measured or estimated your range (in degrees), enter it below. 
              Otherwise, feel free to leave these blank.
            </small>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <div>
                <label>Flexion (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.flexion}
                  onChange={(e) => handleAngleChange("flexion", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
              <div>
                <label>Abduction (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.abduction}
                  onChange={(e) => handleAngleChange("abduction", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
            </div>
          </fieldset>
        )}

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            background: "#ff4646",
            color: "#fff",
            padding: "0.5rem 1rem",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Save My Injury Information
        </button>
      </form>

      {diagnosisResult && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            border: "1px solid #dee2e6",
          }}
        >
          <h4 style={{ color: "#ff4646", marginBottom: "1rem" }}>
            AI Analysis Results
          </h4>

          <div style={{ marginBottom: "1rem" }}>
            <strong>Preliminary Diagnosis:</strong>
            <p>{diagnosisResult.diagnosis}</p>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <strong>Reasoning:</strong>
            <p style={{ whiteSpace: "pre-wrap" }}>{diagnosisResult.reasoning}</p>
          </div>

          <div>
            <strong>Recommended Next Steps:</strong>
            <p>{diagnosisResult.recommendations}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InjuryQuestionnaireForm;
