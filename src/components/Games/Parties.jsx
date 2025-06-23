import Footer from "../../components/UI/Footer";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/UI/Navbar";

function Parties() {
    const [parties, setParties] = useState([]);
    const [game, setGame] = useState(null);
    const [error, setError] = useState(null);
    const [filterLang, setFilterLang] = useState("");
    const [filterStyle, setFilterStyle] = useState("");
    const { id } = useParams();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const partiesPerPage = 6;

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
                if (!response.ok) throw new Error("Failed to fetch game info");
                const data = await response.json();
                setGame(data);
            } catch (err) {
                setGame(null);
                console.warn("Error fetching game:", err);
            }
        };
        if (id && user?.token) fetchGame();
    }, [id, user.token]);

    useEffect(() => {
        const fetchParties = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/parties/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    },
                );

                if (response.status === 404) {
                    setError("No parties found for this game.");
                    return;
                }
                const data = await response.json();
                setParties(data);
            } catch (error) {
                setError("Failed to fetch parties. Please try again later.");
                console.error("Error fetching parties:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchParties();
    }, [id, user.token]);

    const handleSelectParty = (party) => {
        navigate(`/games/${id}/party/${party.id}`);
    };

    const filteredParties = parties.filter(
        (party) =>
            (!filterLang || party.lang === filterLang) &&
            (!filterStyle || party.style === filterStyle),
    );

    const displayedParties = filteredParties.slice(0, page * partiesPerPage);

    if (!game) {
        return (
            <div className="parties__loading">
                <p>Chargement du jeu...</p>
            </div>
        );
    }

    return (
        <>
            <Navbar lessheight="true"/>
            <div
                className="parties__banner"
                style={{
                    "--parties-banner-image": game?.image
                        ? `url('${game.image}')`
                        : "url('https://sites.utulsa.edu/csg/files/2022/08/dbd_keyart_4c78f56a30-scaled.jpg')",
                }}
            >
                <div className="parties__banner-content">
                    <div className="parties__banner-info">
                        <div className="parties__banner-title">{game.name}</div>

                        <div className="parties__banner-badges">
                            {game?.styles?.map((style) => (
                                <div
                                    className="parties__banner-badge"
                                    key={style}
                                >
                                    {style}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="parties__content">
                <div className="parties__content-header">
                    <div className="parties__content-header-infos">
                        <div className="parties__content-header-infos-title">
                            Parties disponibles
                        </div>
                        <div className="parties__content-header-infos-button">
                            <Link
                                to={`/games/${id}/create`}
                                className="form__button"
                            >
                                Créer une partie
                            </Link>
                        </div>
                    </div>

                    <div className="parties__content-header-searchs">
                        <div className="parties__content-header-search">
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                className="form__control"
                            />
                        </div>

                        <div className="parties__content-header-filters">
                            <div className="parties__content-header-filter">
                                <select
                                    className="form__control"
                                    value={filterLang}
                                    onChange={(e) =>
                                        setFilterLang(e.target.value)
                                    }
                                >
                                    <option value="">Toutes les langues</option>
                                    <option value="fr">French</option>
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                </select>
                            </div>

                            <div className="parties__content-header-filter">
                                <select
                                    className="form__control"
                                    value={filterStyle}
                                    onChange={(e) =>
                                        setFilterStyle(e.target.value)
                                    }
                                >
                                    <option value="">Tous les styles</option>
                                    <option value="casual">Casual</option>
                                    <option value="competitive">
                                        Competitive
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <p>Loading parties...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="parties__content-parties">
                        {displayedParties.map((party) => (
                            <div
                                className="parties__content-party"
                                key={party.id}
                            >
                                <div className="parties__content-party-title">
                                    {party.name}
                                </div>

                                <div className="parties__content-party-host">
                                    <div className="parties__content-party-host-avatar">
                                        <img
                                            src={`https://ui-avatars.com/api/?background=random&name=${party.host?.username}&size=50`}
                                            alt="Host Avatar"
                                        />
                                    </div>
                                    <div className="parties__content-party-host-infos">
                                        <div className="parties__content-party-host-title">
                                            <span>Hôte</span>
                                            <span>
                                                4,3
                                                <svg
                                                    width="16"
                                                    height="15"
                                                    viewBox="0 0 16 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                                        fill="#6D28D9"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="parties__content-party-host-name">
                                            {party.host?.username}
                                        </span>
                                    </div>
                                </div>

                                <div className="parties__content-party-infos">
                                    <div className="parties__content-party-info">
                                        <div className="parties__content-party-info-icon">
                                            <svg
                                                width="39"
                                                height="36"
                                                viewBox="0 0 39 36"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M39 0H0V36H39V0Z"
                                                    fill="#6D28D9"
                                                />
                                            </svg>
                                        </div>
                                        <div className="parties__content-party-info-desc">
                                            <div className="parties__content-party-info-desc-title">
                                                Mode
                                            </div>
                                            <span>{party.style}</span>
                                        </div>
                                    </div>

                                    <div className="parties__content-party-info">
                                        <div className="parties__content-party-info-icon">
                                            <svg
                                                width="45"
                                                height="36"
                                                viewBox="0 0 45 36"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22.4961 0L33.748 18L45 36H22.4961H0L11.252 18L22.4961 0Z"
                                                    fill="#6D28D9"
                                                />
                                            </svg>
                                        </div>
                                        <div className="parties__content-party-info-desc">
                                            <div className="parties__content-party-info-desc-title">
                                                Langue
                                            </div>
                                            <span>{party.lang}</span>
                                        </div>
                                    </div>

                                    <div className="parties__content-party-info">
                                        <div className="parties__content-party-info-icon">
                                            <svg
                                                width="40"
                                                height="39"
                                                viewBox="0 0 40 39"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <ellipse
                                                    cx="20"
                                                    cy="19.5"
                                                    rx="20"
                                                    ry="19.5"
                                                    fill="#6D28D9"
                                                />
                                            </svg>
                                        </div>
                                        <div className="parties__content-party-info-desc">
                                            <div className="parties__content-party-info-desc-title">
                                                Équipe
                                            </div>
                                            <span>
                                                {party.playersCount}/
                                                {party.maxPlayers} joueurs
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="parties__content-party-button">
                                    <a
                                        className="form__button"
                                        onClick={() => handleSelectParty(party)}
                                    >
                                        Rejoindre la partie
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="parties__footer">
                    <Link
                        className="hero__infos-cta hero__infos-cta-start"
                        to={`/games/${id}/create`}
                    >
                        Créer une partie
                    </Link>
                    {displayedParties.length < filteredParties.length && (
                        <a
                            className="hero__infos-cta hero__infos-cta-explore"
                            onClick={() => setPage(page + 1)}
                            style={{ cursor: "pointer" }}
                        >
                            Voir plus de parties
                        </a>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Parties;
