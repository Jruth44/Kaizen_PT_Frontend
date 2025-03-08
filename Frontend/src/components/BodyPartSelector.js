// /src/components/BodyMap.js
import React, { useState } from 'react';
import BodyHighlighter from 'react-body-highlighter';
// The library ships with built-in front/back images + region definitions:
import frontSVG from 'react-body-highlighter/lib/assets/frontSVG';
import backSVG from 'react-body-highlighter/lib/assets/backSVG';
import 'react-body-highlighter/dist/index.css';

function BodyMap({ selectedBodyPart, onSelectBodyPart }) {
  // If you only want to allow one selected area at a time, store a single string or array of length 1.
  // We'll store an array so you can easily allow multiple if you wish.
  const [selectedAreas, setSelectedAreas] = useState([]);

  // Example: If you want to map library’s region IDs to your form’s body part labels,
  // define a mapping. (You can refine this as needed.)
  const bodyPartMap = {
    // These IDs come from react-body-highlighter’s default definitions:
    'head-front': 'Neck',
    'shoulder-left-front': 'Left Shoulder',
    'shoulder-right-front': 'Right Shoulder',
    'arm-left-front': 'Left Arm/Elbow',
    'arm-right-front': 'Right Arm/Elbow',
    'hand-left-front': 'Left Wrist/Hand',
    'hand-right-front': 'Right Wrist/Hand',
    'chest-front': 'Chest',
    'abdomen-front': 'Abdomen',
    'thigh-left-front': 'Left Thigh',
    'thigh-right-front': 'Right Thigh',
    'knee-left-front': 'Left Knee',
    'knee-right-front': 'Right Knee',
    'leg-left-front': 'Left Leg/Ankle',
    'leg-right-front': 'Right Leg/Ankle',
    'foot-left-front': 'Left Foot',
    'foot-right-front': 'Right Foot',

    // Similarly for back side (IDs might differ slightly):
    'head-back': 'Neck',
    'shoulder-left-back': 'Left Shoulder',
    'shoulder-right-back': 'Right Shoulder',
    'arm-left-back': 'Left Arm/Elbow',
    'arm-right-back': 'Right Arm/Elbow',
    'hand-left-back': 'Left Wrist/Hand',
    'hand-right-back': 'Right Wrist/Hand',
    'upperback-back': 'Upper Back',
    'lowerback-back': 'Lower Back',
    'glutes-back': 'Hip/Gluteal',
    'thigh-left-back': 'Left Hamstring',
    'thigh-right-back': 'Right Hamstring',
    'knee-left-back': 'Left Knee',
    'knee-right-back': 'Right Knee',
    'calf-left-back': 'Left Calf',
    'calf-right-back': 'Right Calf',
    'foot-left-back': 'Left Ankle/Heel',
    'foot-right-back': 'Right Ankle/Heel',
  };

  // Handler when a region is clicked:
  const handleClickArea = (area) => {
    // `area` is an object like { id: 'shoulder-left-front', label: 'Shoulder Left', ... }
    // Convert to your form’s body part label:
    const mappedBodyPart = bodyPartMap[area.id] || area.label;

    // If you only want to allow a single selection, just set a single area in state:
    setSelectedAreas([area.id]); // store the region ID
    // Then notify parent:
    onSelectBodyPart(mappedBodyPart);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <h3 style={{ marginBottom: '1rem', color: '#3c63a7' }}>
        Click on where you're experiencing pain
      </h3>

      <BodyHighlighter
        // Provide the default front/back silhouettes from the library:
        frontSVG={frontSVG}
        backSVG={backSVG}
        // We only want to highlight the region(s) in `selectedAreas`:
        selectedAreas={selectedAreas}
        // The callback that fires whenever a region is clicked:
        onClick={handleClickArea}
        // The highlight color and opacity for selected regions:
        highlightColor="#ff5c5c"
        highlightOpacity={0.5}
        // If you want to allow multiple areas, set multiple={true}
        multiple={false}
      />

      {/* Display the user’s selected part */}
      {selectedAreas.length > 0 && (
        <div
          style={{
            marginTop: '1rem',
            backgroundColor: 'rgba(255, 92, 92, 0.1)',
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid rgba(255, 92, 92, 0.3)',
            color: '#ff5c5c',
            fontWeight: '500',
          }}
        >
          Selected: {selectedBodyPart}
        </div>
      )}
    </div>
  );
}

export default BodyMap;
