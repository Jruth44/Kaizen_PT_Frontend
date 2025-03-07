import React from 'react';

const SecondaryInfoFields = ({ formData, handleChange }) => {
  return (
    <div>
      {/* Nature, Stage, Stability */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Irritability Factors:</label>
        <textarea
          name="irritability_factors"
          value={formData.irritability_factors}
          onChange={handleChange}
          placeholder="What activities or movements quickly aggravate your symptoms?"
          style={{ 
            width: "100%", 
            minHeight: "100px", 
            padding: "0.75rem", 
            borderRadius: "4px", 
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Nature of Pain:</label>
        <textarea
          name="nature_of_pain"
          value={formData.nature_of_pain}
          onChange={handleChange}
          placeholder="E.g. Clicking, sharp, throbbing, burning..."
          style={{ 
            width: "100%", 
            minHeight: "100px", 
            padding: "0.75rem", 
            borderRadius: "4px", 
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
          required
        />
      </div>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        <div style={{ flex: "1 1 200px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Stage of Injury:</label>
          <select
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            style={{ 
              width: "100%", 
              padding: "0.75rem", 
              borderRadius: "4px", 
              border: "1px solid #ccc",
              fontSize: "1rem",
              backgroundColor: "#fff"
            }}
          >
            <option value="Acute">Acute (recent, 0-2 weeks)</option>
            <option value="Subacute">Subacute (2-6 weeks)</option>
            <option value="Chronic">Chronic (6+ weeks)</option>
            <option value="Acute on Chronic">Acute on Chronic</option>
          </select>
        </div>

        <div style={{ flex: "1 1 200px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>Stability:</label>
          <select
            name="stability"
            value={formData.stability}
            onChange={handleChange}
            style={{ 
              width: "100%", 
              padding: "0.75rem", 
              borderRadius: "4px", 
              border: "1px solid #ccc",
              fontSize: "1rem",
              backgroundColor: "#fff"
            }}
          >
            <option value="Improving">Improving</option>
            <option value="Worsening">Worsening</option>
            <option value="Not changing">Not changing</option>
            <option value="Fluctuating">Fluctuating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SecondaryInfoFields;