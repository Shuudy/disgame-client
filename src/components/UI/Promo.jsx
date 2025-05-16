import { Link } from "react-router-dom";

function Promo() {
    return (
        <div className="promo">
            <div className="promo__content">
                <div className="promo__content-title">
                    Prêt à élever votre expérience de jeu ?
                </div>
                <div className="promo__content-subtitle">
                    Rejoignez des milliers de joueurs qui se connectent,
                    discutent et jouent ensemble sur Disgame.
                </div>
                <div className="promo__content-ctas">
                    <Link
                        to="/register"
                        className="promo__content-cta promo__content-cta-start"
                    >
                        Créer un compte gratuit
                    </Link>
                    <Link
                        to="/games"
                        className="promo__content-cta promo__content-cta-explore"
                    >
                        Explorer les jeux
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Promo;
