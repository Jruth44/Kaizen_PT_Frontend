import React, { useState } from 'react';

const BodyMap = ({ onSelectBodyPart, selectedBodyPart }) => {
  const [hoveredPart, setHoveredPart] = useState(null);
  
  // Define the body parts with improved paths and styling
  const bodyParts = {
    // Front view body parts
    head: { 
      name: "Head/Neck", 
      path: "M100,30 C120,30 130,50 130,65 C130,80 120,90 100,90 C80,90 70,80 70,65 C70,50 80,30 100,30", 
      viewBox: "front" 
    },
    chest: { 
      name: "Chest", 
      path: "M70,90 L130,90 L130,140 L70,140 Z", 
      viewBox: "front" 
    },
    abdomen: { 
      name: "Abdomen", 
      path: "M70,140 L130,140 L130,180 L70,180 Z", 
      viewBox: "front" 
    },
    leftShoulder: { 
      name: "Left Shoulder", 
      path: "M70,90 C60,90 50,95 45,105 C40,115 40,125 45,135 C50,145 55,155 55,160", 
      viewBox: "front" 
    },
    rightShoulder: { 
      name: "Right Shoulder", 
      path: "M130,90 C140,90 150,95 155,105 C160,115 160,125 155,135 C150,145 145,155 145,160", 
      viewBox: "front" 
    },
    leftArm: { 
      name: "Left Arm/Elbow", 
      path: "M55,160 C50,170 45,190 45,210 C45,220 50,230 55,235", 
      viewBox: "front" 
    },
    rightArm: { 
      name: "Right Arm/Elbow", 
      path: "M145,160 C150,170 155,190 155,210 C155,220 150,230 145,235", 
      viewBox: "front" 
    },
    leftWrist: { 
      name: "Left Wrist/Hand", 
      path: "M55,235 C45,240 40,255 40,265 C40,275 45,285 55,290", 
      viewBox: "front" 
    },
    rightWrist: { 
      name: "Right Wrist/Hand", 
      path: "M145,235 C155,240 160,255 160,265 C160,275 155,285 145,290", 
      viewBox: "front" 
    },
    hip: { 
      name: "Hip/Pelvis", 
      path: "M70,180 L130,180 L140,200 L60,200 Z", 
      viewBox: "front" 
    },
    leftThigh: { 
      name: "Left Thigh", 
      path: "M65,200 L85,200 L85,260 L65,260 Z", 
      viewBox: "front" 
    },
    rightThigh: { 
      name: "Right Thigh", 
      path: "M115,200 L135,200 L135,260 L115,260 Z", 
      viewBox: "front" 
    },
    leftKnee: { 
      name: "Left Knee", 
      path: "M65,260 L85,260 L85,280 L65,280 Z", 
      viewBox: "front" 
    },
    rightKnee: { 
      name: "Right Knee", 
      path: "M115,260 L135,260 L135,280 L115,280 Z", 
      viewBox: "front" 
    },
    leftLeg: { 
      name: "Left Leg/Ankle", 
      path: "M65,280 L85,280 L85,340 L65,340 Z", 
      viewBox: "front" 
    },
    rightLeg: { 
      name: "Right Leg/Ankle", 
      path: "M115,280 L135,280 L135,340 L115,340 Z", 
      viewBox: "front" 
    },
    leftFoot: { 
      name: "Left Foot", 
      path: "M65,340 L85,340 L90,360 L60,360 Z", 
      viewBox: "front" 
    },
    rightFoot: { 
      name: "Right Foot", 
      path: "M115,340 L135,340 L140,360 L110,360 Z", 
      viewBox: "front" 
    },
    
    // Back view body parts
    backHead: { 
      name: "Head/Neck", 
      path: "M100,30 C120,30 130,50 130,65 C130,80 120,90 100,90 C80,90 70,80 70,65 C70,50 80,30 100,30", 
      viewBox: "back" 
    },
    upperBack: { 
      name: "Upper Back", 
      path: "M70,90 L130,90 L130,140 L70,140 Z", 
      viewBox: "back" 
    },
    lowerBack: { 
      name: "Lower Back", 
      path: "M70,140 L130,140 L130,180 L70,180 Z", 
      viewBox: "back" 
    },
    leftBackShoulder: { 
      name: "Left Shoulder", 
      path: "M70,90 C60,90 50,95 45,105 C40,115 40,125 45,135 C50,145 55,155 55,160", 
      viewBox: "back" 
    },
    rightBackShoulder: { 
      name: "Right Shoulder", 
      path: "M130,90 C140,90 150,95 155,105 C160,115 160,125 155,135 C150,145 145,155 145,160", 
      viewBox: "back" 
    },
    leftBackArm: { 
      name: "Left Arm/Elbow", 
      path: "M55,160 C50,170 45,190 45,210 C45,220 50,230 55,235", 
      viewBox: "back" 
    },
    rightBackArm: { 
      name: "Right Arm/Elbow", 
      path: "M145,160 C150,170 155,190 155,210 C155,220 150,230 145,235", 
      viewBox: "back" 
    },
    leftBackWrist: { 
      name: "Left Wrist/Hand", 
      path: "M55,235 C45,240 40,255 40,265 C40,275 45,285 55,290", 
      viewBox: "back" 
    },
    rightBackWrist: { 
      name: "Right Wrist/Hand", 
      path: "M145,235 C155,240 160,255 160,265 C160,275 155,285 145,290", 
      viewBox: "back" 
    },
    backHip: { 
      name: "Hip/Gluteal", 
      path: "M70,180 L130,180 L140,200 L60,200 Z", 
      viewBox: "back" 
    },
    leftBackThigh: { 
      name: "Left Hamstring", 
      path: "M65,200 L85,200 L85,260 L65,260 Z", 
      viewBox: "back" 
    },
    rightBackThigh: { 
      name: "Right Hamstring", 
      path: "M115,200 L135,200 L135,260 L115,260 Z", 
      viewBox: "back" 
    },
    leftBackKnee: { 
      name: "Left Knee", 
      path: "M65,260 L85,260 L85,280 L65,280 Z", 
      viewBox: "back" 
    },
    rightBackKnee: { 
      name: "Right Knee", 
      path: "M115,260 L135,260 L135,280 L115,280 Z", 
      viewBox: "back" 
    },
    leftBackLeg: { 
      name: "Left Calf", 
      path: "M65,280 L85,280 L85,340 L65,340 Z", 
      viewBox: "back" 
    },
    rightBackLeg: { 
      name: "Right Calf", 
      path: "M115,280 L135,280 L135,340 L115,340 Z", 
      viewBox: "back" 
    },
    leftBackFoot: { 
      name: "Left Ankle/Heel", 
      path: "M65,340 L85,340 L90,360 L60,360 Z", 
      viewBox: "back" 
    },
    rightBackFoot: { 
      name: "Right Ankle/Heel", 
      path: "M115,340 L135,340 L140,360 L110,360 Z", 
      viewBox: "back" 
    },
  };

  // Map part names from the body map to form selection options
  const bodyPartMap = {
    "Head/Neck": "Neck",
    "Left Shoulder": "Shoulder",
    "Right Shoulder": "Shoulder",
    "Upper Back": "Back",
    "Lower Back": "Back",
    "Hip/Gluteal": "Hip",
    "Left Knee": "Knee",
    "Right Knee": "Knee",
    "Left Ankle/Heel": "Ankle",
    "Right Ankle/Heel": "Ankle",
    "Left Wrist/Hand": "Wrist",
    "Right Wrist/Hand": "Wrist",
    "Left Arm/Elbow": "Elbow",
    "Right Arm/Elbow": "Elbow",
  };

  const handleClick = (part) => {
    // Get the corresponding form value from the map or use the part name
    const formValue = bodyPartMap[part.name] || part.name;
    onSelectBodyPart(formValue);
  };

  // Function to determine if a body part is selected
  const isSelected = (part) => {
    const formValue = bodyPartMap[part.name] || part.name;
    return selectedBodyPart === formValue;
  };

  return (
    <div className="body-map-container" style={{ 
      textAlign: 'center', 
      marginBottom: '1.5rem', 
      backgroundColor: '#f5f8fa',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: '1rem', color: '#3c63a7' }}>Click on where you're experiencing pain</h3>
      
      {hoveredPart && (
        <div style={{ 
          backgroundColor: 'rgba(60, 99, 167, 0.1)',
          color: '#3c63a7',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          marginBottom: '1rem',
          fontWeight: '500',
          display: 'inline-block'
        }}>
          {hoveredPart}
        </div>
      )}
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <svg viewBox="0 0 200 380" style={{ width: '180px', height: 'auto' }}>
          {/* Front View Title */}
          <text x="100" y="20" textAnchor="middle" fontWeight="bold" fontSize="12">Front View</text>
          
          {/* Body Outline - Front */}
          <g>
            {/* Head */}
            <path d="M100,30 C120,30 130,50 130,65 C130,80 120,90 100,90 C80,90 70,80 70,65 C70,50 80,30 100,30" 
                  fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Torso */}
            <rect x="70" y="90" width="60" height="50" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="70" y="140" width="60" height="40" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Left Arm */}
            <path d="M70,90 C60,90 50,95 45,105 C40,115 40,125 45,135 C50,145 55,155 55,160" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M55,160 C50,170 45,190 45,210 C45,220 50,230 55,235" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M55,235 C45,240 40,255 40,265 C40,275 45,285 55,290" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            
            {/* Right Arm */}
            <path d="M130,90 C140,90 150,95 155,105 C160,115 160,125 155,135 C150,145 145,155 145,160" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M145,160 C150,170 155,190 155,210 C155,220 150,230 145,235" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M145,235 C155,240 160,255 160,265 C160,275 155,285 145,290" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            
            {/* Hips */}
            <path d="M70,180 L130,180 L140,200 L60,200 Z" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Left Leg */}
            <rect x="65" y="200" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="260" width="20" height="20" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="280" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <path d="M65,340 L85,340 L90,360 L60,360 Z" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Right Leg */}
            <rect x="115" y="200" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="260" width="20" height="20" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="280" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <path d="M115,340 L135,340 L140,360 L110,360 Z" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
          </g>
          
          {/* Clickable Areas - Front View */}
          {Object.entries(bodyParts)
            .filter(([id, part]) => part.viewBox === "front")
            .map(([id, part]) => (
              <path
                key={id}
                d={part.path}
                fill={isSelected(part) ? "rgba(255, 92, 92, 0.5)" : "rgba(60, 99, 167, 0.1)"}
                stroke={isSelected(part) ? "#ff5c5c" : "transparent"}
                strokeWidth="2"
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => handleClick(part)}
                onMouseEnter={() => setHoveredPart(part.name)}
                onMouseLeave={() => setHoveredPart(null)}
              />
          ))}
        </svg>
        
        <svg viewBox="0 0 200 380" style={{ width: '180px', height: 'auto' }}>
          {/* Back View Title */}
          <text x="100" y="20" textAnchor="middle" fontWeight="bold" fontSize="12">Back View</text>
          
          {/* Body Outline - Back */}
          <g>
            {/* Head */}
            <path d="M100,30 C120,30 130,50 130,65 C130,80 120,90 100,90 C80,90 70,80 70,65 C70,50 80,30 100,30" 
                  fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Torso */}
            <rect x="70" y="90" width="60" height="50" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="70" y="140" width="60" height="40" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Left Arm */}
            <path d="M70,90 C60,90 50,95 45,105 C40,115 40,125 45,135 C50,145 55,155 55,160" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M55,160 C50,170 45,190 45,210 C45,220 50,230 55,235" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M55,235 C45,240 40,255 40,265 C40,275 45,285 55,290" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            
            {/* Right Arm */}
            <path d="M130,90 C140,90 150,95 155,105 C160,115 160,125 155,135 C150,145 145,155 145,160" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M145,160 C150,170 155,190 155,210 C155,220 150,230 145,235" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M145,235 C155,240 160,255 160,265 C160,275 155,285 145,290" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            
            {/* Hips */}
            <path d="M70,180 L130,180 L140,200 L60,200 Z" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Left Leg */}
            <rect x="65" y="200" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="260" width="20" height="20" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="280" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <path d="M65,340 L85,340 L90,360 L60,360 Z" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            
            {/* Right Leg */}
            <rect x="115" y="200" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="260" width="20" height="20" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="280" width="20" height="60" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
            <path d="M115,340 L135,340 L140,360 L110,360 Z" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
          </g>
          
          {/* Clickable Areas - Back View */}
          {Object.entries(bodyParts)
            .filter(([id, part]) => part.viewBox === "back")
            .map(([id, part]) => (
              <path
                key={id}
                d={part.path}
                fill={isSelected(part) ? "rgba(255, 92, 92, 0.5)" : "rgba(60, 99, 167, 0.1)"}
                stroke={isSelected(part) ? "#ff5c5c" : "transparent"}
                strokeWidth="2"
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => handleClick(part)}
                onMouseEnter={() => setHoveredPart(part.name)}
                onMouseLeave={() => setHoveredPart(null)}
              />
          ))}
        </svg>
      </div>
      
      <div style={{ 
        marginTop: '1rem', 
        color: '#4a5568', 
        fontSize: '0.9rem', 
        fontStyle: 'italic' 
      }}>
        Click on the body part where you're experiencing pain.
      </div>
      
      {selectedBodyPart && (
        <div style={{ 
          marginTop: '1rem', 
          backgroundColor: 'rgba(255, 92, 92, 0.1)', 
          padding: '0.75rem',
          borderRadius: '4px',
          border: '1px solid rgba(255, 92, 92, 0.3)',
          color: '#ff5c5c',
          fontWeight: '500'
        }}>
          Selected: {selectedBodyPart}
        </div>
      )}
    </div>
  );
};

export default BodyMap;