import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await register(username, password);
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="form__container">
            <div className="form__content">
                <div className="form__logo">Disgame</div>
                <div className="form__title">Create an account</div>
                <div className="form__subtitle">
                    Fill in the details to register
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

                    <div className="form__group form__group-mb">
                        <label htmlFor="password">Password</label>
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
                            Confirm Password
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
                        value="Register"
                    />
                </form>

                <div className="form__infos">
                    Already have an account? <a href="#">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Register;
