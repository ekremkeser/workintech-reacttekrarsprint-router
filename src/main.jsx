import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  BrowserRouter
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <App />
    </StrictMode>
  {/* Strict Mode React v18'de Router v5.2 ile düzgün çalışmadığı için BrowserRouter'ın içine konuldu. */}
  </BrowserRouter>
  ,
)
