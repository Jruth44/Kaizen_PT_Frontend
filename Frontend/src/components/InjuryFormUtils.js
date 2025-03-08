// Utility functions and default values for the Injury Questionnaire form

// Get default specialized data structure based on body part
export const getDefaultSpecializedData = (bodyPart) => {
  switch(bodyPart) {
    case "Shoulder":
      return {
        special_tests: {
          hawkins_kennedy: false,
          neer: false,
          empty_can: false,
        },
        joint_angles: {
          flexion: "",
          abduction: "",
        },
      };
    case "Knee":
      return {
        special_tests: {
          anterior_drawer: false,
          mcmurray: false,
        },
        joint_angles: {
          flexion: "",
          extension: "",
        },
      };
    case "Hip":
      return {
        special_tests: {
          fadir: false,
          trendelenburg: false,
        },
        joint_angles: {
          flexion: "",
          internal_rotation: "",
          external_rotation: "",
        },
      };
    case "Back": // For backward compatibility
      return {
        special_tests: {
          straight_leg_raise: false,
          slump_test: false,
          centralization: "",
        },
      };
    case "Upper Back":
      return {
        special_tests: {
          thoracic_rotation: false,
          scapular_dyskinesia: false,
          centralization: "",
        },
        joint_angles: {
          flexion: "",
          extension: "",
          rotation: "",
        },
      };
    case "Lower Back":
      return {
        special_tests: {
          straight_leg_raise: false,
          slump_test: false,
          femoral_nerve_tension: false,
          centralization: "",
        },
        joint_angles: {
          flexion: "",
          extension: "",
          lateral_flexion: "",
        },
      };
    case "Neck":
      return {
        special_tests: {
          spurlings: false,
          upper_limb_tension: false,
        },
        joint_angles: {
          flexion: "",
          extension: "",
          rotation: "",
        },
      };
    case "Ankle":
      return {
        special_tests: {
          ankle_anterior_drawer: false,
          talar_tilt: false,
          thompson: false,
        },
        joint_angles: {
          dorsiflexion: "",
          plantarflexion: "",
        },
      };
    case "Wrist/Hand":
      return {
        special_tests: {
          phalens: false,
          finkelstein: false,
        },
        joint_angles: {
          flexion: "",
          extension: "",
        },
      };
    case "Arm/Elbow":
      return {
        special_tests: {
          cozens: false,
          golfers_elbow: false,
          valgus_stress: false,
        },
        joint_angles: {
          flexion: "",
          extension: "",
          supination: "",
          pronation: "",
        },
      };
    case "Thigh":
      return {
        special_tests: {
          resisted_knee_extension: false,
          thigh_palpation: false,
          elys_test: false,
        },
        joint_angles: {
          knee_flexion: "",
          hip_flexion: "",
        },
      };
    case "Hamstring":
      return {
        special_tests: {
          active_knee_extension: false,
          prone_resisted_knee_flexion: false,
          hamstring_palpation: false,
        },
        joint_angles: {
          straight_leg_raise: "",
          popliteal_angle: "",
        },
      };
    case "Calf":
      return {
        special_tests: {
          thompson: false,
          resisted_plantarflexion: false,
          calf_palpation: false,
        },
        joint_angles: {
          dorsiflexion: "",
          plantarflexion: "",
        },
      };
    case "Foot":
      return {
        special_tests: {
          windlass: false,
          mortons: false,
          navicular_drop: false,
        },
        joint_angles: {
          inversion: "",
          eversion: "",
        },
      };
    default:
      return {
        special_tests: {},
        joint_angles: {},
      };
  }
};

// Default form data
export const defaultFormData = {
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
  specialized_data: getDefaultSpecializedData("Shoulder"),
};

// Prepare form data for submission
export const prepareSubmissionData = (formData) => {
  return {
    body_part: formData.body_part,
    hurting_description: formData.hurting_description,
    date_of_onset: formData.date_of_onset,
    aggravating_factors: formData.what_makes_it_worse,
    easing_factors: formData.what_makes_it_better,
    mechanism_of_injury: formData.mechanism_of_injury,
    severity_best: parseInt(formData.severity_best, 10) || 0,
    severity_worst: parseInt(formData.severity_worst, 10) || 0,
    severity_daily_avg: parseInt(formData.severity_daily_avg, 10) || 0,
    irritability_factors: formData.irritability_factors,
    nature_of_pain: formData.nature_of_pain,
    stage: formData.stage,
    stability: formData.stability,
    specialized_data: formData.specialized_data,
  };
};