/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const MOCK_DATA = [
    {id: 1, name: 'Caio Cesar Macedo Trigo', phone: 5521980125640, time: '13:30', status: 'agendado'},
    {id: 2, name: 'Ana Clara Barros de Paiva', phone: 5521983748392, time: null, status: 'atendimento'},
    {id: 3, name: 'Marcia Valeria Macedo de Sousa', phone: 552194859940, time: null, status: 'atendimento'}
]
export const AppointmentContext = createContext();

export const AppointmentProvider = ({children})=> {
    
    const [appointments, setAppointments]= useState(MOCK_DATA);
    const [search, setSearch] = useState('');
    const [viewStatus, setViewStatus] = useState('');
    const [activeFilter, setActiveFilter] = useState('todos');
    const [isLoading, setIsLoading] = useState(false);

    
    const value = {
        appointments,
        activeFilter,
        setActiveFilter,
        isLoading,
        viewStatus,
        setViewStatus,
        search,
        setSearch
    };

    useEffect(()=>{
        const fetchAppointments = async () =>{
            const apiURL = import.meta.env.VITE_API_URL || '';
            setIsLoading(true);
            try{
                if(apiURL){
                    const response = await axios.get(apiURL);
                    const newData = response.data
                    
                    setAppointments(response.data);
                    if(appointments.length > 0){
                        const newItems = newData.filter((newItem) =>{
                            !appointments.some(oldItem => oldItem.id === newItem.id)
                        })
    
                        newItems.forEach(item => {
                            toast.success('Novo Cliente', {
                            description: `Cliente  ${item.name} Foi adicionado!`
                        })
                        })
                    }
                }
                else{
                    setAppointments(MOCK_DATA);
                }

            }catch(error){
                toast.error('Connection Error', {
                    description: "Não foi Possivel sincronizar com o banco de dados"
                })
                console.error(error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchAppointments();
    }, []);


    return (
    <AppointmentContext.Provider value={value}>
        {children}
        </AppointmentContext.Provider>
    )
}