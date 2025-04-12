function PopularGamesCard({ title, players, image }) {
    return (
        <a href="#" className="populargames__content-card">
            <div
                className="populargames__content-card-image"
                style={{
                    backgroundImage: `linear-gradient(to top, #000, transparent), url(${image})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></div>
            <div className="populargames__content-card-infos">
                <div className="populargames__content-card-infos-title">
                    {title}
                </div>
                <div className="populargames__content-card-infos-number">
                    {players}
                </div>
            </div>
        </a>
    );
}

export default PopularGamesCard;
