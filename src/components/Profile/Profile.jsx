import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ProfileOverview from "./ProfileOverview";
import ProfileGames from "./ProfileGames";
import ProfileParties from "./ProfileParties";
import ProfileReviews from "./ProfileReviews";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function Profile() {
    const [activeTab, setActiveTab] = useState("overview");
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/profile/${id || ""}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    },
                );
                if (!response.ok) throw new Error("Failed to fetch profile");
                const data = await response.json();
                setProfile(data);
                setError(null);
            } catch (err) {
                setError("Erreur lors du chargement du profil.");
            } finally {
                setLoading(false);
            }
        };
        if (user?.token) fetchProfile();
    }, [user?.token, id]);

    if (loading)
        return <div className="profile__loading">Chargement du profil...</div>;
    if (error) return <div className="profile__error">{error}</div>;
    if (!profile) return null;

    return (
        <>
            <Navbar />
            <div className="profile__container">
                <div className="profile__header">
                    <div className="profile__header-image">
                        <img
                            src={`https://ui-avatars.com/api/?background=random&name=${profile.username}&size=120`}
                            alt="Profile picture"
                        />
                    </div>
                    <div className="profile__header-infos">
                        <div className="profile__header-infos-name">
                            {profile.username}
                        </div>
                        <div className="profile__header-infos-member-since">
                            Membre depuis{" "}
                            {profile.createdAt
                                ? new Date(
                                      profile.createdAt,
                                  ).toLocaleDateString("fr-FR", {
                                      year: "numeric",
                                      month: "long",
                                  })
                                : "N/A"}
                        </div>
                        <div className="profile__header-infos-bio">
                            {profile.biography || "Aucune bio renseignée."}
                        </div>

                        <div className="profile__header-infos-badges">
                            <div className="profile__header-infos-badge">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.6666 14V12.6667C12.6666 11.9594 12.3856 11.2811 11.8855 10.781C11.3854 10.281 10.7072 10 9.99992 10H5.99992C5.29267 10 4.6144 10.281 4.1143 10.781C3.6142 11.2811 3.33325 11.9594 3.33325 12.6667V14"
                                        stroke="#6B7280"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>
                                    {profile.location || "Aucun lieu précisé."}
                                </span>
                            </div>
                            <div className="profile__header-infos-badge">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.6666 14V12.6667C10.6666 11.9594 10.3856 11.2811 9.88554 10.781C9.38544 10.281 8.70716 10 7.99992 10H3.99992C3.29267 10 2.6144 10.281 2.1143 10.781C1.6142 11.2811 1.33325 11.9594 1.33325 12.6667V14"
                                        stroke="#6B7280"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.99992 7.33333C7.47268 7.33333 8.66659 6.13943 8.66659 4.66667C8.66659 3.19391 7.47268 2 5.99992 2C4.52716 2 3.33325 3.19391 3.33325 4.66667C3.33325 6.13943 4.52716 7.33333 5.99992 7.33333Z"
                                        stroke="#6B7280"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.6667 14V12.6667C14.6663 12.0758 14.4697 11.5019 14.1077 11.0349C13.7457 10.5679 13.2388 10.2344 12.6667 10.0867"
                                        stroke="#6B7280"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.6667 2.08667C11.2404 2.23354 11.7488 2.56714 12.1118 3.03488C12.4749 3.50262 12.672 4.07789 12.672 4.67C12.672 5.26212 12.4749 5.83739 12.1118 6.30513C11.7488 6.77287 11.2404 7.10647 10.6667 7.25334"
                                        stroke="#6B7280"
                                        strokeWidth="1.33333"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>63 parties rejointes</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__tabs">
                    <div
                        className={`profile__tabs-item${
                            activeTab === "overview" ? " active" : ""
                        }`}
                        onClick={() => setActiveTab("overview")}
                    >
                        Aperçu
                    </div>
                    <div
                        className={`profile__tabs-item${
                            activeTab === "reviews" ? " active" : ""
                        }`}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Avis
                    </div>
                    <div
                        className={`profile__tabs-item${
                            activeTab === "games" ? " active" : ""
                        }`}
                        onClick={() => setActiveTab("games")}
                    >
                        Jeux
                    </div>
                    <div
                        className={`profile__tabs-item${
                            activeTab === "parties" ? " active" : ""
                        }`}
                        onClick={() => setActiveTab("parties")}
                    >
                        Parties
                    </div>
                </div>
                <div className="profile__content">
                    {activeTab === "overview" && <ProfileOverview />}
                    {activeTab === "reviews" && (
                        <ProfileReviews
                            ratings={profile.receivedRatings}
                            profileId={id}
                        />
                    )}
                    {activeTab === "games" && <ProfileGames />}
                    {activeTab === "parties" && <ProfileParties />}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
