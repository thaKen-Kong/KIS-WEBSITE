import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SessionProvider } from './contexts/SessionContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <SessionProvider>
      <App />  
    </SessionProvider>
    </BrowserRouter>
  </StrictMode>,
)
