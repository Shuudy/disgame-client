import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function Games() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/games`,
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );

            if (response.status === 404) {
                setError("No games found.");
                return;
            }

            const data = await response.json();
            setGames(data);
        };
        fetchGames();
    }, []);

    return (
        <div>
            <h1>Games</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {games.map((game) => (
                        <li key={game.id}>
                            <Link to={`/games/${game.id}`}>{game.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Games;
