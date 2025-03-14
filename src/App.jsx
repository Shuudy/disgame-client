import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Games from "./components/Games/Games";
import Login from "./components/Auth/Login";
import Parties from "./components/Games/Parties";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="games" element={<Games />} />
                        <Route path="games/:id" element={<Parties />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
