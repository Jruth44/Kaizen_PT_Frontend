import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/design-system.css'; // Import the design system first
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);