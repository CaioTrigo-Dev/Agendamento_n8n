import AppointmentCard from './components/dashboard/AppointmentCard'
import './index.css' // ESSA LINHA É OBRIGATÓRIA

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <AppointmentCard client={'Caio'} status={'agendado'} time={'15:00'} phone={'5521980125640'}/>
    </div>
  )
}

export default App
