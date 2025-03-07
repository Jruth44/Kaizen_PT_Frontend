import React from 'react';

const PainRatingScale = ({ painRatings, handleChange }) => {
  return (
    <div style={{ 
      marginBottom: "2rem", 
      marginTop: "2rem",
      backgroundColor: "#f8f9fa",
      padding: "1.5rem",
      borderRadius: "8px"
    }}>
      <h3 style={{ color: "#3c63a7", marginBottom: "1rem" }}>Pain Rating Scale (0-10)</h3>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1.5rem" }}>
        Rate your pain on a scale from 0 (no pain) to 10 (worst pain imaginable).
      </p>
      
      <div style={{ 
        display: "flex", 
        gap: "1.5rem", 
        flexWrap: "wrap",
        marginBottom: "1rem"
      }}>
        <div style={{ flex: "1 1 150px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Pain at Best (0-10):
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="range"
              name="severity_best"
              min="0"
              max="10"
              value={painRatings.severity_best}
              onChange={handleChange}
              style={{ width: "100%", height: "8px" }}
            />
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              fontSize: "0.8rem",
              color: "#666"
            }}>
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
          <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "0.5rem" }}>
            {painRatings.severity_best}
          </div>
        </div>
        
        <div style={{ flex: "1 1 150px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Pain at Worst (0-10):
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="range"
              name="severity_worst"
              min="0"
              max="10"
              value={painRatings.severity_worst}
              onChange={handleChange}
              style={{ width: "100%", height: "8px" }}
            />
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              fontSize: "0.8rem",
              color: "#666"
            }}>
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
          <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "0.5rem" }}>
            {painRatings.severity_worst}
          </div>
        </div>
        
        <div style={{ flex: "1 1 150px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Daily Average Pain (0-10):
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="range"
              name="severity_daily_avg"
              min="0"
              max="10"
              value={painRatings.severity_daily_avg}
              onChange={handleChange}
              style={{ width: "100%", height: "8px" }}
            />
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              fontSize: "0.8rem",
              color: "#666"
            }}>
              <span>0</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>
          <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "0.5rem" }}>
            {painRatings.severity_daily_avg}
          </div>
        </div>
      </div>
      
      <div style={{ 
        padding: "0.75rem", 
        backgroundColor: "#e6edf7", 
        borderRadius: "4px", 
        fontSize: "0.9rem",
        color: "#3c63a7",
        marginTop: "1rem",
        borderLeft: "3px solid #3c63a7"
      }}>
        <strong>Understanding the pain scale:</strong>
        <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
          <li><strong>0:</strong> No pain</li>
          <li><strong>1-3:</strong> Mild pain (annoying, but doesn't interfere with activities)</li>
          <li><strong>4-6:</strong> Moderate pain (interferes with some activities)</li>
          <li><strong>7-9:</strong> Severe pain (prevents many activities)</li>
          <li><strong>10:</strong> Worst pain imaginable (completely incapacitating)</li>
        </ul>
      </div>
    </div>
  );
};

export default PainRatingScale;