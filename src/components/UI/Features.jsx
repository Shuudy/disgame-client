import icon from '../../assets/svgs/tournaments.svg';
import icon1 from '../../assets/svgs/global-community.svg';
import icon2 from '../../assets/svgs/safe-env.svg';
import icon3 from '../../assets/svgs/voicechat.svg';

import FeaturesItem from './FeaturesItem';

function Features() {

    const features = [
        {
            title: "Tournois",
            subtitle: "Rejoignez ou créez des tournois et affrontez d'autres joueurs",
            icon: icon,
        },
        {
            title: "Communauté globale",
            subtitle: "Connectez-vous avec des joueurs du monde entier dans votre langue",
            icon: icon1,
        },
        {
            title: "Environnement sûr",
            subtitle: "Outils de modération pour garantir une expérience de jeu positive.",
            icon: icon2,
        },
        {
            title: "Chat vocal",
            subtitle: "Chat vocal intégré pour une communication fluide.",
            icon: icon3,
        },
    ];

    return <div className="features">
        <div className="features__container">
            <div className="features__header">
                <div className="features__header-title">Découvrir plus de fonctionnalités</div>
                <div className="features__header-subtitle">Explorez tous les outils et fonctionnalités pensés pour enrichir votre expérience de jeu.</div>
            </div>
            <div className="features__content">

                {features.map((feature, index) => (
                    <FeaturesItem
                        key={index}
                        title={feature.title}
                        subtitle={feature.subtitle}
                        icon={feature.icon}
                    />
                ))}

            </div>
        </div>
    </div>;
}

export default Features;
