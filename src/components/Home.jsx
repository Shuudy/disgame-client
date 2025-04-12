import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";
import PopularGames from "./UI/PopularGames";
import Features from "./UI/Features";
import Promo from "./UI/Promo";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <PopularGames />
            <Features />
            <Promo />

            <div>
                <h1>Home</h1>
                <p>Welcome to the Home page!</p>
            </div>
        </>
    );
}

export default Home;
