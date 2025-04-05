import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import PartyChat from "./PartyChat";

function Parties() {
    const [parties, setParties] = useState([]);
    const [error, setError] = useState(null);
    const [selectedParty, setSelectedParty] = useState(null);
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        const fetchParties = async () => {
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
        };
        fetchParties();
    }, [id, user.token]);

    const handleSelectParty = (party) => {
        setSelectedParty(party);
    };

    return (
        <div>
            {!selectedParty ? (
                <>
                    <h1>Parties</h1>
                    <Link to={`/games/${id}/create`}>
                        <button>Create a Party</button>
                    </Link>
                    {error ? (
                        <p>{error}</p>
                    ) : (
                        <ul>
                            {parties.map((party) => (
                                <li
                                    key={party.id}
                                    onClick={() => handleSelectParty(party)}
                                >
                                    {party.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <PartyChat party={selectedParty} />
            )}
        </div>
    );
}

export default Parties;
