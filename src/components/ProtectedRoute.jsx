import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import LoadingSpinner from "./UI/LoadingSpinner";

const ProtectedRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
