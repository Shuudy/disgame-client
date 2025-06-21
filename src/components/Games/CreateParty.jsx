import Footer from "../UI/Footer";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CreateParty() {
    const { user } = useAuth();
    const [game, setGame] = useState(null);
    const [name, setName] = useState("");
    const [lang, setLang] = useState("fr");
    const [style, setStyle] = useState("casual");
    const [maxPlayers, setMaxPlayers] = useState(4);
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/games/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    },
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch game");
                }

                const data = await response.json();
                setGame(data);
            } catch (error) {
                console.error("Error fetching game:", error);
                setError(error.message);
            }
        };

        fetchGame();
    }, [id, user.token]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/parties`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify({
                        name,
                        gameId: id,
                        lang,
                        maxPlayers,
                        style,
                        description,
                    }),
                },
            );

            if (!response.ok) {
                throw new Error("Failed to create party");
            }
            const newParty = await response.json();

            navigate(`/games/${id}/party/${newParty.id}`);
        } catch (error) {
            console.error("Error creating party:", error);
            setError(error.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!game) {
        return <div>Loading game details...</div>;
    }

    return (
        <>
            <div className="create-party__container">
                <div className="create-party__header">
                    <div className="create-party__header-title">
                        Lance ta partie
                    </div>
                    <div className="create-party__header-subtitle">
                        Crée une partie selon tes règles ! En quelques clics,
                        rassemble les joueurs qui te correspondent vraiment.
                    </div>
                </div>

                <form className="create-party__form" onSubmit={handleSubmit}>
                    <div className="create-party__form-group">
                        <input
                            type="text"
                            className="form__control"
                            placeholder="Nom de la partie"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="create-party__form-group">
                        <textarea
                            id="description"
                            className="form__control"
                            placeholder="Décris ta partie..."
                            rows={8}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="create-party__form-row">
                        <div className="create-party__form-group">
                            <select
                                className="form__control"
                                id="lang"
                                value={lang}
                                onChange={(e) => setLang(e.target.value)}
                            >
                                <option value="fr">Français</option>
                                <option value="en">Anglais</option>
                                <option value="es">Espagnol</option>
                            </select>
                        </div>
                        <div className="create-party__form-group">
                            <select
                                className="form__control"
                                value={style}
                                onChange={(e) => setStyle(e.target.value)}
                                required
                            >
                                <option value="casual">Casual</option>
                                <option value="competitive">Compétitif</option>
                            </select>
                        </div>

                        <div className="create-party__form-group">
                            <input
                                type="number"
                                className="form__control"
                                id="maxPlayers"
                                min="2"
                                max="10"
                                value={maxPlayers}
                                onChange={(e) =>
                                    setMaxPlayers(Number(e.target.value))
                                }
                                required
                                placeholder="Joueurs max"
                            />
                        </div>
                    </div>

                    <div className="create-party__cta">
                        <button
                            type="submit"
                            className="hero__infos-cta hero__infos-cta-start"
                        >
                            Créer la partie
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}

export default CreateParty;
