import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { io } from "socket.io-client";
import PropTypes from "prop-types";

function PartyChat({ party }) {
    const { user } = useAuth();
    const [socket, setSocket] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socketInstance = io(import.meta.env.VITE_SOCKET_URL, {
            auth: {
                token: user.token,
            },
        });

        setSocket(socketInstance);

        socketInstance.on("connect", () => {
            console.log("Connected to WebSocket server");

            socketInstance.emit(
                "joinParty",
                { partyId: party.id },
                (response) => {
                    if (!response.success) {
                        console.error("Error joining party", response.message);
                        setError(response.message);
                    } else {
                        console.log(`Joined party with ID: ${party.id}`);
                    }
                }
            );
        });

        socketInstance.on("previousMessages", (fetchedMessages) => {
            setMessages(
                fetchedMessages.map((msg) => ({
                    username: msg.user.username,
                    content: msg.message,
                }))
            );
        });

        socketInstance.on("receiveMessage", (newMessage) => {
            console.log("Received message", newMessage);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    username: newMessage.user.username,
                    content: newMessage.message,
                },
            ]);
        });

        return () => {
            socketInstance.disconnect();
        };
    }, [user.token, party.id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleSendMessage = () => {
        console.log("Sending message", message);
        socket.emit("sendMessage", { message });
        setMessage("");
    };

    return (
        <div>
            <h2>Chat for {party.name}</h2>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        <strong>{message.username}</strong>: {message.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSendMessage();
                    }
                }}
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
