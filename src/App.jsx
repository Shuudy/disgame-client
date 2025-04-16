import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Games from "./components/Games/Games";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Parties from "./components/Games/Parties";
import CreateParty from "./components/Games/CreateParty";
import NotFound from "./components/Errors/NotFound";
import "./assets/css/app.scss";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="games" element={<Games />} />
                        <Route path="games/:id" element={<Parties />} />
                        <Route
                            path="games/:id/create"
                            element={<CreateParty />}
                        />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
