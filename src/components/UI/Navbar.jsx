import { Link } from "react-router-dom";
import logo from "../../assets/logo-disgame.svg";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__content">
                <div className="navbar__logo">
                    <img src={logo} alt="Disgame Logo" />
                </div>
                <div className="navbar__auth">
                    <Link
                        to="/login"
                        className="navbar__button navbar__button-login"
                    >
                        Se connecter
                    </Link>
                    <Link
                        to="/register"
                        className="navbar__button navbar__button-register"
                    >
                        S'inscrire
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
