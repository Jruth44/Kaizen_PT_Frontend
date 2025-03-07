import axios from "axios";

// Adjust this if your backend is on a different URL/port
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8000";
console.log("Using API Base URL:", API_BASE);

// Add default headers for all requests
axios.defaults.headers.common['Content-Type'] = 'application/json';

export async function listPatients() {
  const res = await axios.get(`${API_BASE}/patients`);
  return res.data; // array of patient names
}

export async function getPatient(name) {
  const res = await axios.get(`${API_BASE}/patients/${name}`);
  return res.data; // patient details
}

export async function createPatient(data) {
  // data includes { name, age, injury_location, ... }
  const res = await axios.post(`${API_BASE}/patients`, data);
  return res.data;
}

export async function updatePatient(patientName, data) {
  // data is partial update
  const res = await axios.put(`${API_BASE}/patients/${patientName}`, data);
  return res.data;
}

export async function deletePatient(name) {
  const res = await axios.delete(`${API_BASE}/patients/${name}`);
  return res.data;
}

export async function generateExercises(patientName, numExercises) {
  const res = await axios.post(`${API_BASE}/generate_exercises`, {
    patient_name: patientName,
    num_exercises: numExercises,
  });
  return res.data; // the recommendations JSON
}

export async function getWeeklySchedule(patientName) {
  const res = await axios.get(`${API_BASE}/weekly_schedule/${patientName}`);
  return res.data;
}

export async function addExerciseToDay(patientName, day, exercise) {
  const res = await axios.post(
    `${API_BASE}/weekly_schedule/${patientName}/${day}`,
    exercise
  );
  return res.data;
}

export async function getOverallPTSchedule() {
  const res = await axios.get(`${API_BASE}/pt_schedule`);
  return res.data;
}

export async function submitInjuryQuestionnaire(patientName, questionnaireData) {
  try {
    const encodedPatientName = encodeURIComponent(patientName);
    const url = `${API_BASE}/patients/${encodedPatientName}/injury_questionnaire`;
    console.log("Submitting to URL:", url);
    const res = await axios.post(
      url,
      questionnaireData,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return res.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function getPatientInjuries(patientName) {
  try {
    const encodedPatientName = encodeURIComponent(patientName);
    const res = await axios.get(`${API_BASE}/patients/${encodedPatientName}/injuries`);
    return res.data;
  } catch (error) {
    console.error('Error fetching patient injuries:', error);
    throw error;
  }
}

export async function generateRecoveryPlan(patientName) {
  try {
    const encodedPatientName = encodeURIComponent(patientName);
    const res = await axios.post(`${API_BASE}/patients/${encodedPatientName}/generate_recovery_plan`);
    return res.data;
  } catch (error) {
    console.error('Error generating recovery plan:', error);
    throw error;
  }
}

export async function deletePatientInjury(patientName, injuryIndex) {
  try {
    const encodedPatientName = encodeURIComponent(patientName);
    const res = await axios.delete(`${API_BASE}/patients/${encodedPatientName}/injuries/${injuryIndex}`);
    return res.data;
  } catch (error) {
    console.error('Error deleting patient injury:', error);
    throw error;
  }
}