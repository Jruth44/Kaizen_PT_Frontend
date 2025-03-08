// src/services/api.js
import axios from "axios";

// Adjust this if your backend is on a different URL/port
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8000";

// Add default headers for all requests
axios.defaults.headers.common['Content-Type'] = 'application/json';

/**
 * Get the weekly exercise schedule for a patient
 * @param {string} patientName - The patient's email
 * @returns {Promise<Object>} - Weekly schedule object
 */
export async function getWeeklySchedule(patientName) {
  try {
    const res = await axios.get(`${API_BASE}/weekly_schedule/${patientName}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching weekly schedule:", error);
    throw error;
  }
}

/**
 * Submit an injury questionnaire for a patient
 * @param {string} patientName - The patient's email
 * @param {Object} questionnaireData - The injury questionnaire data
 * @returns {Promise<Object>} - Diagnosis result
 */
export async function submitInjuryQuestionnaire(patientName, questionnaireData) {
  try {
    const encodedPatientName = encodeURIComponent(patientName);
    const url = `${API_BASE}/patients/${encodedPatientName}/injury_questionnaire`;
    const res = await axios.post(url, questionnaireData);
    return res.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

/**
 * Get all injuries for a patient
 * @param {string} patientName - The patient's email
 * @returns {Promise<Array>} - Array of injury objects
 */
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

/**
 * Generate a recovery plan for a patient
 * @param {string} patientName - The patient's email
 * @returns {Promise<Object>} - Recovery plan object
 */
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

/**
 * Delete an injury for a patient
 * @param {string} patientName - The patient's email
 * @param {number} injuryIndex - The index of the injury to delete
 * @returns {Promise<Object>} - Deletion result
 */
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