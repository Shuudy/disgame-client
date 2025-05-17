import { Link } from "react-router-dom";

function Error({ code, title, message }) {
    return (
        <div className="page-error">
            <div className="page-error__code">{code}</div>
            <div className="page-error__title">{title}</div>
            <div className="page-error__message">{message}</div>

            <Link to="/" className="form__button">
                Retour à la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
