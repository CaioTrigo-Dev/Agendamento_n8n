import { useContext } from "react";
import SideBar from "./SideBar";
import { ThemeContext } from "@/contexts/themeContext";
import { SidebarTrigger } from "../ui/sidebar";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

export default function NavBarMobile(){
    const {theme, handleTheme} = useContext(ThemeContext);
    
    return(
        <div>
            <SideBar/>
                <header className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800 border-gray-900'} flex gap-3 h-14 items-center justify-between border-b px-4 sticky top-0 z-10`}>
                    <SidebarTrigger className={theme === 'light' ? '' : 'text-white' }/>
                        <h2 className={`text-blue-600 ml-4 font-semibold `}>CLÍNICA ESTÉTICA</h2>
                        <Button className={"bg-gray-700 w-8 h-8"} onClick={handleTheme}>
                            <Icon icon={theme === 'light' ? "line-md:moon-simple-filled" : "line-md:moon-filled-to-sunny-filled-transition" } width="22" height="22" />
                        </Button>
                </header>
        </div>
    )
}