import { useState, useEffect, createContext } from "react";
import { validateToken } from "../services/auth.service";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                const isValid = await validateToken(token);
                if (isValid) {
                    setUser({ token });
                } else {
                    localStorage.removeItem("token");
                }
            }
        };
        checkAuth();
    }, []);

    const login = async (username, password) => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            }
        );

        const data = await response.json();
        if (data.token) {
            setUser({ token: data.token });
            localStorage.setItem("token", data.token);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
