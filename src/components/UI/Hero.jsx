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
                        <a href="#" className="hero__infos-cta hero__infos-cta-start">Commencer</a>
                        <a href="#" className="hero__infos-cta hero__infos-cta-explore">Explorer les jeux</a>
                    </div>
                </div>

                <div className="hero__illustration">
                    <img src="" alt="Hero illustration" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
