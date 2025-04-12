function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__logo">Logo Disgame</div>
                <div className="navbar__auth">
                    <a href="#" className="navbar__button navbar__button-login">
                        Se connecter
                    </a>
                    <a
                        href="#"
                        className="navbar__button navbar__button-register"
                    >
                        S'inscrire
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
