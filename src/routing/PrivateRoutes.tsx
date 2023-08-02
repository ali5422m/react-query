import useAuth from "./hooks/useAuth.ts";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = () => {
    const {user} = useAuth();

    if(!user)
        return <Navigate to="/login" />;
    else
        return <Outlet />;

    return (
        <div>
            Private Page
        </div>
    );
};

export default PrivateRoutes;
