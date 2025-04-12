import Navbar from "./UI/Navbar";
import Hero from "./UI/Hero";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <div>
                <h1>Home</h1>
                <p>Welcome to the Home page!</p>
            </div>
        </>
    );
}

export default Home;
