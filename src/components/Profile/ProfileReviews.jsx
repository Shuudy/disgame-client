import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ProfileReviews() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="profile__reviews">
            <div className="profile__reviews-left">
                <div className="profile__reviews-left-header">
                    <div className="profile__reviews-left-header-title">
                        Évaluations
                    </div>
                    <div className="profile__reviews-left-header-rating">
                        4,6
                    </div>
                </div>
                <div className="profile__reviews-left-subheader">
                    3 commentaires
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
                            4,2
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
                            4,2
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
                            4,2
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
                            4,2
                        </div>
                    </div>
                </div>
                <div className="profile__reviews-left-footer">
                    <div className="profile__reviews-left-separator"></div>
                    <div className="form__button" onClick={openModal}>+ Ajouter un avis</div>
                </div>
            </div>

            <div className="profile__reviews-right">
                <div className="profile__reviews-right-title">Avis récents</div>
                <div className="profile__reviews-right-list">
                    <div className="profile__reviews-right-item">
                        <div className="profile__reviews-right-picture">
                            <img src="https://placehold.co/48" alt="User" />
                        </div>
                        <div className="profile__reviews-right-item-infos">
                            <div className="profile__reviews-right-item-header">
                                <div className="profile__reviews-right-item-header-name">
                                    ProGamer123
                                </div>
                                <div className="profile__reviews-right-item-header-ratinginfo">
                                    <span>3,4</span>
                                    <span>il y a 3 jours</span>
                                </div>
                            </div>
                            <div className="profile__reviews-right-item-content">
                                test
                            </div>
                        </div>
                    </div>
                    <div className="profile__reviews-right-item">
                        <div className="profile__reviews-right-picture">
                            <img src="https://placehold.co/48" alt="User" />
                        </div>
                        <div className="profile__reviews-right-item-infos">
                            <div className="profile__reviews-right-item-header">
                                <div className="profile__reviews-right-item-header-name">
                                    ProGamer123
                                </div>
                                <div className="profile__reviews-right-item-header-ratinginfo">
                                    <span>3,4</span>
                                    <span>il y a 3 jours</span>
                                </div>
                            </div>
                            <div className="profile__reviews-right-item-content">
                                test
                            </div>
                        </div>
                    </div>
                    <div className="profile__reviews-right-item">
                        <div className="profile__reviews-right-picture">
                            <img src="https://placehold.co/48" alt="User" />
                        </div>
                        <div className="profile__reviews-right-item-infos">
                            <div className="profile__reviews-right-item-header">
                                <div className="profile__reviews-right-item-header-name">
                                    ProGamer123
                                </div>
                                <div className="profile__reviews-right-item-header-ratinginfo">
                                    <span>3,4</span>
                                    <span>il y a 3 jours</span>
                                </div>
                            </div>
                            <div className="profile__reviews-right-item-content">
                                test
                            </div>
                        </div>
                    </div>
                    <div className="profile__reviews-right-item">
                        <div className="profile__reviews-right-picture">
                            <img src="https://placehold.co/48" alt="User" />
                        </div>
                        <div className="profile__reviews-right-item-infos">
                            <div className="profile__reviews-right-item-header">
                                <div className="profile__reviews-right-item-header-name">
                                    ProGamer123
                                </div>
                                <div className="profile__reviews-right-item-header-ratinginfo">
                                    <span>3,4</span>
                                    <span>il y a 3 jours</span>
                                </div>
                            </div>
                            <div className="profile__reviews-right-item-content">
                                test
                            </div>
                        </div>
                    </div>
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
