// Sidebar.js
import React from "react";
import { supabase } from "../supabaseClient";

function Sidebar({ onSelectPage, selectedPage }) {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="sidebar">
      {/* Header / Branding */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 6L10 18.5M7.5 8.5L3.5 12L7.5 15.5M16.5 8.5L20.5 12L16.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="sidebar-title">Kaizen Physical Wellness</div>
      </div>

      {/* PT-Focused Menu Items */}
      <div className="sidebar-menu">
        <div
          className={`sidebar-menu-item ${selectedPage === "CurrentRecoveryPlan" ? "active" : ""}`}
          onClick={() => onSelectPage("CurrentRecoveryPlan")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 7.58008V8.58008C16.5 9.40008 15.83 10.0801 15 10.0801H9C8.18 10.0801 7.5 9.41008 7.5 8.58008V7.58008C7.5 6.76008 8.17 6.08008 9 6.08008H15C15.83 6.08008 16.5 6.75008 16.5 7.58008Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.13623 14H8.14871M12 14H12.0125M15.8638 14H15.8763M8.13623 17.5H8.14871M12 17.5H12.0125M15.8638 17.5H15.8763" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Current Recovery Plan
        </div>
        <div
          className={`sidebar-menu-item ${selectedPage === "CreateNewRecoveryPlan" ? "active" : ""}`}
          onClick={() => onSelectPage("CreateNewRecoveryPlan")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M8 12H16M12 16V8M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Create a New Recovery Plan
        </div>
        <div
          className={`sidebar-menu-item ${selectedPage === "AddInjury" ? "active" : ""}`}
          onClick={() => onSelectPage("AddInjury")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M8.5 14.3L5.5 16.3C4.9 16.7 4 16.3 4 15.5V8.5C4 7.7 4.9 7.3 5.5 7.7L8.5 9.7M13 18V6C13 5.2 12.1 4.8 11.5 5.2L8.5 7.2C8.2 7.4 8 7.7 8 8.1V15.9C8 16.3 8.2 16.6 8.5 16.8L11.5 18.8C12.1 19.2 13 18.8 13 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 6V18L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add an Injury
        </div>
        <div
          className={`sidebar-menu-item ${selectedPage === "TalkWithPT" ? "active" : ""}`}
          onClick={() => onSelectPage("TalkWithPT")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.9965 11H16.0054M11.9955 11H12.0045M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Talk with a Physical Therapist
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-footer-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 12H21M3 12H4M12 20V21M12 3V4M17.6568 17.6569L18.364 18.3641M5.63599 5.63605L6.34309 6.34315M6.34309 17.6569L5.63599 18.3641M18.364 5.63605L17.6568 6.34315" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Light Theme
        </div>
        <div className="sidebar-footer-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Profile &amp; Settings
        </div>
        <div className="sidebar-footer-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M13.5 12L9.5 12M22 15C22 18.87 18.87 22 15 22L16.05 20.25M2 9C2 5.13 5.13 2 9 2L7.95 3.75M15 2C18.87 2 22 5.13 22 9C22 10.39 21.65 11.68 21.03 12.8M9 22C5.13 22 2 18.87 2 15C2 13.61 2.35 12.32 2.97 11.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Subscription
        </div>
        <div className="sidebar-footer-item" onClick={handleSignOut}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54M15 12H3.62M5.85 8.64999L2.5 12L5.85 15.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Sign out
        </div>
        <div className="sidebar-divider"></div>
        <div className="sidebar-footer-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16.5V14.5M12 8.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Help
        </div>
        <div className="sidebar-footer-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon">
            <path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12H14.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.1301 16.3L18.0001 15.16V18.18L15.0701 21.1C14.7801 21.39 14.7801 21.86 15.0701 22.15C15.3601 22.44 15.8301 22.44 16.1201 22.15L19.1401 19.15L19.1301 16.3Z" fill="currentColor"/>
          </svg>
          Leave a review
        </div>
        <div className="version-info">Version: 1.0.0</div>
      </div>
    </div>
  );
}

export default Sidebar;