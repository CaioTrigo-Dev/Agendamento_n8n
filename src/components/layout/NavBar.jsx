import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { AppointmentContext } from '../../contexts/AppointmentContext';
import {Field} from '../ui/field';
import { Input } from '../ui/input'; 
import { Button } from '../ui/button';
import { LoginContext } from '@/contexts/LoginContext';

const Navbar = () => {
    const {activeFilter, setActiveFilter, search, setSearch, appointments} = useContext(AppointmentContext);
    const {logout} = useContext(LoginContext);
    const filtros = [
        { id: 'todos', label: 'Todos', icon: 'line-md:list-indented' },
        { id: 'agendado', label: 'Agendados', icon: 'line-md:calendar' },
        { id: 'atendimento', label: 'Em Atendimento', icon: 'line-md:loading-twotone-loop' },
        { id: 'cancelado', label: 'Cancelados', icon: 'line-md:close-circle' },
    ];

    
return (
    <nav className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-8">
        <h1 className="text-xl font-black text-blue-600 tracking-tighter uppercase">Clinica Estética</h1>


        <div className="flex bg-slate-100 p-1 rounded-xl">
            {filtros.map((f) => (
            <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeFilter === f.id 
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
                <Icon icon={f.icon} />
                {f.label} {appointments.filter((item)=> f.id === 'todos' ? true : item.status === f.id).length}
            </button>
            ))}
        </div>
        </div>

        <div>
            <Field >
                <Input 
                className=" focus-visible:ring-blue-400" id="input-button-group" 
                placeholder="Ex: Lucas"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                />
            </Field>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
        <Icon icon="line-md:bell" width="22" />
        <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center">
            <Icon icon="line-md:account" width="24" height="24" />
        </div>
            <Button onClick={logout} className="bg-blue-600 hover:bg-blue-400">logout</Button>
        
        </div>
    </nav>
    );
};

export default Navbar;