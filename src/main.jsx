import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppointmentProvider} from './contexts/AppointmentContext.jsx'
import { Toaster } from 'sonner'
import { LoginProvider } from './contexts/LoginContext'
import { ThemeProvider } from './contexts/themeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <LoginProvider>
      <ThemeProvider>
      <AppointmentProvider>
      <Toaster position='top-center' richColors/>
        <App />
      </AppointmentProvider>
      </ThemeProvider>
    </LoginProvider>
  </StrictMode>,
)
