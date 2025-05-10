import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

function PartyChat() {
    const { partyId } = useParams();
    const { user } = useAuth();
    const [socket, setSocket] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [players, setPlayers] = useState([]);
    const [party, setParty] = useState(null);

    useEffect(() => {
        const fetchPartyDetails = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/party/${partyId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    },
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch party details");
                }

                const data = await response.json();
                setParty(data);
            } catch (error) {
                console.error("Error fetching party details:", error);
                setError("Failed to fetch party details.");
            }
        };

        fetchPartyDetails();
    }, [partyId, user.token]);

    useEffect(() => {
        if (!party) return;

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
                        setPlayers(response.players);
                    }
                },
            );
        });

        socketInstance.on("previousMessages", (fetchedMessages) => {
            setMessages(
                fetchedMessages.map((msg) => ({
                    type: "message",
                    username: msg.user.username,
                    content: msg.message,
                    timestamp: msg.timestamp,
                })),
            );
        });

        socketInstance.on("receiveMessage", (newMessage) => {
            console.log("Received message", newMessage);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    type: "message",
                    username: newMessage.user.username,
                    content: newMessage.message,
                    timestamp: newMessage.timestamp,
                },
            ]);
        });

        socketInstance.on("playerJoined", (newPlayer) => {
            console.log("Player joined:", newPlayer);
            setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    type: "playerJoined",
                    content: `${newPlayer.username} has joined the party.`,
                    timestamp: Date.now(),
                },
            ]);
        });

        socketInstance.on("playerLeft", (player) => {
            console.log("Player left:", player);
            setPlayers((prevPlayers) =>
                prevPlayers.filter((p) => p.id !== player.id),
            );
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    type: "playerLeft",
                    content: `${player.username} has left the party.`,
                    timestamp: Date.now(),
                },
            ]);
        });

        return () => {
            socketInstance.disconnect();
        };
    }, [party, user.token]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleSendMessage = () => {
        if (!message.trim()) return; // Prevent sending empty messages

        console.log("Sending message", message);
        socket.emit("sendMessage", { message });
        setMessage("");
    };

    return (
        <div>
            {party ? (
                <>
                    <h2>
                        Chat for {party.name} - Host: {party.host?.username}
                    </h2>
                    <div>
                        <h3>Players in the Party</h3>
                        <ul>
                            {players.map((player, index) => (
                                <li key={index}>{player.username}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {messages.map((message, index) => (
                            <div key={index}>
                                {message.type === "message" ? (
                                    // Display this message if it comes from the logged-in user
                                    message.username === user.username ? (
                                        <>
                                            <strong>Vous</strong>:{" "}
                                            {message.content} -{" "}
                                            {message.timestamp
                                                ? new Date(
                                                      message.timestamp,
                                                  ).toLocaleTimeString(
                                                      "fr-FR",
                                                      {
                                                          hour: "2-digit",
                                                          minute: "2-digit",
                                                      },
                                                  )
                                                : "Invalid time"}
                                        </>
                                    ) : (
                                        // Display this message if it comes from someone other than the logged-in user
                                        <>
                                            <strong>{message.username}</strong>:{" "}
                                            {message.content} -{" "}
                                            {message.timestamp
                                                ? new Date(
                                                      message.timestamp,
                                                  ).toLocaleTimeString(
                                                      "fr-FR",
                                                      {
                                                          hour: "2-digit",
                                                          minute: "2-digit",
                                                      },
                                                  )
                                                : "Invalid time"}
                                        </>
                                    )
                                ) : message.type === "playerJoined" ||
                                  message.type === "playerLeft" ? (
                                    <>
                                        {message.content} -{" "}
                                        {message.timestamp
                                            ? new Date(
                                                  message.timestamp,
                                              ).toLocaleTimeString("fr-FR", {
                                                  hour: "2-digit",
                                                  minute: "2-digit",
                                              })
                                            : "Invalid time"}
                                    </>
                                ) : null}
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
                </>
            ) : (
                <p>Loading party details...</p>
            )}
        </div>
    );
}

export default PartyChat;
