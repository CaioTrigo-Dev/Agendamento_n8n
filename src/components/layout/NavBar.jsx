import { Icon } from '@iconify/react';

const Navbar = ({ filtroAtual, setFiltro }) => {
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
                onClick={() => setFiltro(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                filtroAtual === f.id 
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-700"
                }`}
            >
                <Icon icon={f.icon} />
                {f.label}
            </button>
            ))}
        </div>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
        <Icon icon="line-md:bell" width="22" />
        <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300"></div>
        </div>
    </nav>
    );
};

export default Navbar;