import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
import { Analytics } from "@vercel/analytics/react";
import './main.css';
import './styles/variables.css';
import App from './App.jsx';


// Update the reporting function to use the new names
function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);  // Cumulative Layout Shift
    onFID(onPerfEntry);  // First Input Delay
    onFCP(onPerfEntry);  // First Contentful Paint
    onLCP(onPerfEntry);  // Largest Contentful Paint
    onTTFB(onPerfEntry); // Time to First Byte
  }
}

// Example logging function
function logWebVitals(metric) {
  // The metric object contains:
  // {name, value, rating, delta, id, entries}
  console.log(metric);

  // You could also send this to an analytics service
  if (process.env.NODE_ENV === 'production') {
    // Example format for logging
    console.log(`${metric.name}: ${metric.value} (${metric.rating})`);
  }
}

// Start measuring
reportWebVitals(logWebVitals);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>,
);