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
                <div className="party-chat__partydetails">
                    <div className="party-chat__partydetails-title">
                        Détails de la partie
                    </div>
                    <div className="party-chat__partydetails-content">
                        <div className="party-chat__partydetails-item">
                            <div className="party-chat__partydetails-item-icon">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.6667 14V12.6667C10.6667 11.9594 10.3858 11.2811 9.88566 10.781C9.38556 10.281 8.70728 10 8.00004 10H4.00004C3.2928 10 2.61452 10.281 2.11442 10.781C1.61433 11.2811 1.33337 11.9594 1.33337 12.6667V14"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.00004 7.33333C7.4728 7.33333 8.66671 6.13943 8.66671 4.66667C8.66671 3.19391 7.4728 2 6.00004 2C4.52728 2 3.33337 3.19391 3.33337 4.66667C3.33337 6.13943 4.52728 7.33333 6.00004 7.33333Z"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.6666 14V12.6667C14.6662 12.0758 14.4695 11.5019 14.1075 11.0349C13.7455 10.5679 13.2387 10.2344 12.6666 10.0867"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.6666 2.08667C11.2402 2.23354 11.7487 2.56714 12.1117 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1117 6.30513C11.7487 6.77287 11.2402 7.10647 10.6666 7.25334"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="party-chat__partydetails-item-text">
                                4/6 joueurs
                            </div>
                        </div>
                        <div className="party-chat__partydetails-item">
                            <div className="party-chat__partydetails-item-icon">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 7.33325H6.66667"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.33337 6V8.66667"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10 8H10.0067"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 6.66675H12.0067"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.5467 3.33325H4.45337C3.79356 3.33341 3.15723 3.57817 2.6674 4.02023C2.17756 4.46229 1.869 5.07025 1.80137 5.72659C1.79737 5.76125 1.79471 5.79392 1.79004 5.82792C1.73604 6.27725 1.33337 9.63725 1.33337 10.6666C1.33337 11.197 1.54409 11.7057 1.91916 12.0808C2.29423 12.4559 2.80294 12.6666 3.33337 12.6666C4.00004 12.6666 4.33337 12.3333 4.66671 11.9999L5.60937 11.0573C5.85936 10.8072 6.19845 10.6667 6.55204 10.6666H9.44804C9.80163 10.6667 10.1407 10.8072 10.3907 11.0573L11.3334 11.9999C11.6667 12.3333 12 12.6666 12.6667 12.6666C13.1971 12.6666 13.7058 12.4559 14.0809 12.0808C14.456 11.7057 14.6667 11.197 14.6667 10.6666C14.6667 9.63658 14.264 6.27725 14.21 5.82792C14.2054 5.79458 14.2027 5.76125 14.1987 5.72725C14.1312 5.07079 13.8227 4.46267 13.3329 4.02048C12.843 3.57828 12.2066 3.33342 11.5467 3.33325Z"
                                        stroke="#6D28D9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="party-chat__partydetails-item-text">
                                Casual
                            </div>
                        </div>
                    </div>
                </div>

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
