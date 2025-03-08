// src/components/CurrentRecoveryPlan.js
import React, { useState, useEffect } from "react";
import { getWeeklySchedule } from "../services/api";
import RecoveryExerciseCard from "./RecoveryExerciseCard";
import { supabase } from "../supabaseClient";

function CurrentRecoveryPlan() {
  const [weeklyPlan, setWeeklyPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDay, setCurrentDay] = useState(getToday());
  const [user, setUser] = useState(null);

  // Get current day of week
  function getToday() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  }

  useEffect(() => {
    // Get the current user
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        fetchPlan(data.user.email);
      }
    }
    
    fetchUser();
  }, []);

  const fetchPlan = async (email) => {
    try {
      setLoading(true);
      const data = await getWeeklySchedule(email);
      setWeeklyPlan(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recovery plan:", error);
      setError("Failed to load your recovery plan. Please try again later.");
      setLoading(false);
    }
  };

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your recovery plan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        {error}
      </div>
    );
  }

  if (!weeklyPlan) {
    return (
      <div className="empty-state">
        <h3>Current Recovery Plan</h3>
        <p>You don't have a recovery plan yet.</p>
        <p className="text-muted">Please go to "Create a New Recovery Plan" to generate one.</p>
      </div>
    );
  }

  // Check if the current day has any exercises
  const hasExercises = weeklyPlan[currentDay]?.length > 0;

  return (
    <div>
      <div className="page-header">
        <h2>Current Recovery Plan</h2>
        <p className="text-muted">Here are your exercises for today:</p>
      </div>

      <div className="week-tabs">
        {Object.keys(weeklyPlan).map(day => (
          <button
            key={day}
            onClick={() => handleDayChange(day)}
            className={`week-tab ${day === currentDay ? "active" : ""}`}
          >
            {day.substring(0, 3)}
          </button>
        ))}
      </div>

      <div className="day-exercises">
        <h3>{currentDay}'s Exercises</h3>
        
        {hasExercises ? (
          weeklyPlan[currentDay].map((exercise, index) => (
            <RecoveryExerciseCard
              key={index}
              bodyPart={exercise.bodyPart || ""}
              exerciseName={exercise.name || (typeof exercise === 'string' ? exercise : 'Exercise')}
              instructions={
                exercise.description || 
                (exercise.sets && exercise.reps 
                  ? `${exercise.sets} sets of ${exercise.reps} reps` 
                  : "Complete as prescribed")
              }
              purpose={exercise.purpose || ""}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>No exercises scheduled for {currentDay}.</p>
            <p className="text-muted">This might be a rest day, or you haven't generated a recovery plan yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentRecoveryPlan;