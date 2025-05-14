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
        <div>
            <h1>Create a New Party for {game.name}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Party Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lang">Language</label>
                    <select
                        id="lang"
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                        required
                    >
                        <option value="fr">French</option>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="style">Game Style</label>
                    <select
                        id="style"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        required
                    >
                        <option value="casual">Casual</option>
                        <option value="competitive">Competitive</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="maxPlayers">Max Players</label>
                    <input
                        type="number"
                        id="maxPlayers"
                        value={maxPlayers}
                        onChange={(e) => setMaxPlayers(Number(e.target.value))}
                        min="2"
                        max="10"
                        required
                    />
                </div>
                <button type="submit">Create Party</button>
            </form>
        </div>
    );
}

export default CreateParty;
