import React from 'react';

const BasicInfoFields = ({ formData, handleChange }) => {
  // Helper function to sanitize input and prevent script injection
  const sanitizeInput = (value) => {
    // Basic sanitization - remove HTML tags and script elements
    return value.replace(/<\/?[^>]+(>|$)/g, "");
  };

  // Enhanced handler to sanitize inputs
  const handleSanitizedChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    // Create a synthetic event with sanitized value
    const sanitizedEvent = {
      target: {
        name: name,
        value: sanitizedValue
      }
    };
    
    handleChange(sanitizedEvent);
  };

  return (
    <div>
      {/* Hurting Description */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Describe Where It Hurts and How It Feels:
        </label>
        <textarea
          name="hurting_description"
          value={formData.hurting_description}
          onChange={handleSanitizedChange}
          placeholder="E.g. 'A sharp pain in the front of my shoulder...'"
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

      {/* Date of Onset */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
          When Did This Injury Start (Date of Onset):
        </label>
        <input
          type="text"
          name="date_of_onset"
          value={formData.date_of_onset}
          onChange={handleSanitizedChange}
          placeholder="E.g. '2 weeks ago', '06/01/2025', etc."
          style={{ 
            width: "100%", 
            padding: "0.75rem", 
            borderRadius: "4px", 
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
          required
        />
      </div>

      {/* Aggravating Factors */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
          What Makes It Worse? (Aggravating Factors)
        </label>
        <textarea
          name="what_makes_it_worse"
          value={formData.what_makes_it_worse}
          onChange={handleSanitizedChange}
          placeholder="E.g. 'Reaching overhead, lifting heavy objects...'"
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

      {/* Easing Factors */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
          What Makes It Better? (Easing Factors)
        </label>
        <textarea
          name="what_makes_it_better"
          value={formData.what_makes_it_better}
          onChange={handleSanitizedChange}
          placeholder="E.g. 'Applying ice, resting, taking ibuprofen...'"
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

      {/* Mechanism of Injury */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
          How Did It Happen? (Mechanism of Injury)
        </label>
        <input
          type="text"
          name="mechanism_of_injury"
          value={formData.mechanism_of_injury}
          onChange={handleSanitizedChange}
          placeholder="E.g. 'Fell on my arm', 'Twisted knee playing soccer'..."
          style={{ 
            width: "100%", 
            padding: "0.75rem", 
            borderRadius: "4px", 
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
          required
        />
      </div>
    </div>
  );
};

export default BasicInfoFields;