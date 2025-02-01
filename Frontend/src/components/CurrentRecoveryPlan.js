// CurrentRecoveryPlan.js
import React from "react";
import RecoveryExerciseCard from "./RecoveryExerciseCard";

function CurrentRecoveryPlan() {
  // Example dummy data
  const exercises = [
    {
      bodyPart: "Shoulder",
      exerciseName: "Shoulder Abduction with Band",
      instructions: "Perform 3 sets of 10 reps with a light resistance band."
    },
    {
      bodyPart: "Knee",
      exerciseName: "Seated Knee Extension",
      instructions: "Perform 4 sets of 8 reps with moderate tension."
    }
  ];

  return (
    <div>
      <h3>Current Recovery Plan</h3>
      <p>Below are your prescribed exercises for this week's recovery:</p>

      {exercises.map((ex, i) => (
        <RecoveryExerciseCard
          key={i}
          bodyPart={ex.bodyPart}
          exerciseName={ex.exerciseName}
          instructions={ex.instructions}
        />
      ))}
    </div>
  );
}

export default CurrentRecoveryPlan;
