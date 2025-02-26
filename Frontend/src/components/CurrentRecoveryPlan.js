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
    return <div>Loading your recovery plan...</div>;
  }

  if (error) {
    return (
      <div style={{ 
        padding: "0.75rem", 
        backgroundColor: "#f8d7da",
        color: "#721c24",
        borderRadius: "0.25rem"
      }}>
        {error}
      </div>
    );
  }

  if (!weeklyPlan) {
    return (
      <div>
        <h3>Current Recovery Plan</h3>
        <p>You don't have a recovery plan yet. Please go to "Create a New Recovery Plan" to generate one.</p>
      </div>
    );
  }

  // Check if the current day has any exercises
  const hasExercises = weeklyPlan[currentDay]?.length > 0;

  return (
    <div>
      <h3>Current Recovery Plan</h3>
      <p>Here are your exercises for today:</p>

      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
          padding: "0.5rem",
          marginBottom: "1rem"
        }}>
          {Object.keys(weeklyPlan).map(day => (
            <button
              key={day}
              onClick={() => handleDayChange(day)}
              style={{
                padding: "0.5rem",
                backgroundColor: day === currentDay ? "#ff4646" : "transparent",
                color: day === currentDay ? "white" : "#333",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {day.substring(0, 3)}
            </button>
          ))}
        </div>

        <h4>{currentDay}'s Exercises</h4>
        
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
          <div style={{ 
            padding: "1rem", 
            backgroundColor: "#f8f9fa", 
            borderRadius: "4px",
            textAlign: "center",
            color: "#666"
          }}>
            <p>No exercises scheduled for {currentDay}.</p>
            <p>This might be a rest day, or you haven't generated a recovery plan yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrentRecoveryPlan;