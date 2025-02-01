// frontend/src/components/Login.js
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client using environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [infoMsg, setInfoMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);

    if (isRegistering) {
      // Registration flow
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        // Registration was successful.
        // Depending on your Supabase settings, the user may need to verify their email.
        setInfoMsg("Registration successful! Please check your email for a confirmation link.");
        // Optionally, you can auto-login the user here if you wish.
      }
    } else {
      // Login flow
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        // On successful login, pass the session to the parent component.
        onLogin(data.session);
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        {errorMsg && <div style={{ color: 'red', marginBottom: '1rem' }}>{errorMsg}</div>}
        {infoMsg && <div style={{ color: 'green', marginBottom: '1rem' }}>{infoMsg}</div>}
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          {isRegistering ? "Register" : "Log In"}
        </button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        {isRegistering ? (
          <p>
            Already have an account?{' '}
            <button onClick={() => setIsRegistering(false)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'blue' }}>
              Log In
            </button>
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <button onClick={() => setIsRegistering(true)} style={{ textDecoration: 'underline', background: 'none', border: 'none', color: 'blue' }}>
              Register
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
