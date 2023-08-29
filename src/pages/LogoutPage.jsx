import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LogoutPage = () => {
    const  {clearToken} = useContext(AuthContext);
    useEffect(()=>{
        clearToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <Navigate to='/' />
}

export default LogoutPage;