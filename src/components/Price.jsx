import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

function Price() {
    const infos = {
        free: {
            features: [
                "Création et recherche de parties",
                "Filtres et recherches de joueurs limités par jour",
                "Matchmaking basique selon des critères restreints",
                "Publicité intégrée",
            ],
            unavailableFeatures: [
                "Recherche avancée",
                "Messages et contacts illimités",
                "Accès exclusif aux événements et tournois",
                "Personnalisation avancée du profil",
                "Expérience sans publicités",
            ],
        },
        premium: {
            features: [
                "Création et recherche de parties",
                "Filtres et recherches de joueurs limités par jour",
                "Matchmaking basique selon des critères restreints",
                "Recherche avancée",
                "Messages et contacts illimités",
                "Accès exclusif aux événements et tournois",
                "Personnalisation avancée du profil",
                "Expérience sans publicités",
            ],
        },
    };

    return (
        <>
            <Navbar />

            <div className="page-header">
                <div className="page-header__title">
                    Passez au niveau <span>supérieur</span>
                </div>
                <div className="page-header__subtitle">
                    Choisissez un plan. Changez quand vous voulez.
                </div>
            </div>

            <div className="price__cards">
                <div className="price__card">
                    <div className="price__card-header">
                        <div className="price__card-title">Gratuit</div>
                        <div className="price__card-subtitle">
                            Commencez avec les bases.
                        </div>
                        <div className="price__card-price">
                            <span className="price__card-price-amount">0</span>
                            <span className="price__card-price-currency">
                                €
                            </span>
                            <span className="price__card-price-period">
                                /mois
                            </span>
                        </div>

                        <div className="price__card-button">
                            <a href="" className="form__button">
                                Créer un compte
                            </a>
                        </div>
                    </div>
                    <div className="price__card-infos">
                        {infos.free.features.map((feature, index) => (
                            <div className="price__card-info" key={index}>
                                <div className="price__card-info-icon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.6666 5L7.49992 14.1667L3.33325 10"
                                            stroke="#6D28D9"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="price__card-info-title">
                                    {feature}
                                </div>
                            </div>
                        ))}

                        {infos.free.unavailableFeatures.map(
                            (feature, index) => (
                                <div className="price__card-info" key={index}>
                                    <div className="price__card-info-icon">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 5L5 15"
                                                stroke="#4B5563"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M5 5L15 15"
                                                stroke="#4B5563"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="price__card-info-title price__card-info-title-crossed">
                                        {feature}
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>

                <div className="price__card">
                    <div className="price__card-header">
                        <div className="price__card-title">Premium</div>
                        <div className="price__card-subtitle">
                            Profitez de toutes les fonctionnalités
                        </div>
                        <div className="price__card-price">
                            <span className="price__card-price-amount">
                                5,99
                            </span>
                            <span className="price__card-price-currency">
                                €
                            </span>
                            <span className="price__card-price-period">
                                /mois
                            </span>
                        </div>

                        <div className="price__card-button">
                            <a href="" className="form__button">
                                Profitez du Premium
                            </a>
                        </div>
                    </div>
                    <div className="price__card-infos">
                        {infos.premium.features.map((feature, index) => (
                            <div className="price__card-info" key={index}>
                                <div className="price__card-info-icon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.6666 5L7.49992 14.1667L3.33325 10"
                                            stroke="#6D28D9"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="price__card-info-title">
                                    {feature}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Price;
