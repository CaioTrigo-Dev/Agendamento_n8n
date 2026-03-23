import { AppointmentContext } from "@/contexts/AppointmentContext";
import { LoginContext } from "@/contexts/LoginContext";
import { ThemeContext } from "@/contexts/themeContext";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { useContext } from "react";
import { Icon } from "@iconify/react";


export default function SideBar(){

    const {activeFilter, setActiveFilter} = useContext(AppointmentContext);
    const {theme} = useContext(ThemeContext);
    const {logout} = useContext(LoginContext);
    const filtros = [
        { id: 'todos', label: 'Todos', icon: 'line-md:list-indented' },
        { id: 'agendado', label: 'Agendados', icon: 'line-md:calendar' },
        { id: 'atendimento', label: 'Em Atendimento', icon: 'line-md:loading-twotone-loop' },
        { id: 'cancelado', label: 'Cancelados', icon: 'line-md:close-circle' },
    ];
    return (    
        <Sidebar>
          <SidebarHeader className={` ${theme === 'light' ? '' : 'bg-gray-800 border-gray-900'} p-4 border-b`}>
            <h2 className="font-bold text-lg text-blue-600">CLÍNICA ESTÉTICA</h2>
          </SidebarHeader>

          <SidebarContent className={`${theme === 'light' ? '' : 'bg-gray-800'}`}>
            <SidebarGroup>
              <SidebarGroupLabel 
              className={`${theme === 'light' ? '' : 'text-white'}`}>
                Filtros de Agendamento
                </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className={`${theme === 'light' ? '' : 'text-white'}`}>
                  {filtros.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton 
                        onClick={() => setActiveFilter(item.id)}
                        isActive={activeFilter === item.id} 
                      >
                        <Icon icon={item.icon} className="mr-2 size-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
          </SidebarContent>

          <SidebarFooter className={` ${theme === 'light' ? '' : 'bg-gray-800 border-gray-900'} p-4 border-t`}>
            <button onClick={logout} className="flex items-center text-red-500 hover:text-red-600 gap-2">
              <Icon icon="line-md:logout" />
              <span>Logout</span>
            </button>
          </SidebarFooter>
        </Sidebar>
)
}