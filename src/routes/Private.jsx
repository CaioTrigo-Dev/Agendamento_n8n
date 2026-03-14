import { LoginContext } from "@/contexts/LoginContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function Private({children}){

    const {user} = useContext(LoginContext);
    console.log(user)
    if(user){
        return children;
    }
    else{
        return <Navigate to="/"/>
    }
}
