import PopularGamesCard from "./PopularGamesCard";

function PopularGames() {
    const games = [
        {
            title: "Apex Legends",
            players: "10,000+ joueurs",
            image: "https://cdn1.epicgames.com/spt-assets/5dcd88f4e2094a698ebffa43438edc33/apex-legends-1b0ri.jpg",
        },
        {
            title: "Fortnite",
            players: "50,000+ joueurs",
            image: "https://cdn2.unrealengine.com/ch6s2-header-image-2012x1132-e85de33a762f.jpg",
        },
        {
            title: "Valorant",
            players: "20,000+ joueurs",
            image: "https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/valorant-ameliorer-aim-visee-astuces",
        },
        {
            title: "League of Legends",
            players: "30,000+ joueurs",
            image: "https://gaming-cdn.com/images/products/9456/orig/league-of-legends-pc-jeu-cover.jpg?v=1662363312",
        },
    ];

    return (
        <div className="populargames">
            <div className="populargames__container">
                <div className="populargames__header">
                    <div className="populargames__header-title">
                        Jeux Populaires
                    </div>
                    <div className="populargames__header-subtitle">
                        <div className="populargames__header-subtitle-info">
                            Rejoignez des milliers de joueurs dans ces jeux
                            tendance
                        </div>
                        <div className="populargames__header-subtitle-cta">
                            <a href="#">
                                Voir tous les jeux
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="populargames__content">
                    {games.map((game, index) => (
                        <PopularGamesCard
                            key={index}
                            title={game.title}
                            players={game.players}
                            image={game.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopularGames;
