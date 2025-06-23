import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProfileReviews({ ratings }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const keys = ["communication", "sympathy", "punctuality", "fairplay"];

    const getAverageRating = (rating) => {
        const values = keys
            .map((key) => Number(rating[key]))
            .filter((v) => !isNaN(v));
        if (values.length === 0) return 0;
        return values.reduce((a, b) => a + b, 0) / values.length;
    };

    const getAverageForKey = (key) => {
        if (!ratings || ratings.length === 0) return 0;
        const values = ratings
            .map((r) => Number(r[key]))
            .filter((v) => !isNaN(v));
        if (values.length === 0) return 0;
        return values.reduce((a, b) => a + b, 0) / values.length;
    };

    const getGlobalAverage = () => {
        if (!ratings || ratings.length === 0) return 0;
        let sum = 0;
        let count = 0;
        ratings.forEach((r) => {
            keys.forEach((key) => {
                const v = Number(r[key]);
                if (!isNaN(v)) {
                    sum += v;
                    count++;
                }
            });
        });
        if (count === 0) return 0;
        return sum / count;
    };

    function timeAgo(dateString) {
        if (!dateString) return "";
        const date = new Date(Date.parse(dateString));
        console.log(date);
        const now = new Date();
        let diff = Math.floor((now - date) / 1000);
        if (diff < 0) diff = 0;

        if (diff < 60) return "il y a quelques secondes";
        if (diff < 3600)
            return `il y a ${Math.floor(diff / 60)} minute${
                Math.floor(diff / 60) > 1 ? "s" : ""
            }`;
        if (diff < 86400)
            return `il y a ${Math.floor(diff / 3600)} heure${
                Math.floor(diff / 3600) > 1 ? "s" : ""
            }`;
        if (diff < 2592000)
            return `il y a ${Math.floor(diff / 86400)} jour${
                Math.floor(diff / 86400) > 1 ? "s" : ""
            }`;
        if (diff < 31536000) return `il y a ${Math.floor(diff / 2592000)} mois`;
        return `il y a ${Math.floor(diff / 31536000)} an${
            Math.floor(diff / 31536000) > 1 ? "s" : ""
        }`;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${
                        i < rating ? "fill-yellow text-yellow" : "text-gray"
                    }`}
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>,
            );
        }
        return stars;
    };

    return (
        <div className="profile__reviews">
            <div className="profile__reviews-left">
                <div className="profile__reviews-left-header">
                    <div className="profile__reviews-left-header-title">
                        Évaluations
                    </div>
                    <div className="profile__reviews-left-header-rating">
                        {getGlobalAverage().toFixed(1)}
                    </div>
                </div>
                <div className="profile__reviews-left-subheader">
                    {ratings.length} commentaire{ratings.length > 1 ? "s" : ""}
                </div>
                <div className="profile__reviews-left-list">
                    <div className="profile__reviews-left-item">
                        <div className="profile__reviews-left-item-info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.73 5.82 22l1.18-7.86-5-4.87 6.91-1L12 2z"></path>
                            </svg>
                            Communication
                        </div>
                        <div className="profile__reviews-left-item-rating">
                            {getAverageForKey("communication").toFixed(1)}
                        </div>
                    </div>
                    <div className="profile__reviews-left-item">
                        <div className="profile__reviews-left-item-info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.73 5.82 22l1.18-7.86-5-4.87 6.91-1L12 2z"></path>
                            </svg>
                            Sympathie & ambiance
                        </div>
                        <div className="profile__reviews-left-item-rating">
                            {getAverageForKey("sympathy").toFixed(1)}
                        </div>
                    </div>
                    <div className="profile__reviews-left-item">
                        <div className="profile__reviews-left-item-info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.73 5.82 22l1.18-7.86-5-4.87 6.91-1L12 2z"></path>
                            </svg>
                            Ponctuel
                        </div>
                        <div className="profile__reviews-left-item-rating">
                            {getAverageForKey("punctuality").toFixed(1)}
                        </div>
                    </div>
                    <div className="profile__reviews-left-item">
                        <div className="profile__reviews-left-item-info">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.73 5.82 22l1.18-7.86-5-4.87 6.91-1L12 2z"></path>
                            </svg>
                            Fair-play
                        </div>
                        <div className="profile__reviews-left-item-rating">
                            {getAverageForKey("fairplay").toFixed(1)}
                        </div>
                    </div>
                </div>
                <div className="profile__reviews-left-footer">
                    <div className="profile__reviews-left-separator"></div>
                    <div className="form__button" onClick={openModal}>
                        + Ajouter un avis
                    </div>
                </div>
            </div>

            <div className="profile__reviews-right">
                <div className="profile__reviews-right-title">Avis récents</div>
                <div className="profile__reviews-right-list">
                    {ratings && ratings.length > 0 ? (
                        ratings.map((rating, index) => (
                            <div
                                className="profile__reviews-right-item"
                                key={index}
                            >
                                <div className="profile__reviews-right-picture">
                                    <img
                                        src={`https://ui-avatars.com/api/?background=random&name=${rating.emitter?.username}&size=50`}
                                        alt={
                                            rating.emitter?.username ||
                                            "Utilisateur"
                                        }
                                    />
                                </div>
                                <div className="profile__reviews-right-item-infos">
                                    <div className="profile__reviews-right-item-header">
                                        <div className="profile__reviews-right-item-header-name">
                                            {rating.emitter?.username ||
                                                "Utilisateur"}
                                        </div>
                                        <div className="profile__reviews-right-item-header-ratinginfo">
                                            <div>
                                                {renderStars(
                                                    getAverageRating(rating),
                                                )}
                                            </div>
                                            <span>
                                                {timeAgo(rating.createdAt) ||
                                                    ""}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="profile__reviews-right-item-content">
                                        {rating.comment || ""}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="profile__reviews-right-empty">
                            Aucun avis pour ce profil.
                        </div>
                    )}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Ajouter un avis"
                className="modal"
                overlayClassName="modal-overlay"
            >
                <h3>Ajouter un avis</h3>
            </Modal>
        </div>
    );
}

export default ProfileReviews;
