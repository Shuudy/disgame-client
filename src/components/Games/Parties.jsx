import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function Parties() {
    const [parties, setParties] = useState([]);
    const [error, setError] = useState(null);
    const [filterLang, setFilterLang] = useState("");
    const [filterStyle, setFilterStyle] = useState("");
    const { id } = useParams();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    return (
        <div>
            <h1>Parties</h1>
            <Link to={`/games/${id}/create`}>
                <button>Create a Party</button>
            </Link>

            <div>
                <select onChange={(e) => setFilterLang(e.target.value)}>
                    <option value="">All Languages</option>
                    <option value="fr">French</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>

                <select onChange={(e) => setFilterStyle(e.target.value)}>
                    <option value="">All Styles</option>
                    <option value="casual">Casual</option>
                    <option value="competitive">Competitive</option>
                </select>
            </div>

            {loading ? (
                <p>Loading parties...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {filteredParties.map((party) => (
                        <li
                            key={party.id}
                            onClick={() => handleSelectParty(party)}
                        >
                            {party.name} - {party.lang} - {party.style} -{" "}
                            {party.maxPlayers} players max
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Parties;
