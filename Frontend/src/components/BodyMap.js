import React, { useState } from 'react';

const BodyMap = ({ onSelectBodyPart }) => {
  const [hoveredPart, setHoveredPart] = useState(null);
  
  const bodyParts = {
    head: { name: "Head/Neck", path: "M100,30 C120,30 130,50 130,65 C130,80 120,90 100,90 C80,90 70,80 70,65 C70,50 80,30 100,30" },
    leftShoulder: { name: "Left Shoulder", path: "M70,90 C60,90 50,95 45,105 C40,115 40,125 45,135 C50,145 55,155 55,160" },
    rightShoulder: { name: "Right Shoulder", path: "M130,90 C140,90 150,95 155,105 C160,115 160,125 155,135 C150,145 145,155 145,160" },
    chest: { name: "Chest", path: "M70,90 L130,90 L130,140 L70,140 Z" },
    abdomen: { name: "Abdomen", path: "M70,140 L130,140 L130,180 L70,180 Z" },
    leftArm: { name: "Left Arm/Elbow", path: "M55,160 C50,170 45,190 45,210 C45,220 50,230 55,235" },
    rightArm: { name: "Right Arm/Elbow", path: "M145,160 C150,170 155,190 155,210 C155,220 150,230 145,235" },
    leftWrist: { name: "Left Wrist/Hand", path: "M55,235 C45,240 40,255 40,265 C40,275 45,285 55,290" },
    rightWrist: { name: "Right Wrist/Hand", path: "M145,235 C155,240 160,255 160,265 C160,275 155,285 145,290" },
    hip: { name: "Hip/Pelvis", path: "M70,180 L130,180 L140,200 L60,200 Z" },
    leftThigh: { name: "Left Thigh", path: "M60,200 L85,200 L85,260 L65,260 Z" },
    rightThigh: { name: "Right Thigh", path: "M115,200 L140,200 L135,260 L115,260 Z" },
    leftKnee: { name: "Left Knee", path: "M65,260 L85,260 L85,280 L65,280 Z" },
    rightKnee: { name: "Right Knee", path: "M115,260 L135,260 L135,280 L115,280 Z" },
    leftLeg: { name: "Left Leg/Ankle", path: "M65,280 L85,280 L85,340 L65,340 Z" },
    rightLeg: { name: "Right Leg/Ankle", path: "M115,280 L135,280 L135,340 L115,340 Z" },
    leftFoot: { name: "Left Foot", path: "M65,340 L85,340 L90,360 L60,360 Z" },
    rightFoot: { name: "Right Foot", path: "M115,340 L135,340 L140,360 L110,360 Z" },
    lowerBack: { name: "Lower Back", path: "M70,140 L130,140 L130,180 L70,180 Z", transform: "translate(200, 0)" }
  };

  const handleClick = (part) => {
    onSelectBodyPart(part.name);
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Click on where you're experiencing pain</h4>
        {hoveredPart && (
          <div style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            backgroundColor: '#f8f9fa', 
            padding: '0.5rem', 
            borderRadius: '4px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            zIndex: 10
          }}>
            {hoveredPart}
          </div>
        )}
        <svg viewBox="0 0 400 370" style={{ width: '100%', height: 'auto', border: '1px solid #dee2e6', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
          {/* Front View */}
          <g transform="translate(0, 0)">
            <text x="100" y="20" textAnchor="middle" style={{ fontWeight: 'bold' }}>Front View</text>
            
            {/* Body Outline */}
            <path d="M100,30 C120,30 130,50 130,65 C130,80 120,90 100,90 C80,90 70,80 70,65 C70,50 80,30 100,30" 
                  fill="#fff" stroke="#000" strokeWidth="1.5" />
            
            <rect x="70" y="90" width="60" height="50" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="70" y="140" width="60" height="40" fill="#fff" stroke="#000" strokeWidth="1.5" />
            
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
            
            {/* Hips/Legs */}
            <path d="M70,180 L130,180 L140,200 L60,200 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
            
            {/* Left Leg */}
            <rect x="65" y="200" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="260" width="20" height="20" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="280" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <path d="M65,340 L85,340 L90,360 L60,360 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
            
            {/* Right Leg */}
            <rect x="115" y="200" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="260" width="20" height="20" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="280" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <path d="M115,340 L135,340 L140,360 L110,360 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
          </g>
          
          {/* Back View */}
          <g transform="translate(200, 0)">
            <text x="100" y="20" textAnchor="middle" style={{ fontWeight: 'bold' }}>Back View</text>
            
            {/* Body Outline - Back View */}
            <path d="M100,30 C120,30 130,50 130,65 C130,80 120,90 100,90 C80,90 70,80 70,65 C70,50 80,30 100,30" 
                  fill="#fff" stroke="#000" strokeWidth="1.5" />
            
            <rect x="70" y="90" width="60" height="50" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="70" y="140" width="60" height="40" fill="#fff" stroke="#000" strokeWidth="1.5" />
            
            {/* Left Arm - Back View */}
            <path d="M70,90 C60,90 50,95 45,105 C40,115 40,125 45,135 C50,145 55,155 55,160" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M55,160 C50,170 45,190 45,210 C45,220 50,230 55,235" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M55,235 C45,240 40,255 40,265 C40,275 45,285 55,290" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            
            {/* Right Arm - Back View */}
            <path d="M130,90 C140,90 150,95 155,105 C160,115 160,125 155,135 C150,145 145,155 145,160" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M145,160 C150,170 155,190 155,210 C155,220 150,230 145,235" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            <path d="M145,235 C155,240 160,255 160,265 C160,275 155,285 145,290" 
                  fill="none" stroke="#000" strokeWidth="1.5" />
            
            {/* Hips/Legs - Back View */}
            <path d="M70,180 L130,180 L140,200 L60,200 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
            
            {/* Left Leg - Back View */}
            <rect x="65" y="200" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="260" width="20" height="20" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="65" y="280" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <path d="M65,340 L85,340 L90,360 L60,360 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
            
            {/* Right Leg - Back View */}
            <rect x="115" y="200" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="260" width="20" height="20" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <rect x="115" y="280" width="20" height="60" fill="#fff" stroke="#000" strokeWidth="1.5" />
            <path d="M115,340 L135,340 L140,360 L110,360 Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
          </g>
          
          {/* Clickable Areas - Front */}
          {Object.entries(bodyParts).map(([id, part]) => (
            <path
              key={id}
              d={part.path}
              fill="rgba(0, 0, 255, 0.1)"
              stroke="transparent"
              strokeWidth="1"
              style={{ cursor: 'pointer' }}
              onClick={() => handleClick(part)}
              onMouseEnter={() => setHoveredPart(part.name)}
              onMouseLeave={() => setHoveredPart(null)}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default BodyMap;