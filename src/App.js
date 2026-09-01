import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index.js";
import Home from "./components/Home/index.js";
import About from "./components/About/index.js";
import Tecnologies from "./components/Tecnologies/index.js";
import GitHubProjectSection from "./components/GitHubProjects/GitHubProjects.js";
import Footer from "./components/Footer/Footer.js";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main className="homePage">
                <Home />
                <About />
                <Tecnologies />
                <GitHubProjectSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
