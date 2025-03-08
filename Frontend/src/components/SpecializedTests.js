import React from 'react';
import {
  ShoulderTests,
  KneeTests,
  HipTests,
  BackTests,
  NeckTests,
  AnkleTests,
  WristTests,
  ElbowTests,
  ThighTests,
  HamstringTests,
  CalfTests,
  FootTests,
  UpperBackTests,
  LowerBackTests
} from './tests';

// This component handles rendering the specialized tests based on the selected body part
const SpecializedTests = ({ bodyPart, specializedData, onSpecialTestChange, onAngleChange, handleSelectChange }) => {
  switch(bodyPart) {
    case "Shoulder":
      return (
        <ShoulderTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Knee":
      return (
        <KneeTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Hip":
      return (
        <HipTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Upper Back":
      return (
        <UpperBackTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case "Lower Back":
      return (
        <LowerBackTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case "Back": // For backward compatibility
      return (
        <BackTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case "Neck":
      return (
        <NeckTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Ankle":
      return (
        <AnkleTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Wrist/Hand":
      return (
        <WristTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Arm/Elbow":
      return (
        <ElbowTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Thigh":
      return (
        <ThighTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Hamstring":
      return (
        <HamstringTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Calf":
      return (
        <CalfTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Foot":
      return (
        <FootTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    default:
      return (
        <div style={{ margin: "1rem 0", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
          <p>No specialized tests available for {bodyPart}.</p>
          <p>Please provide general information about your condition in the other sections.</p>
        </div>
      );
  }
};

export default SpecializedTests;