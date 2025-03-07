// InjuryQuestionnaireForm.js
import React, { useState } from "react";
import { submitInjuryQuestionnaire } from "../services/api";
import BodyMap from "./BodyMap";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

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
    setIsSubmitting(true);
    setError(null);
  
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
      setIsSubmitting(false);
      // Scroll to the results
      const resultElement = document.getElementById("diagnosis-result");
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: "smooth" });
      }
    } catch (error) {
      setIsSubmitting(false);
      setError(error);
      console.error("Submission error:", error);
      if (error.response) {
        setError(`Error: ${error.response.data.detail || "Server error occurred"}`);
      } else if (error.request) {
        setError("Error: Could not connect to the server. Please check if the backend is running.");
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };

  // Render different specialized tests based on body part
  const renderSpecializedTests = () => {
    switch(formData.body_part) {
      case "Shoulder":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Shoulder-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify shoulder impingement or rotator cuff issues. 
              Check the box if the test reproduces your pain.
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
        );
      case "Knee":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Knee-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify potential knee ligament or meniscus issues.
              Check the box if the test reproduces your pain.
            </p>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                Anterior Drawer Test
              </label>
              <small style={{ color: "#555" }}>
                Tests for ACL integrity. Knee bent at 90°, forward pressure on tibia.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.anterior_drawer}
                  onChange={() => handleSpecialTestChange("anterior_drawer")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>McMurray Test</label>
              <small style={{ color: "#555" }}>
                Tests for meniscus tears. Knee rotation with extension from flexed position.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.mcmurray}
                  onChange={() => handleSpecialTestChange("mcmurray")}
                />
              </label>
            </div>

            <hr style={{ margin: "1rem 0" }} />

            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Knee Range of Motion
            </label>
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
                <label>Extension (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.extension}
                  onChange={(e) => handleAngleChange("extension", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
            </div>
          </fieldset>
        );
      case "Hip":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Hip-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify hip-related conditions such as labral tears, impingement, or bursitis.
            </p>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                FADIR Test (Flexion, Adduction, Internal Rotation)
              </label>
              <small style={{ color: "#555" }}>
                Tests for hip impingement or labral tears. Pain with flexed hip being adducted and internally rotated.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.fadir}
                  onChange={() => handleSpecialTestChange("fadir")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Trendelenburg Test</label>
              <small style={{ color: "#555" }}>
                Tests for hip abductor weakness. Standing on one leg, if the pelvis drops on the non-stance side.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.trendelenburg}
                  onChange={() => handleSpecialTestChange("trendelenburg")}
                />
              </label>
            </div>

            <hr style={{ margin: "1rem 0" }} />

            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Hip Range of Motion
            </label>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
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
                <label>Internal Rotation (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.internal_rotation}
                  onChange={(e) => handleAngleChange("internal_rotation", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
              <div>
                <label>External Rotation (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.external_rotation}
                  onChange={(e) => handleAngleChange("external_rotation", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
            </div>
          </fieldset>
        );
      case "Back":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Back-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify spinal conditions, disc issues, or nerve impingement.
            </p>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                Straight Leg Raise
              </label>
              <small style={{ color: "#555" }}>
                Tests for disc herniation and sciatic nerve irritation. Lie on back while examiner lifts straightened leg.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.straight_leg_raise}
                  onChange={() => handleSpecialTestChange("straight_leg_raise")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Slump Test</label>
              <small style={{ color: "#555" }}>
                Tests for nerve root irritation. Sitting with knees and hips flexed, neck flexed, then extending knee.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.slump_test}
                  onChange={() => handleSpecialTestChange("slump_test")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Centralization/Peripheralization</label>
              <small style={{ color: "#555" }}>
                During movement testing, does your pain move toward the center of your back (centralization) or away toward extremities (peripheralization)?
              </small>
              <br />
              <div style={{ marginTop: "0.5rem" }}>
                <select
                  value={formData.specialized_data.special_tests.centralization || ""}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      specialized_data: {
                        ...prev.specialized_data,
                        special_tests: {
                          ...prev.specialized_data.special_tests,
                          centralization: e.target.value
                        }
                      }
                    }));
                  }}
                  style={{ padding: "0.3rem", borderRadius: "4px", border: "1px solid #ccc" }}
                >
                  <option value="">Select response</option>
                  <option value="centralization">Centralization (improved)</option>
                  <option value="peripheralization">Peripheralization (worse)</option>
                  <option value="no_change">No change</option>
                </select>
              </div>
            </div>
          </fieldset>
        );
      case "Neck":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Neck-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify cervical spine conditions, nerve impingement, or vascular issues.
            </p>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                Spurling's Test
              </label>
              <small style={{ color: "#555" }}>
                Tests for nerve root compression. Head tilted to affected side with downward pressure.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.spurlings}
                  onChange={() => handleSpecialTestChange("spurlings")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Upper Limb Tension Test</label>
              <small style={{ color: "#555" }}>
                Tests for nerve impingement affecting the arm. Arm positioned in specific way to tension nerves.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.upper_limb_tension}
                  onChange={() => handleSpecialTestChange("upper_limb_tension")}
                />
              </label>
            </div>

            <hr style={{ margin: "1rem 0" }} />

            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Neck Range of Motion
            </label>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
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
                <label>Extension (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.extension}
                  onChange={(e) => handleAngleChange("extension", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
              <div>
                <label>Rotation (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.rotation}
                  onChange={(e) => handleAngleChange("rotation", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
            </div>
          </fieldset>
        );
      case "Ankle":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Ankle-Specific Tests</legend>
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
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.ankle_anterior_drawer}
                  onChange={() => handleSpecialTestChange("ankle_anterior_drawer")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Talar Tilt Test</label>
              <small style={{ color: "#555" }}>
                Tests for calcaneofibular ligament injury. Inversion stress to the ankle.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.talar_tilt}
                  onChange={() => handleSpecialTestChange("talar_tilt")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Thompson Test</label>
              <small style={{ color: "#555" }}>
                Tests for Achilles tendon rupture. Squeeze the calf muscle with the patient kneeling.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.thompson}
                  onChange={() => handleSpecialTestChange("thompson")}
                />
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
                  value={formData.specialized_data.joint_angles.dorsiflexion}
                  onChange={(e) => handleAngleChange("dorsiflexion", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
              <div>
                <label>Plantarflexion (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.plantarflexion}
                  onChange={(e) => handleAngleChange("plantarflexion", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
            </div>
          </fieldset>
        );
      case "Wrist":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Wrist-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify wrist conditions such as carpal tunnel syndrome, ligament injuries, or tendonitis.
            </p>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                Phalen's Test
              </label>
              <small style={{ color: "#555" }}>
                Tests for carpal tunnel syndrome. Flex both wrists and press the backs of hands together for 1 minute.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.phalens}
                  onChange={() => handleSpecialTestChange("phalens")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Finkelstein Test</label>
              <small style={{ color: "#555" }}>
                Tests for De Quervain's tenosynovitis. Make a fist with thumb inside and bend wrist toward pinky side.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.finkelstein}
                  onChange={() => handleSpecialTestChange("finkelstein")}
                />
              </label>
            </div>

            <hr style={{ margin: "1rem 0" }} />

            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Wrist Range of Motion
            </label>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
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
                <label>Extension (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.extension}
                  onChange={(e) => handleAngleChange("extension", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
            </div>
          </fieldset>
        );
      case "Elbow":
        return (
          <fieldset style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc" }}>
            <legend style={{ fontWeight: "bold" }}>Elbow-Specific Tests</legend>
            <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
              These tests help identify tennis elbow, golfer's elbow, or other elbow conditions.
            </p>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>
                Cozen's Test (Tennis Elbow)
              </label>
              <small style={{ color: "#555" }}>
                Tests for lateral epicondylitis. Make a fist and extend wrist while examiner resists.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.cozens}
                  onChange={() => handleSpecialTestChange("cozens")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Golfer's Elbow Test</label>
              <small style={{ color: "#555" }}>
                Tests for medial epicondylitis. Wrist flexion against resistance.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.golfers_elbow}
                  onChange={() => handleSpecialTestChange("golfers_elbow")}
                />
              </label>
            </div>

            <div style={{ marginBottom: "0.5rem" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Valgus Stress Test</label>
              <small style={{ color: "#555" }}>
                Tests for medial collateral ligament injury. Apply outward pressure to elbow.
              </small>
              <br />
              <label style={{ marginTop: "0.3rem" }}>
                Positive?
                <input
                  type="checkbox"
                  style={{ marginLeft: "0.5rem" }}
                  checked={formData.specialized_data.special_tests.valgus_stress}
                  onChange={() => handleSpecialTestChange("valgus_stress")}
                />
              </label>
            </div>

            <hr style={{ margin: "1rem 0" }} />

            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Elbow Range of Motion
            </label>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
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
                <label>Extension (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.extension}
                  onChange={(e) => handleAngleChange("extension", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
              <div>
                <label>Supination (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.supination}
                  onChange={(e) => handleAngleChange("supination", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
              <div>
                <label>Pronation (°):</label>
                <input
                  type="number"
                  value={formData.specialized_data.joint_angles.pronation}
                  onChange={(e) => handleAngleChange("pronation", e.target.value)}
                  style={{ width: "80px", marginLeft: "0.5rem" }}
                />
              </div>
            </div>
          </fieldset>
        );
      default:
        return null;
    }
  };

  const handleBodyPartSelect = (bodyPart) => {
    setFormData(prev => ({
      ...prev,
      body_part: bodyPart
    }));
  };

  return (
    <div>
      <h2>Add or Update Your Injury Info</h2>
      <p style={{ fontSize: "0.9rem", color: "#666" }}>
        Please fill out the questions below to help us (and our AI) understand your current injury.
        Don't worry if you're unsure about any tests or technical details—just fill in what you can!
      </p>
      
      {error && (
        <div style={{ 
          padding: "0.75rem", 
          backgroundColor: "#f8d7da",
          color: "#721c24",
          borderRadius: "0.25rem",
          marginBottom: "1rem",
          marginTop: "1rem" 
        }}>
          {error}
        </div>
      )}
      
      <div style={{ marginBottom: "2rem" }}>
        <h3>Select Body Region</h3>
        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
          Click on the body map to select the affected area, or use the dropdown below.
        </p>
        <BodyMap selectedBodyPart={formData.body_part} onSelectBodyPart={handleBodyPartSelect} />
      </div>

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
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="Shoulder">Shoulder</option>
            <option value="Knee">Knee</option>
            <option value="Hip">Hip</option>
            <option value="Back">Back</option>
            <option value="Neck">Neck</option>
            <option value="Ankle">Ankle</option>
            <option value="Wrist">Wrist</option>
            <option value="Elbow">Elbow</option>
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
            style={{ width: "100%", minHeight: "80px", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            required
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
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            required
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
            style={{ width: "100%", minHeight: "80px", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            required
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
            style={{ width: "100%", minHeight: "80px", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            required
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
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            required
          />
        </div>

        {/* Severity */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 150px" }}>
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
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
              required
            />
          </div>
          <div style={{ flex: "1 1 150px" }}>
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
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
              required
            />
          </div>
          <div style={{ flex: "1 1 150px" }}>
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
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
              required
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
            style={{ width: "100%", minHeight: "80px", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Nature of Pain:</label>
          <textarea
            name="nature_of_pain"
            value={formData.nature_of_pain}
            onChange={handleChange}
            placeholder="E.g. Clicking, sharp, throbbing, burning..."
            style={{ width: "100%", minHeight: "80px", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            required
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>Stage of Injury:</label>
          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
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
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          >
            <option value="Improving">Improving</option>
            <option value="Worsening">Worsening</option>
            <option value="Not changing">Not changing</option>
            <option value="Fluctuating">Fluctuating</option>
          </select>
        </div>

        {/* Render specialized tests based on body part */}
        {renderSpecializedTests()}

        <button
          type="submit"
          style={{
            marginTop: "1.5rem",
            background: "#ff4646",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            borderRadius: "4px",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            opacity: isSubmitting ? 0.7 : 1,
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Save My Injury Information"}
        </button>
      </form>

      {diagnosisResult && (
        <div
          id="diagnosis-result"
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #dee2e6",
            borderLeft: "4px solid #ff4646"
          }}
        >
          <h4 style={{ color: "#ff4646", marginBottom: "1.5rem", fontSize: "1.3rem" }}>
            AI Analysis Results
          </h4>

          <div style={{ marginBottom: "1.5rem" }}>
            <strong style={{ fontSize: "1.1rem" }}>Preliminary Diagnosis:</strong>
            <p style={{ marginTop: "0.5rem", lineHeight: "1.6" }}>{diagnosisResult.diagnosis}</p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <strong style={{ fontSize: "1.1rem" }}>Reasoning:</strong>
            <p style={{ whiteSpace: "pre-wrap", marginTop: "0.5rem", lineHeight: "1.6" }}>{diagnosisResult.reasoning}</p>
          </div>

          <div>
            <strong style={{ fontSize: "1.1rem" }}>Recommended Next Steps:</strong>
            <p style={{ marginTop: "0.5rem", lineHeight: "1.6" }}>{diagnosisResult.recommendations}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InjuryQuestionnaireForm;