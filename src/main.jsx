import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { POSProvider } from './POSContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <POSProvider>
      <App />
    </POSProvider>
  </StrictMode>,
)
