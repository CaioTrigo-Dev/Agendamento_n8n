import { useContext} from "react";
import Navbar from "../components/layout/NavBar"
import AppointmentCard from "../components/dashboard/AppointmentCard";
import { AppointmentContext } from "../contexts/AppointmentContext";
import {Spinner} from '../components/ui/spinner';
import { ThemeContext } from "@/contexts/themeContext";

const Dashboard = ()=>{
    const {activeFilter, appointments, search, isLoading} = useContext(AppointmentContext);
    const {theme} = useContext(ThemeContext);
    const filteredClients = appointments.filter((patient)=>{
        const matchesStatus = activeFilter === 'todos' || patient.status === activeFilter;

        const matchesSearch = (patient.name || "").toLowerCase().includes(search.toLowerCase());
        // console.log('key', patient.id, "Nome", patient.name)
        return matchesSearch && matchesStatus;
    });

    
    return(
        <div>
            <Navbar />
            <main className={`${theme === 'light' ? "bg-white p-8 grid grid-cols-3 gap-2 min-h-screen" : "bg-gray-800 p-8 grid grid-cols-3 gap-2 min-h-screen"}`}>
                {isLoading ? 
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                    <Spinner className="size-12 text-blue-600"/>
                </div> : (
                    filteredClients.length < 1 ? 
                <div className={theme === 'light' ? "p-8 flex justify-center text-white" : " text-black p-8 flex justify-center"} >
                    <p>Nenhum Paciente por enquanto!</p>
                </div> 
                : filteredClients.map((item)=> (
                    <div key={item.id} >
                        <AppointmentCard client={item.name} phone={item.phone} time={item.time} status={item.status}/>
                    </div>
                ))
                )}
            </main>
        </div>
    )
}

export default Dashboard;