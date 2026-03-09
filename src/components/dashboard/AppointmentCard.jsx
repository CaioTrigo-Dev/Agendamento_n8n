const AppointmentCard = ({client, time, status, phone }) => {

    const statusStyles = {
        agendado: "bg-blue-100 text-blue-700 border-blue-200",
        atendimento: "bg-amber-100 text-amber-700 border-amber-200",
        finalizado: "bg-green-100 text-green-700 border-green-200",
        cancelado: "bg-red-100 text-red-700 border-red-200"
    }

    return(
        <div className="bg-white p-4 rounded-lg shadow-sm border 
        border-slate-200  lfex justify-between items-center">
            <div>
                <h3 className="font-bold text-slate-800">{client}</h3>
                <p className="text-sm text-slate-500 ">{time}</p>
                <p className="">{phone}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusStyles[status]}`}>
                {status}
            </span>
        </div>
    )
}

export default AppointmentCard; 