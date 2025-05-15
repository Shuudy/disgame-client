import { useEffect, useState } from "react";
import PopularGamesCard from "./PopularGamesCard";

function PopularGames() {
    const [popularGames, setPopularGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularGames = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/games/popular`,
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch popular games");
                }
                const data = await response.json();
                setPopularGames(data);
            } catch {
                setError(
                    "Failed to fetch popular games. Please try again later.",
                );
            } finally {
                setLoading(false);
            }
        };

        fetchPopularGames();
    }, []);

    if (loading) {
        return <p>Chargement des jeux populaires...</p>;
    }

    if (error) {
        return <p>Erreur : {error}</p>;
    }

    return (
        <div className="populargames">
            <div className="populargames__container">
                <div className="populargames__header">
                    <div className="populargames__header-title">
                        Jeux Populaires
                    </div>
                    <div className="populargames__header-subtitle">
                        <div className="populargames__header-subtitle-info">
                            Rejoignez des milliers de joueurs dans ces jeux
                            tendance
                        </div>
                        <div className="populargames__header-subtitle-cta">
                            <a href="#">
                                Voir tous les jeux
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="populargames__content">
                    {popularGames.map((game, index) => (
                        <PopularGamesCard
                            key={index}
                            id={game.id}
                            title={game.name}
                            players="50,000+ joueurs"
                            image={game.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopularGames;
