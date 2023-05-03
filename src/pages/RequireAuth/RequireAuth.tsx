// React 
import { Navigate, Outlet } from "react-router-dom";
// Hook
import { useAuthContex } from '../../App';

export const RequireAuth = () => {
    const { auth } = useAuthContex();

    return(
        !auth ? <Navigate to={"/login"} /> : <Outlet />
    );
};