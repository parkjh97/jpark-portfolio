import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './resume.css'
import { ResumeApp } from './ResumeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResumeApp />
  </StrictMode>
)
