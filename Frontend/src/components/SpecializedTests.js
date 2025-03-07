import React from 'react';
import {
  ShoulderTests,
  KneeTests,
  HipTests,
  BackTests,
  NeckTests,
  AnkleTests,
  WristTests,
  ElbowTests
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
    case "Back":
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
    case "Wrist":
      return (
        <WristTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    case "Elbow":
      return (
        <ElbowTests 
          specializedData={specializedData} 
          onSpecialTestChange={onSpecialTestChange} 
          onAngleChange={onAngleChange} 
        />
      );
    default:
      return null;
  }
};

export default SpecializedTests;