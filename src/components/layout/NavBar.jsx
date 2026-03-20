import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { AppointmentContext } from '../../contexts/AppointmentContext';
import {Field} from '../ui/field';
import { Input  } from '../ui/input'; 
import { Button } from '../ui/button';
import { LoginContext } from '@/contexts/LoginContext';
import { ThemeContext } from '@/contexts/themeContext';


const Navbar = () => {
    const {activeFilter, setActiveFilter, search, setSearch, appointments} = useContext(AppointmentContext);
    const {handleTheme, theme} = useContext(ThemeContext);
    const {logout} = useContext(LoginContext);
    const {user} = useContext(LoginContext);
    const filtros = [
        { id: 'todos', label: 'Todos', icon: 'line-md:list-indented' },
        { id: 'agendado', label: 'Agendados', icon: 'line-md:calendar' },
        { id: 'atendimento', label: 'Em Atendimento', icon: 'line-md:loading-twotone-loop' },
        { id: 'cancelado', label: 'Cancelados', icon: 'line-md:close-circle' },
    ];
    const themeNight = "bg-black"
    const themeLight = "bg-white"
return (
    <nav className={`${theme === 'light' ? themeLight : themeNight} border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10`}>
        <div className="flex items-center gap-8">
        <h1 className="text-xl font-black text-blue-600 tracking-tighter uppercase">Clinica Estética</h1>


        {theme === 'light'? 
        <div className={`flex ${themeLight} p-1 rounded-xl`}>
            {filtros.map((f) => (
            <button
                
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeFilter === f.id
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
                }` }
            >
                <Icon icon={f.icon} />
                {f.label} {appointments.filter((item)=> f.id === 'todos' ? true : item.status === f.id).length}
            </button>
            ))}
        </div>
        :
        <div className={`flex ${themeNight} p-1 rounded-xl`}>
            {filtros.map((f) => (
            <button
                
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeFilter === f.id
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-slate-100 hover:text-slate-500"
                }` }
            >
                <Icon icon={f.icon} />
                {f.label} {appointments.filter((item)=> f.id === 'todos' ? true : item.status === f.id).length}
            </button>
            ))}
        </div>
        
        }
        </div>

        <div>
            <Field >
                <Input 
                className={`${theme === 'light' ? " focus-visible:ring-blue-400": " focus-visible:ring-white"}`} id="input-button-group" 
                placeholder="Ex: Lucas"
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
                />
            </Field>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
        {/* <Icon icon="line-md:bell" width="22" /> */}
        <div className={theme === 'light' ? "text-blue-600" : "text-white"}>
            {user}
        </div>
            <Button onClick={logout} className={`${theme === 'light' ? "bg-blue-600 hover:bg-blue-400" : "bg-white hover:bg-gray-400 text-black"}`}>logout</Button>
            <Button className={"bg-gray-700 w-8 h-8"} onClick={handleTheme}>
                <Icon icon={theme === 'light' ? "line-md:moon-simple-filled" : "line-md:moon-filled-to-sunny-filled-transition" } width="22" height="22" />
            </Button>
        </div>
    </nav>
    );
};

export default Navbar;