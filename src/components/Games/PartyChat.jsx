import PartyChatDetails from "./PartyChatDetails";
import { useEffect, useState, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

function PartyChatUI() {
    const { partyId } = useParams();
    const { user } = useAuth();
    const [socket, setSocket] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [players, setPlayers] = useState([]);
    const [party, setParty] = useState(null);
    const messagesEndRef = useRef(null);

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
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

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
                    <div className="party-chat">
                        <div className="party-chat__sidebar party-chat__sidebar-left">
                            <div className="party-chat__game">
                                <div className="party-chat__game-image">
                                    <img
                                        src="https://gmedia.playstation.com/is/image/SIEPDC/apex-legends-listing-thumb-01-ps4-en-29oct20?$facebook$"
                                        alt="Apex Legends"
                                    />
                                </div>
                                <div className="party-chat__game-name">
                                    Apex Legends
                                </div>
                            </div>
                            <div className="party-chat__party">
                                <div className="party-chat__party-title">
                                    {party.name}
                                </div>
                                <div className="party-chat__party-description">
                                    Description de la partie
                                </div>
                            </div>
                            <PartyChatDetails
                                playerCount={`${players.length}/${party.maxPlayers}`}
                                style={party.style}
                            />

                            <div className="party-chat__host">
                                <div className="party-chat__host-title">
                                    Hôte de la partie
                                </div>
                                <div className="party-chat__host-content">
                                    <div className="party-chat__host-picture">
                                        <img
                                            src={`https://ui-avatars.com/api/?background=random&name=${party.host?.username}&size=50`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="party-chat__host-infos">
                                        <div className="party-chat__host-name">
                                            {party.host?.username}
                                        </div>
                                        <div className="party-chat__host-status">
                                            Hôte
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="party-chat__leave">
                                Quitter la partie
                            </button>
                        </div>
                        <div className="party-chat__main">
                            <div className="party-chat__messages">
                                {messages.map((message, index) => (
                                    <div key={index}>
                                        {message.type === "message" ? (
                                            // Display this message if it comes from the logged-in user
                                            message.username ===
                                            user.username ? (
                                                <>
                                                    <div className="party-chat__message party-chat__message-me">
                                                        <div className="party-chat__message-avatar">
                                                            <img
                                                                src={`https://ui-avatars.com/api/?background=random&name=${user.username}&size=50`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="party-chat__message-content">
                                                            <div className="party-chat__message-header">
                                                                <div className="party-chat__message-name">
                                                                    Vous
                                                                </div>
                                                                <div className="party-chat__message-time">
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
                                                                </div>
                                                            </div>
                                                            <div className="party-chat__message-text">
                                                                {
                                                                    message.content
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                // Display this message if it comes from someone other than the logged-in user
                                                <>
                                                    <div className="party-chat__message">
                                                        <div className="party-chat__message-avatar">
                                                            <img
                                                                src={`https://ui-avatars.com/api/?background=random&name=${message.username}&size=50`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="party-chat__message-content">
                                                            <div className="party-chat__message-header">
                                                                <div className="party-chat__message-name">
                                                                    {
                                                                        message.username
                                                                    }
                                                                </div>
                                                                <div className="party-chat__message-time">
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
                                                                </div>
                                                            </div>
                                                            <div className="party-chat__message-text">
                                                                {
                                                                    message.content
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        ) : message.type === "playerJoined" ||
                                          message.type === "playerLeft" ? (
                                            <>
                                                <div className="party-chat__joined">
                                                    <div className="party-chat__joined-content">
                                                        {message.content} •{" "}
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
                                                    </div>
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                            <div className="party-chat__input">
                                <input
                                    type="text"
                                    placeholder="Saisissez votre message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSendMessage();
                                        }
                                    }}
                                />
                                <button onClick={() => handleSendMessage()}>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.27574 8.72348C7.14833 8.5963 6.99649 8.49624 6.82937 8.42933L1.5427 6.30933C1.47958 6.284 1.42571 6.23997 1.38834 6.18315C1.35096 6.12632 1.33186 6.05943 1.33361 5.99144C1.33535 5.92344 1.35785 5.85761 1.39808 5.80278C1.43832 5.74794 1.49436 5.70673 1.5587 5.68466L14.2254 1.35133C14.2844 1.32999 14.3484 1.32592 14.4097 1.33959C14.471 1.35326 14.5271 1.3841 14.5715 1.42852C14.6159 1.47293 14.6468 1.52907 14.6604 1.59037C14.6741 1.65167 14.67 1.71559 14.6487 1.77466L10.3154 14.4413C10.2933 14.5057 10.2521 14.5617 10.1973 14.6019C10.1424 14.6422 10.0766 14.6647 10.0086 14.6664C9.9406 14.6682 9.87371 14.6491 9.81688 14.6117C9.76006 14.5743 9.71603 14.5205 9.6907 14.4573L7.5707 9.16933C7.50349 9.00233 7.40315 8.85066 7.27574 8.72348ZM7.27574 8.72348L14.5694 1.43133"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="party-chat__sidebar party-chat__sidebar-right">
                            <div className="party-chat__sidebar-title">
                                Joueurs
                            </div>
                            <div className="party-chat__sidebar-players">
                                {players.map((player) => (
                                    <div
                                        className="party-chat__sidebar-player"
                                        key={player.id}
                                    >
                                        <div className="party-chat__sidebar-player-picture">
                                            <img
                                                src={`https://ui-avatars.com/api/?background=random&name=${player.username}&size=50`}
                                                alt="Player's picture"
                                            />
                                        </div>
                                        <div className="party-chat__sidebar-player-name">
                                            {player.username}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading party details...</p>
            )}
        </div>
    );
}

export default PartyChatUI;
