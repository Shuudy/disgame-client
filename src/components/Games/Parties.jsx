import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Parties() {
    const [parties, setParties] = useState([]);
    const [error, setError] = useState(null);
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
                }
            );

            if (response.status === 404) {
                setError("No parties found for this game.");
                return;
            }
            const data = await response.json();
            setParties(data);
        };
        fetchParties();
    }, []);

    return (
        <div>
            <h1>Parties</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {parties.map((party) => (
                        <li key={party.id}>{party.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Parties;
