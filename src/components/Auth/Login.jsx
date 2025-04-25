import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(username, password);
            navigate("/games");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form__container">
            <div className="form__content">
                <div className="form__logo">Disgame</div>
                <div className="form__title">Ravi de vous revoir</div>
                <div className="form__subtitle">
                    Entrez vos identifiants pour accéder à votre compte.
                </div>

                {error && <p>{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="form__group form__group-mb">
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <input
                            type="text"
                            id="username"
                            className="form__control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form__group">
                        <div className="form__label-container">
                            <label htmlFor="password">Mot de passe</label>
                            <Link className="form__forgot-password" to="/forgot-password">
                                Mot de passe oublié ?
                            </Link>
                        </div>

                        <input
                            type="password"
                            id="password"
                            className="form__control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        className="form__button"
                        value={loading ? "Chargement..." : "Se connecter"}
                        disabled={loading}
                    />
                </form>

                <div className="form__infos">
                    Vous n'avez pas de compte ? <Link to="/register">S'inscrire</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
