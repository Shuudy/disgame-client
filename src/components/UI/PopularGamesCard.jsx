import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PopularGamesCard({ id, title, players, image }) {
    return (
        <Link to={`/games/${id}`} className="populargames__content-card">
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
        </Link>
    );
}

PopularGamesCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default PopularGamesCard;
