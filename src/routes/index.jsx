import Dashboard from "@/pages/Dashboard";
import { Login } from "@/pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Private from "./Private";


export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>

                <Route 
                path="/dashboard"
                element={
                    <Private>
                        <Dashboard/>
                    </Private>
                }
                />
            </Routes>
        </BrowserRouter>
    )
}