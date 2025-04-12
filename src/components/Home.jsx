import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";
import PopularGames from "./UI/PopularGames";
import Features from "./UI/Features";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />

            <PopularGames />
            <Features />

            <div>
                <h1>Home</h1>
                <p>Welcome to the Home page!</p>
            </div>
        </>
    );
}

export default Home;
