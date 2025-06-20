import Footer from "../UI/Footer";
import { Link } from "react-router-dom";

function GamesUI() {
    return (
        <>
            <div className="games__container">
                <div className="games__header">
                    <div className="games__header-title">
                        Choisissez votre terrain de <span>jeu</span>
                    </div>
                    <div className="games__header-searchs">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="form__control"
                        />
                        <select name="" id="" className="form__control">
                            <option value="">Type de jeu</option>
                            <option value="1">Action</option>
                            <option value="2">RPG</option>
                            <option value="3">FPS</option>
                        </select>
                    </div>
                </div>
                <div className="games__list">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Link to="#" className="games__card" key={index}>
                            <div className="games__card-image">
                                <img
                                    src="https://afjv.com/2023/02/230213-jeux-video.jpg"
                                    alt="Game Thumbnail"
                                    loading="lazy"
                                />
                            </div>
                            <div className="games__card-info">
                                <h3 className="games__card-title">
                                    Nom du jeu
                                </h3>

                                <div className="games__card-badges">
                                    <div className="games__card-badge">
                                        Action
                                    </div>
                                </div>

                                <span className="games__card-stats">
                                    <span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 13.9998C12 12.5853 11.4381 11.2288 10.4379 10.2286C9.43775 9.22841 8.0812 8.6665 6.66671 8.6665C5.25222 8.6665 3.89567 9.22841 2.89547 10.2286C1.89528 11.2288 1.33337 12.5853 1.33337 13.9998"
                                                stroke="#6D28D9"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M6.66671 8.66667C8.50766 8.66667 10 7.17428 10 5.33333C10 3.49238 8.50766 2 6.66671 2C4.82576 2 3.33337 3.49238 3.33337 5.33333C3.33337 7.17428 4.82576 8.66667 6.66671 8.66667Z"
                                                stroke="#6D28D9"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.6666 13.3335C14.6666 11.0868 13.3333 9.00013 12 8.00013C12.4382 7.67131 12.7887 7.23952 13.0203 6.74298C13.252 6.24643 13.3576 5.70044 13.328 5.15333C13.2983 4.60622 13.1342 4.07485 12.8503 3.60626C12.5663 3.13767 12.1712 2.7463 11.7 2.4668"
                                                stroke="#6D28D9"
                                                strokeWidth="1.33333"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span>20 342</span>
                                    <span>parties actives</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="games__pagination">
                    <div className="hero__infos-cta hero__infos-cta-start">
                        Voir plus de jeux
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default GamesUI;
