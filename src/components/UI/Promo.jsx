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
                    <a
                        href="#"
                        className="promo__content-cta promo__content-cta-start"
                    >
                        Créer un compte gratuit
                    </a>
                    <a
                        href="#"
                        className="promo__content-cta promo__content-cta-explore"
                    >
                        Explorer les jeux
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Promo;
