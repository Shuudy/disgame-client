import Footer from "../../components/UI/Footer";

function PartiesUI() {
    return (
        <>
            <div
                className="parties__banner"
                style={{
                    "--parties-banner-image":
                        "url('https://sites.utulsa.edu/csg/files/2022/08/dbd_keyart_4c78f56a30-scaled.jpg')",
                }}
            >
                <div className="parties__banner-content">
                    <div className="parties__banner-info">
                        <div className="parties__banner-title">Elden Ring</div>

                        <div className="parties__banner-badges">
                            <div className="parties__banner-badge">Action</div>
                            <div className="parties__banner-badge">RPG</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parties__content">
                <div className="parties__content-header">
                    <div className="parties__content-header-infos">
                        <div className="parties__content-header-infos-title">
                            Parties disponibles
                        </div>
                        <div className="parties__content-header-infos-button">
                            <a href="#" className="form__button">
                                Créer une partie
                            </a>
                        </div>
                    </div>

                    <div className="parties__content-header-searchs">
                        <div className="parties__content-header-search">
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                className="form__control"
                            />
                        </div>

                        <div className="parties__content-header-filters">
                            <div className="parties__content-header-filter">
                                <select className="form__control">
                                    <option value="">Tous les types</option>
                                    <option value="raid">Raid</option>
                                    <option value="pvp">PvP</option>
                                    <option value="coop">Coop</option>
                                </select>
                            </div>

                            <div className="parties__content-header-filter">
                                <select className="form__control">
                                    <option value="">Tous les niveaux</option>
                                    <option value="beginner">Débutant</option>
                                    <option value="intermediate">
                                        Intermédiaire
                                    </option>
                                    <option value="expert">Expert</option>
                                </select>
                            </div>

                            <div className="parties__content-header-filter">
                                <select className="form__control">
                                    <option value="">Tous les niveaux</option>
                                    <option value="beginner">Débutant</option>
                                    <option value="intermediate">
                                        Intermédiaire
                                    </option>
                                    <option value="expert">Expert</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parties__content-parties">
                    {[...Array(6)].map((_, index) => (
                        <div className="parties__content-party" key={index}>
                            <div className="parties__content-party-host">
                                <div className="parties__content-party-host-avatar">
                                    <img
                                        src="https://placehold.co/48/svg"
                                        alt="Host Avatar"
                                    />
                                </div>
                                <div className="parties__content-party-host-infos">
                                    <div className="parties__content-party-host-title">
                                        <span>Hôte</span>
                                        <span>
                                            4,3
                                            <svg
                                                width="16"
                                                height="15"
                                                viewBox="0 0 16 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                                    fill="#6D28D9"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <span className="parties__content-party-host-name">
                                        Nom utilisateur
                                    </span>
                                </div>
                            </div>

                            <div className="parties__content-party-infos">

                                <div className="parties__content-party-info">
                                    <div className="parties__content-party-info-icon">
                                        <svg
                                            width="39"
                                            height="36"
                                            viewBox="0 0 39 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M39 0H0V36H39V0Z"
                                                fill="#6D28D9"
                                            />
                                        </svg>
                                    </div>
                                    <div className="parties__content-party-info-desc">
                                        <div className="parties__content-party-info-desc-title">Mode</div>
                                        <span>Compet / Or</span>
                                    </div>
                                </div>

                                <div className="parties__content-party-info">
                                    <div className="parties__content-party-info-icon">                                        
                                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.4961 0L33.748 18L45 36H22.4961H0L11.252 18L22.4961 0Z" fill="#6D28D9"/>
                                        </svg>
                                    </div>
                                    <div className="parties__content-party-info-desc">
                                        <div className="parties__content-party-info-desc-title">Heure</div>
                                        <span>22h</span>
                                    </div>
                                </div>

                                <div className="parties__content-party-info">
                                    <div className="parties__content-party-info-icon">                                        
                                        <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.8656 7.48137C27.9003 3.90147 24.8228 0.973053 20.9916 0.940562C17.1604 0.908071 14.0264 3.78381 13.9917 7.36371C13.9569 10.9436 17.0345 13.872 20.8657 13.9045C24.6968 13.937 27.8308 11.0613 27.8656 7.48137Z" fill="#6D28D9"/>
                                            <path d="M27.5938 31.4941C27.6286 27.9142 24.551 24.9857 20.7199 24.9532C16.8887 24.9208 13.7547 27.7965 13.7199 31.3764C13.6852 34.9563 16.7628 37.8847 20.5939 37.9172C24.4251 37.9497 27.5591 35.074 27.5938 31.4941Z" fill="#6D28D9"/>
                                            <path d="M40.2684 19.8183C40.3032 16.2384 37.2256 13.31 33.3944 13.2775C29.5632 13.245 26.4293 16.1207 26.3945 19.7006C26.3597 23.2805 29.4373 26.209 33.2685 26.2414C37.0997 26.2739 40.2336 23.3982 40.2684 19.8183Z" fill="#6D28D9"/>
                                            <path d="M7 26C10.866 26 14 23.0899 14 19.5C14 15.9101 10.866 13 7 13C3.13401 13 0 15.9101 0 19.5C0 23.0899 3.13401 26 7 26Z" fill="#6D28D9"/>
                                        </svg>
                                    </div>
                                    <div className="parties__content-party-info-desc">
                                        <div className="parties__content-party-info-desc-title">Durée</div>
                                        <span>48min</span>
                                    </div>
                                </div>

                                <div className="parties__content-party-info">
                                    <div className="parties__content-party-info-icon">                                        
                                        <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="20" cy="19.5" rx="20" ry="19.5" fill="#6D28D9"/>
                                        </svg>
                                    </div>
                                    <div className="parties__content-party-info-desc">
                                        <div className="parties__content-party-info-desc-title">Équipe</div>
                                        <span>3/8 joueurs</span>
                                    </div>
                                </div>

                            </div>

                            <div className="parties__content-party-button">
                                <a href="#" className="form__button">
                                    Rejoindre la partie
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="parties__footer">
                    <a className="hero__infos-cta hero__infos-cta-start" href="#">Créer une partie</a>
                    <a className="hero__infos-cta hero__infos-cta-explore" href="#">Voir plus de parties</a>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default PartiesUI;
