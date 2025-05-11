import { useState, useEffect, createContext } from "react";
import { validateToken } from "../services/auth.service";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                const response = await validateToken(token);
                if (response.ok) {
                    const userData = await response.json();
                    setUser({ ...userData, token });
                } else {
                    localStorage.removeItem("token");
                }
            }
            setLoading(false);
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
            },
        );

        if (response.status === 429) {
            throw new Error("Trop de tentatives de connexion. Veuillez réessayer plus tard.");
        }

        const data = await response.json();
        if (data.token && data.user) {
            setUser({ ...data.user, token: data.token });
            localStorage.setItem("token", data.token);
        } else {
            throw new Error("Échec de la connexion. Veuillez vérifier vos identifiants.");
        }
    };

    const register = async (username, password) => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/auth/register`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            },
        );
        
        if (response.status === 429) {
            throw new Error("Trop de tentatives d’inscription. Veuillez réessayer plus tard.");
        }

        if (!response.ok) {
            throw new Error("Échec de l’inscription. Veuillez réessayer.");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider
            value={{ user, login, register, logout, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
