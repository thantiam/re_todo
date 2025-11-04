import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// Normal (upright) weights
import "@fontsource/jetbrains-mono/100.css"; // Thin
import "@fontsource/jetbrains-mono/200.css"; // Extra Light
import "@fontsource/jetbrains-mono/300.css"; // Light
import "@fontsource/jetbrains-mono/400.css"; // Regular
import "@fontsource/jetbrains-mono/500.css"; // Medium
import "@fontsource/jetbrains-mono/600.css"; // SemiBold
import "@fontsource/jetbrains-mono/700.css"; // Bold
import "@fontsource/jetbrains-mono/800.css"; // ExtraBold

// Italic weights (optional)
import "@fontsource/jetbrains-mono/100-italic.css";
import "@fontsource/jetbrains-mono/200-italic.css";
import "@fontsource/jetbrains-mono/300-italic.css";
import "@fontsource/jetbrains-mono/400-italic.css";
import "@fontsource/jetbrains-mono/500-italic.css";
import "@fontsource/jetbrains-mono/600-italic.css";
import "@fontsource/jetbrains-mono/700-italic.css";
import "@fontsource/jetbrains-mono/800-italic.css";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CssBaseline/>
  </StrictMode>,
)
