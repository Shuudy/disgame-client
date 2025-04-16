import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";
import PopularGames from "./UI/PopularGames";
import Features from "./UI/Features";
import Promo from "./UI/Promo";
import Footer from "./UI/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <PopularGames />
            <Features />
            <Promo />

            <Footer />
        </>
    );
}

export default Home;
