function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__content-infos">
                        <div className="footer__content-infos-logo">
                            Logo Disgame
                        </div>
                        <div className="footer__content-infos-desc">
                        Connecte-toi avec d'autres gamers, rejoins des sessions et améliore ton expérience de jeu.
                        </div>
                    </div>
                    <div className="footer__content-nav">

                        <div className="footer__content-column">
                            <div className="footer__content-column-title">Plateforme</div>
                            <ul className="footer__content-column-list">
                                <li className="footer__content-column-list-item"><a href="#">Jeux</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Sessions</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Tournois</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Communauté</a></li>
                            </ul>
                        </div>

                        <div className="footer__content-column">
                            <div className="footer__content-column-title">Entreprise</div>
                            <ul className="footer__content-column-list">
                                <li className="footer__content-column-list-item"><a href="#">À propos</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Carrières</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Blog</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer__content-column">
                            <div className="footer__content-column-title">Légal</div>
                            <ul className="footer__content-column-list">
                                <li className="footer__content-column-list-item"><a href="#">Conditions d'utilisation</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Politique de confidentialité</a></li>
                                <li className="footer__content-column-list-item"><a href="#">Politique relative aux cookies</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="footer__separator"></div>
                <div className="footer__copyright">&copy; 2025 Disgame. All rights reserved.</div>
            </div>
        </div>
    );
}

export default Footer;