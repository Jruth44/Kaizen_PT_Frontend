// TalkWithPT.js
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { getPatientInjuries, getWeeklySchedule } from "../services/api";
import { supabase } from "../supabaseClient";

function TalkWithPT() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [userContext, setUserContext] = useState({
    injuries: [],
    recoveryPlan: null
  });
  const messagesEndRef = useRef(null);
  
  // Fetch user data on component mount
  useEffect(() => {
    async function fetchUserData() {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUserEmail(data.user.email);
        await fetchUserContext(data.user.email);
        
        // Add initial welcome message
        setMessages([
          { 
            role: "assistant", 
            content: "Hello! I'm your PT Assistant. I can help with questions about your recovery plan, exercises, or injury. How can I assist you today?"
          }
        ]);
      }
    }
    
    fetchUserData();
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage]);

  // Fetch user context (injuries and recovery plan)
  const fetchUserContext = async (email) => {
    try {
      const [injuries, recoveryPlan] = await Promise.all([
        getPatientInjuries(email),
        getWeeklySchedule(email)
      ]);
      
      setUserContext({
        injuries,
        recoveryPlan
      });
      
      return { injuries, recoveryPlan };
    } catch (error) {
      console.error("Error fetching user context:", error);
      return { injuries: [], recoveryPlan: null };
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const createSystemPrompt = () => {
    let prompt = "You are a helpful and knowledgeable physical therapist assistant, providing guidance and advice about injuries, exercises, and physical recovery. ";
    
    // Add injury context if available
    if (userContext.injuries && userContext.injuries.length > 0) {
      prompt += "The user has the following injuries:\n";
      userContext.injuries.forEach((injury, index) => {
        prompt += `Injury ${index + 1}: ${injury.body_part} - ${injury.hurting_description}\n`;
        if (injury.diagnosis) {
          prompt += `Diagnosis: ${injury.diagnosis}\n`;
        }
        prompt += `Pain levels: Best=${injury.severity_best || 'N/A'}, Worst=${injury.severity_worst || 'N/A'}\n`;
      });
    }
    
    // Add recovery plan context if available
    if (userContext.recoveryPlan) {
      prompt += "\nThe user has a recovery plan with the following exercises:\n";
      Object.entries(userContext.recoveryPlan).forEach(([day, exercises]) => {
        if (exercises.length > 0) {
          prompt += `${day}: `;
          exercises.forEach((exercise, i) => {
            const exerciseName = exercise.name || (typeof exercise === 'string' ? exercise : 'Exercise');
            prompt += `${exerciseName}${i < exercises.length - 1 ? ', ' : ''}`;
          });
          prompt += "\n";
        }
      });
    }
    
    prompt += "\nProvide concise, helpful answers about physical therapy, exercises, and recovery. Don't suggest medical diagnoses, but you can explain potential causes of symptoms. If you don't know something, be honest about it. Always prioritize safety and recommend consulting a healthcare provider for serious concerns.";
    
    return prompt;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: "user", content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);
    setStreamingMessage("");
    
    try {
      // Create message history for Claude
      const messageHistory = [
        { role: "system", content: createSystemPrompt() },
        ...messages.map(msg => ({
          role: msg.role === "assistant" ? "assistant" : "user",
          content: msg.content
        })),
        userMessage
      ];
      
      // Make streaming API call using fetch
      const response = await fetch(`${process.env.REACT_APP_API_BASE || "http://localhost:8000"}/chat_with_pt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        },
        body: JSON.stringify({
          messages: messageHistory
        }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Process the streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";
      
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }
        
        // Decode chunk and append to streaming message
        const chunk = decoder.decode(value);
        fullContent += chunk;
        setStreamingMessage(fullContent);
      }
      
      // Add final assistant message and clear streaming content
      setMessages(prevMessages => [
        ...prevMessages, 
        { role: "assistant", content: fullContent }
      ]);
      setStreamingMessage("");
      
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prevMessages => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, I encountered an error while processing your message. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="pt-chat-container">
      <div className="pt-chat-header">
        <h3>Talk with a Physical Therapist</h3>
        <p className="text-muted">Ask questions about your exercises, injury, or recovery plan</p>
      </div>
      
      {userContext.injuries.length > 0 && (
        <div className="pt-context-summary">
          <div className="context-card">
            <h4>Your Injuries</h4>
            <ul>
              {userContext.injuries.map((injury, idx) => (
                <li key={idx}>
                  <strong>{injury.body_part}</strong> - {injury.diagnosis || "Undergoing assessment"}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="context-card">
            <h4>Today's Exercises</h4>
            {userContext.recoveryPlan && userContext.recoveryPlan[getToday()] && 
             userContext.recoveryPlan[getToday()].length > 0 ? (
              <ul>
                {userContext.recoveryPlan[getToday()].map((exercise, idx) => (
                  <li key={idx}>
                    {exercise.name || (typeof exercise === 'string' ? exercise : 'Exercise')}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No exercises scheduled for today.</p>
            )}
          </div>
        </div>
      )}
      
      <div className="pt-chat-messages">
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`message ${msg.role === "user" ? "user-message" : "assistant-message"}`}
          >
            <div className="message-bubble">
              {msg.content}
            </div>
          </div>
        ))}
        
        {/* Streaming message */}
        {streamingMessage && (
          <div className="message assistant-message">
            <div className="message-bubble">
              {streamingMessage}
            </div>
          </div>
        )}
        
        {/* Loading indicator */}
        {isLoading && !streamingMessage && (
          <div className="message assistant-message">
            <div className="message-bubble typing">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        {/* Empty div for scrolling to bottom */}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="pt-chat-input">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here..."
          disabled={isLoading}
        />
        <button 
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="send-button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.11 13.6501L13.69 10.0601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Helper function to get current day of week
function getToday() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
}

export default TalkWithPT;