function FeaturesItem({ title, subtitle, icon }) {
    return (
        <div className="features__content-item">
            <div className="features__content-item-icon">
                <img src={icon} alt="Feature icon" />
            </div>
            <div className="features__content-item-title">{title}</div>
            <div className="features__content-item-subtitle">{subtitle}</div>
        </div>
    );
}

export default FeaturesItem;
