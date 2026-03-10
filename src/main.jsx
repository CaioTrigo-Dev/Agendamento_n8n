import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppointmentProvider} from './contexts/AppointmentContext.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppointmentProvider>
    <App />
    </AppointmentProvider>
    <Toaster position='top-center' richColors/>
  </StrictMode>,
)
