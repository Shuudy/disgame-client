import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className="hero__infos">
                    <div className="hero__infos-title">
                        Trouvez des <span>coéquipiers</span>,
                        Rejoignez des <span>parties</span>
                    </div>

                    <div className="hero__infos-description">
                        Disgame vous connecte avec d'autres joueurs lors de sessions de jeu. Trouvez votre équipe idéale, rejoignez des salons de discussion et améliorez votre expérience de jeu.
                    </div>

                    <div className="hero__infos-ctas">
                        <Link to="/register" className="hero__infos-cta hero__infos-cta-start">Commencer</Link>
                        <Link to="/games" className="hero__infos-cta hero__infos-cta-explore">Explorer les jeux</Link>
                    </div>
                </div>

                <div className="hero__illustration">
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/lescoopsdelinformation/QRXY4WOQ45BSXFC5EHNUAJEEQY.jpg" alt="Hero illustration" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
