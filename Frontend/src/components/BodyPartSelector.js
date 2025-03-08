// /src/components/BodyPartSelector.js
import React from 'react';

function BodyPartSelector({ selectedBodyPart, onSelectBodyPart }) {
  const bodyParts = [
    "Shoulder",
    "Neck",
    "Upper Back",
    "Lower Back",
    "Hip",
    "Knee",
    "Ankle",
    "Wrist/Hand",
    "Arm/Elbow",
    "Thigh",
    "Hamstring",
    "Calf",
    "Foot"
  ];

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{ marginBottom: '1rem', color: '#3c63a7' }}>
        Select the area where you're experiencing pain
      </h3>
      
      <div style={{ maxWidth: '500px' }}>
        <select
          value={selectedBodyPart}
          onChange={(e) => onSelectBodyPart(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            backgroundColor: '#fff'
          }}
        >
          {bodyParts.map((part) => (
            <option key={part} value={part}>
              {part}
            </option>
          ))}
        </select>
      </div>
      
      <div
        style={{
          marginTop: '1rem',
          backgroundColor: 'rgba(255, 92, 92, 0.1)',
          padding: '0.75rem',
          borderRadius: '4px',
          border: '1px solid rgba(255, 92, 92, 0.3)',
          color: '#ff5c5c',
          fontWeight: '500',
          maxWidth: '500px'
        }}
      >
        Selected: {selectedBodyPart}
      </div>
    </div>
  );
}

export default BodyPartSelector;