import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            setLoading(false);
            return;
        }

        try {
            await register(username, password);
            navigate("/login");
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
                <div className="form__title">Créer un compte</div>
                <div className="form__subtitle">
                    Remplissez les informations pour vous inscrire
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

                    <div className="form__group form__group-mb">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            className="form__control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form__group">
                        <label htmlFor="confirm-password">
                            Confirmez le mot de passe
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="form__control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        className="form__button"
                        value={loading ? "Chargement..." : "S'inscrire"}
                        disabled={loading}
                    />
                </form>

                <div className="form__infos">
                    Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
