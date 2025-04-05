import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CreateParty() {
    const { user } = useAuth();
    const [game, setGame] = useState(null);
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [description, setDescription] = useState("");
    const { id } = useParams();

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
                        description,
                        gameId: id,
                        lang: "fr",
                        maxPlayers: 4,
                        style: "casual",
                    }),
                },
            );

            console.log(response);
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
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Party</button>
            </form>
        </div>
    );
}

export default CreateParty;
