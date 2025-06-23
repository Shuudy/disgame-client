import { Link } from "react-router-dom";
import logo from "../../assets/logo-disgame.svg";
import useAuth from "../../hooks/useAuth";

function Navbar() {
    const { user } = useAuth();

    return (
        <div className="navbar">
            <div className="navbar__content">
                <Link href="/" className="navbar__logo">
                    <img src={logo} alt="Disgame Logo" />
                </Link>
                <div className="navbar-links">
                    <Link to="/games" className="navbar__link">
                        Découvrir les jeux
                    </Link>
                    <Link to="/price" className="navbar__link">
                        Tarifs
                    </Link>
                </div>
                <div className="navbar__auth">
                    {user ? (
                        <Link to={`/profile/${user.id}`} className="navbar__profile">
                            <img
                                src={`https://ui-avatars.com/api/?background=random&name=${user.username}&size=48`}
                            />
                        </Link>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
