import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CurrentRecoveryPlan from "./components/CurrentRecoveryPlan";
import CreateNewRecoveryPlan from "./components/CreateNewRecoveryPlan";
import AddInjury from "./components/AddInjury";
import TalkWithPT from "./components/TalkWithPT";
import Login from "./components/Login";
import { supabase } from "./supabaseClient";

import "./App.css";
import "./components/TalkWithPT.css";

function App() {
  const [selectedPage, setSelectedPage] = useState("CurrentRecoveryPlan");
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  // Subscribe to auth state changes
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user || null);
    });
    
    // Check for an existing session on initial load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user || null);
    });
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Set Axios default Authorization header when session changes
  useEffect(() => {
    if (session && session.access_token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${session.access_token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [session]);

  // If the user is not logged in, display the Login component
  if (!session) {
    return <Login />;
  }

  let content = null;
  let headerTitle = "";

  switch (selectedPage) {
    case "CurrentRecoveryPlan":
      headerTitle = "Current Recovery Plan";
      content = <CurrentRecoveryPlan />;
      break;
    case "CreateNewRecoveryPlan":
      headerTitle = "Create a New Recovery Plan";
      content = <CreateNewRecoveryPlan userEmail={user.email} />;
      break;
    case "AddInjury":
      headerTitle = "Add an Injury";
      content = <AddInjury userEmail={user.email} />;
      break;
    case "TalkWithPT":
      headerTitle = "Talk with a Physical Therapist";
      content = <TalkWithPT />;
      break;
    default:
      headerTitle = "Kaizen Physical Wellness";
      content = <div>Select an option from the sidebar.</div>;
  }

  return (
    <div className="app-container">
      <Sidebar 
        onSelectPage={setSelectedPage} 
        selectedPage={selectedPage} 
      />
      <div className="main-content">
        <Header title={headerTitle} />
        <div className="main-scroll-area">
          {content}
        </div>
      </div>
    </div>
  );
}

export default App;