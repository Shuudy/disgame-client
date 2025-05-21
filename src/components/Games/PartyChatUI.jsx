import PartyChatDetails from "./PartyChatDetails";

function PartyChatUI() {
    const players = [
        {
            id: 1,
            name: "Player 1",
            picture:
                "https://ui-avatars.com/api/?background=random&name=Player 1&size=50",
        },
        {
            id: 2,
            name: "Player 2",
            picture:
                "https://ui-avatars.com/api/?background=random&name=Player 2&size=50",
        },
        {
            id: 3,
            name: "Player 3",
            picture:
                "https://ui-avatars.com/api/?background=random&name=Player 3&size=50",
        },
    ];
    return (
        <div className="party-chat">
            <div className="party-chat__sidebar party-chat__sidebar-left">
                <div className="party-chat__game">
                    <div className="party-chat__game-image">
                        <img
                            src="https://gmedia.playstation.com/is/image/SIEPDC/apex-legends-listing-thumb-01-ps4-en-29oct20?$facebook$"
                            alt="Apex Legends"
                        />
                    </div>
                    <div className="party-chat__game-name">Apex Legends</div>
                </div>
                <div className="party-chat__party">
                    <div className="party-chat__party-title">
                        Titre de la partie
                    </div>
                    <div className="party-chat__party-description">
                        Description de la partie
                    </div>
                </div>
                <PartyChatDetails playerCount="4/6" style="Casual" />

                <div className="party-chat__host">
                    <div className="party-chat__host-title">
                        Hôte de la partie
                    </div>
                    <div className="party-chat__host-content">
                        <div className="party-chat__host-picture">
                            <img
                                src="https://ui-avatars.com/api/?background=random&name=Player 1&size=50"
                                alt=""
                            />
                        </div>
                        <div className="party-chat__host-infos">
                            <div className="party-chat__host-name">
                                Player 1
                            </div>
                            <div className="party-chat__host-status">Hôte</div>
                        </div>
                    </div>
                </div>

                <button className="party-chat__leave">Quitter la partie</button>
            </div>
            <div className="party-chat__main">
                <div className="party-chat__messages">
                    <div className="party-chat__message">
                        <div className="party-chat__message-avatar">
                            <img
                                src="https://ui-avatars.com/api/?background=random&name=Player 1&size=50"
                                alt=""
                            />
                        </div>
                        <div className="party-chat__message-content">
                            <div className="party-chat__message-header">
                                <div className="party-chat__message-name">
                                    Player 1
                                </div>
                                <div className="party-chat__message-time">
                                    12:00
                                </div>
                            </div>
                            <div className="party-chat__message-text">
                                Salut ! Comment ça va ?
                            </div>
                        </div>
                    </div>
                    <div className="party-chat__joined">
                        <div className="party-chat__joined-content">
                            ProGamer123 a rejoint la partie • 13:31
                        </div>
                    </div>
                    <div className="party-chat__message party-chat__message-me">
                        <div className="party-chat__message-avatar">
                            <img
                                src="https://ui-avatars.com/api/?background=random&name=Palyer 2&size=50"
                                alt=""
                            />
                        </div>
                        <div className="party-chat__message-content">
                            <div className="party-chat__message-header">
                                <div className="party-chat__message-name">
                                    Vous
                                </div>
                                <div className="party-chat__message-time">
                                    12:00
                                </div>
                            </div>
                            <div className="party-chat__message-text">
                                Ça va bien, merci ! Et toi ?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="party-chat__input">
                    <input
                        type="text"
                        placeholder="Saisissez votre message..."
                    />
                    <button>
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
                <div className="party-chat__sidebar-title">Joueurs</div>
                <div className="party-chat__sidebar-players">
                    {players.map((player) => (
                        <div
                            className="party-chat__sidebar-player"
                            key={player.id}
                        >
                            <div className="party-chat__sidebar-player-picture">
                                <img
                                    src={player.picture}
                                    alt="Player's picture"
                                />
                            </div>
                            <div className="party-chat__sidebar-player-name">
                                {player.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PartyChatUI;
