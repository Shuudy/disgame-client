import Footer from "../UI/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

function Games() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null);
    const { user } = useAuth();

    const [page, setPage] = useState(1);
    const gamesPerPage = 8;

    const [search, setSearch] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("");

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/games`,
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                },
            );

            if (response.status === 404) {
                setError("No games found.");
                return;
            }

            const data = await response.json();
            setGames(data);
        };
        fetchGames();
    }, [user.token]);

    if (error) {
        return <p>Error</p>;
    }

    const filteredGames = games.filter((game) => {
        const matchName = game.name
            .toLowerCase()
            .includes(search.toLowerCase());
        const matchStyle =
            !selectedStyle ||
            (Array.isArray(game.styles) && game.styles.includes(selectedStyle));
        return matchName && matchStyle;
    });

    const displayedGames = filteredGames.slice(0, page * gamesPerPage);

    return (
        <>
            <div className="games__container">
                <div className="games__header">
                    <div className="games__header-title">
                        Choisissez votre terrain de <span>jeu</span>
                    </div>
                    <div className="games__header-searchs">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="form__control"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                        />
                        <select
                            name=""
                            id=""
                            className="form__control"
                            value={selectedStyle}
                            onChange={(e) => {
                                setSelectedStyle(e.target.value);
                                setPage(1);
                            }}
                        >
                            <option value="">Type de jeu</option>
                            <option value="Sandbox">Sandbox</option>
                            <option value="Aventure">Aventure</option>
                            <option value="Créatif">Créatif</option>
                            <option value="Survie">Survie</option>
                            <option value="Battle royale">Battle royale</option>
                            <option value="FPS">FPS</option>
                            <option value="Multijoueur">Multijoueur</option>
                            <option value="Action">Action</option>
                            <option value="Tir">Tir</option>
                            <option value="Party game">Party game</option>
                            <option value="Déduction">Déduction</option>
                            <option value="Coopération">Coopération</option>
                            <option value="Horreur">Horreur</option>
                            <option value="Asymétrique">Asymétrique</option>
                            <option value="Piraterie">Piraterie</option>
                            <option value="Monde ouvert">Monde ouvert</option>
                            <option value="Simulation">Simulation</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="RPG">RPG</option>
                            <option value="Roguelike">Roguelike</option>
                            <option value="Plateforme">Plateforme</option>
                            <option value="Indé">Indé</option>
                            <option value="Difficulté">Difficulté</option>
                            <option value="Création">Création</option>
                            <option value="Vie">Vie</option>
                            <option value="Gestion">Gestion</option>
                            <option value="Construction">Construction</option>
                            <option value="Ville">Ville</option>
                            <option value="Animaux">Animaux</option>
                            <option value="Automatisation">
                                Automatisation
                            </option>
                            <option value="Exploration">Exploration</option>
                            <option value="Tactique">Tactique</option>
                            <option value="Compétitif">Compétitif</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Action-RPG">Action-RPG</option>
                            <option value="Futuriste">Futuriste</option>
                            <option value="Énigmes">Énigmes</option>
                            <option value="MOBA">MOBA</option>
                            <option value="Stratégie">Stratégie</option>
                            <option value="Temps réel">Temps réel</option>
                            <option value="Historique">Historique</option>
                            <option value="Sport">Sport</option>
                            <option value="Football">Football</option>
                            <option value="Arcade">Arcade</option>
                            <option value="Voiture">Voiture</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Course">Course</option>
                            <option value="Réaliste">Réaliste</option>
                            <option value="Héro shooter">Héro shooter</option>
                            <option value="Équipe">Équipe</option>
                        </select>
                    </div>
                </div>
                <div className="games__list">
                    {displayedGames.length === 0 ? (
                        <div className="games__list-empty">
                            Aucun jeu trouvé.
                        </div>
                    ) : (
                        displayedGames.map((game) => (
                            <Link
                                to={`/games/${game.id}`}
                                className="games__card"
                                key={game.id}
                            >
                                <div className="games__card-image">
                                    <img
                                        src={game.image}
                                        alt={game.name}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="games__card-info">
                                    <h3 className="games__card-title">
                                        {game.name}
                                    </h3>

                                    <div className="games__card-badges">
                                        {game?.styles?.map((style, index) => (
                                            <div
                                                className="games__card-badge"
                                                key={index}
                                            >
                                                {style}
                                            </div>
                                        ))}
                                    </div>

                                    <span className="games__card-stats">
                                        <span>
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 13.9998C12 12.5853 11.4381 11.2288 10.4379 10.2286C9.43775 9.22841 8.0812 8.6665 6.66671 8.6665C5.25222 8.6665 3.89567 9.22841 2.89547 10.2286C1.89528 11.2288 1.33337 12.5853 1.33337 13.9998"
                                                    stroke="#6D28D9"
                                                    strokeWidth="1.33333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M6.66671 8.66667C8.50766 8.66667 10 7.17428 10 5.33333C10 3.49238 8.50766 2 6.66671 2C4.82576 2 3.33337 3.49238 3.33337 5.33333C3.33337 7.17428 4.82576 8.66667 6.66671 8.66667Z"
                                                    stroke="#6D28D9"
                                                    strokeWidth="1.33333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14.6666 13.3335C14.6666 11.0868 13.3333 9.00013 12 8.00013C12.4382 7.67131 12.7887 7.23952 13.0203 6.74298C13.252 6.24643 13.3576 5.70044 13.328 5.15333C13.2983 4.60622 13.1342 4.07485 12.8503 3.60626C12.5663 3.13767 12.1712 2.7463 11.7 2.4668"
                                                    stroke="#6D28D9"
                                                    strokeWidth="1.33333"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <span>{game.partiesCount}</span>
                                        <span>parties actives</span>
                                    </span>
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                {displayedGames.length < filteredGames.length ? (
                    <div className="games__pagination">
                        <div
                            className="hero__infos-cta hero__infos-cta-start"
                            onClick={() => setPage(page + 1)}
                        >
                            Voir plus de jeux
                        </div>
                    </div>
                ) : (
                    <div className="games__pagination-separator" />
                )}
            </div>

            <Footer />
        </>
    );
}

export default Games;
