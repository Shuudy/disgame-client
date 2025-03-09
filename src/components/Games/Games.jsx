import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

function Games() {
    const [games, setGames] = useState([]);
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
            const data = await response.json();
            setGames(data);
        };
        fetchGames();
    }, []);

    return (
        <div>
            <h1>Games</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Games;
