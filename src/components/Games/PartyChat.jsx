import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { io } from "socket.io-client";
import PropTypes from "prop-types";

function PartyChat({ party }) {
    const { user } = useAuth();
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const socketInstance = io(import.meta.env.VITE_SOCKET_URL, {
            auth: {
                token: user.token,
            },
        });

        setSocket(socketInstance);

        socketInstance.on("connect", () => {
            console.log("Connected to WebSocket server");

            socketInstance.emit("joinParty", { partyId: party.id });
            console.log(`Joined party with ID: ${party.id}`);
        });
    }, [user.token]);

    const handleSendMessage = () => {
        console.log("Sending message", message);
        setMessage("");
    };

    return (
        <div>
            <h2>Chat for {party.name}</h2>
            <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => handleSendMessage()}>Send</button>
        </div>
    );
}

PartyChat.propTypes = {
    party: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

export default PartyChat;
