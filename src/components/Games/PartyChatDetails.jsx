import PropTypes from "prop-types";

function PartyChatDetails({ playerCount, style }) {
    return (
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
                        {playerCount} joueurs
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
                        {style}
                    </div>
                </div>
            </div>
        </div>
    );
}

PartyChatDetails.propTypes = {
    playerCount: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
};

export default PartyChatDetails;
