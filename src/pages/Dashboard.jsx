import { useContext} from "react";
import Navbar from "../components/layout/NavBar"
import AppointmentCard from "../components/dashboard/AppointmentCard";
import { AppointmentContext } from "../contexts/AppointmentContext";
import {Spinner} from '../components/ui/spinner';
import { ThemeContext } from "@/contexts/themeContext";
import SideBar from "@/components/layout/SideBar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import NavBarMobile from "@/components/layout/NavBarMobile";

const Dashboard = ()=>{
    const {activeFilter, appointments, search, isLoading, setSearch} = useContext(AppointmentContext);
    const {theme} = useContext(ThemeContext);
    const filteredClients = appointments.filter((patient)=>{
        const matchesStatus = activeFilter === 'todos' || patient.status === activeFilter;

        const matchesSearch = (patient.name || "").toLowerCase().includes(search.toLowerCase());
        return matchesSearch && matchesStatus;
    });
    
    return(

        
        <div className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800 '} min-h-screen w-full `}>
            <div className="md:hidden">
                <NavBarMobile/>

                <div className="w-full flex justify-center py-6">
                    <div className="w-70 max-w-md px-4">
                        <Field>
                            <Input
                            className={`${theme === 'light' ? " focus-visible:ring-blue-400": " focus-visible:ring-white"}`} id="input-button-group" 
                            placeholder="Ex: Lucas"
                            value={search}
                            onChange={(e)=> setSearch(e.target.value)}
                            />
                        </Field>
                    </div>
                </div>

            </div>

            <div className="hidden md:block">
                <Navbar/>
            </div>

            <main className={`${theme === 'light' ? "xl:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 bg-white p-8 grid gap-2 min-h-screen content-start" : " sm:grid-cols-2 md:grid-cols-2 bg-gray-800 p-8 grid  gap-2 min-h-screen content-start xl:grid-cols-3"}`}>
                {isLoading ? 
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                    <Spinner className="size-12 text-blue-600"/>
                </div> : (
                    filteredClients.length < 1 ? 
                <div className={theme === 'light' ? "p-8 flex justify-center text-black" : " text-white p-8 flex justify-center"} >
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