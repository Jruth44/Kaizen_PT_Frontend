// Sidebar.js
import React from "react";

function Sidebar({ onSelectPage, selectedPage }) {
  return (
    <div className="sidebar">
      <div>
        {/* Header / Branding */}
        <div className="sidebar-header">
          <div className="sidebar-logo" />
          <div className="sidebar-title">Kaizen Physical Wellness</div>
        </div>

        {/* PT-Focused Menu Items */}
        <div className="sidebar-menu">
          <div
            className="sidebar-menu-item"
            style={{ color: selectedPage === "CurrentRecoveryPlan" ? "#ff4646" : "#fff" }}
            onClick={() => onSelectPage("CurrentRecoveryPlan")}
          >
            Current Recovery Plan
          </div>
          <div
            className="sidebar-menu-item"
            style={{ color: selectedPage === "CreateNewRecoveryPlan" ? "#ff4646" : "#fff" }}
            onClick={() => onSelectPage("CreateNewRecoveryPlan")}
          >
            Create a New Recovery Plan
          </div>
          <div
            className="sidebar-menu-item"
            style={{ color: selectedPage === "AddInjury" ? "#ff4646" : "#fff" }}
            onClick={() => onSelectPage("AddInjury")}
          >
            Add an Injury
          </div>
          <div
            className="sidebar-menu-item"
            style={{ color: selectedPage === "TalkWithPT" ? "#ff4646" : "#fff" }}
            onClick={() => onSelectPage("TalkWithPT")}
          >
            Talk with a Physical Therapist
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div>Light Theme</div>
        <div>Profile &amp; Settings</div>
        <div>Subscription</div>
        <div>Sign out</div>
        <div style={{ marginTop: "1rem" }}>Help</div>
        <div>Leave a review</div>
        <div style={{ marginTop: "0.5rem", color: "#aaa" }}>Version: 0.27.8</div>
      </div>
    </div>
  );
}

export default Sidebar;
