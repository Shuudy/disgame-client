import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
                <div className="form__title">Welcome back</div>
                <div className="form__subtitle">
                    Enter your credentials to access your account
                </div>

                {error && <p>{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="form__group form__group-mb">
                        <label htmlFor="username">Username</label>
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
                            <label htmlFor="password">Password</label>
                            <a className="form__forgot-password" href="#">
                                Forgot password?
                            </a>
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
                        value={loading ? "Loading..." : "Login"}
                        disabled={loading}
                    />
                </form>

                <div className="form__infos">
                    Don’t have an account? <a href="#">Register</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
