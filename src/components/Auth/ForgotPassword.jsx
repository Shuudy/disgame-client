import { useState } from "react";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            await sleep(1000);

            throw new Error("Invalid email");
            //navigate("/login");
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
                <div className="form__title">Mot de passe oublié</div>
                <div className="form__subtitle">
                    Entrez votre adresse email pour réinitialiser votre mot de passe.
                </div>

                {error && <p>{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="form__group">
                        <label htmlFor="email">Adresse email</label>
                        <input
                            type="email"
                            id="email"
                            className="form__control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        className="form__button"
                        value={loading ? "Envoi en cours..." : "Réinitialiser"}
                        disabled={loading}
                    />
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
