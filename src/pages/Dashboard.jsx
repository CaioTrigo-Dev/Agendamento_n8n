import { useState } from "react";
import Navbar from "../components/layout/NavBar"
import AppointmentCard from "../components/dashboard/AppointmentCard";

const Dashboard = ()=>{
    const [filtroAtivo, setFiltroAtivo]= useState('todos');

    const client = [
        {id: 1, name: 'Caio Cesar Macedo Trigo', phone: 5521980125640, time: '13:30', status: 'agendado'},
        {id: 2, name: 'Ana Clara Barros de Paiva', phone: 5521983748392, time: null, status: 'atendimento'},
        {id: 3, name: 'Marcia Valeria Macedo de Sousa', phone: 552194859940, time: null, status: 'cancelado'}
    ]

    const filteredClients = filtroAtivo === 'todos' ? client : client.filter(item => item.status === filtroAtivo);


    return(
        <div>
            <Navbar filtroAtual={filtroAtivo} setFiltro={setFiltroAtivo}/>
            <main className="p-8 flex gap-2">
                {filteredClients.map((item)=> (
                    <div key={item.id}>
                        <AppointmentCard client={item.name} phone={item.phone} time={item.time} status={item.status}/>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Dashboard;