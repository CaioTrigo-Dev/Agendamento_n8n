import { Icon } from "@iconify/react";


const AppointmentCard = ({client, time, status, phone }) => {

    const statusStyles = {
        agendado: "bg-blue-100 text-blue-700 border-blue-200",
        atendimento: "bg-amber-100 text-amber-700 border-amber-200",
        finalizado: "bg-green-100 text-green-700 border-green-200",
        cancelado: "bg-red-100 text-red-700 border-red-200"
    }

    const filterTime = time === null ? '' : <p className="text-xs text-slate-400 flex items-center gap-2 font-medium">
                    <Icon icon="mingcute:time-line" width="14" /> {time}
                </p> ; 
                

    return(
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">

            <div className="bg-slate-100 p-3 rounded-full text-slate-400">
                <Icon icon="line-md:account" width="24" height="24" />
            </div>


            <div className="flex flex-col">
                <h3 className="font-bold text-slate-900 text-lg leading-tight">
                    {client}
                </h3>
                
                <div className="flex flex-col gap-1 mt-1">
                    <p className="text-[12px] text-slate-600 flex items-center gap-2">
                        <Icon icon="line-md:phone-call-filled-loop" width="16" height="16" /> {phone}
                    </p>
                    {filterTime}
                </div>
            </div>
        </div>
        
        <span className={`xl:text-[12px] md:text-[10px] px-3 py-1 rounded-full text-[8px] font-extrabold uppercase tracking-widest border flex items-start ${statusStyles[status]}`}>
            {status}
        </span>
    </div>
    )
}

export default AppointmentCard; 