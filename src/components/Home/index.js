import "./Home.css";
import TypingEffect from "../utils/TypingEffect";

const titleText = "Junior Souza";
const heroIntro =
    "Desenvolvedor de software apaixonado por resolver problemas com código limpo, arquiteturas eficientes e foco na entrega de valor.";

const Home = () => {
    return (
        <section className="hero" id="home">
            <div className="section-container hero-inner">
                <div className="hero-avatar">
                    <img
                        src="https://www.github.com/Thejuniorsouza.png"
                        alt="Foto de perfil de Junior Souza"
                    />
                </div>

                <TypingEffect
                    text={titleText}
                    speed={50}
                    tag="h1"
                    className="hero-name"
                />

                <p className="hero-role">Desenvolvedor de Software</p>

                <p className="hero-intro">{heroIntro}</p>

                <a
                    href="mailto:juniorsouzacmr@gmail.com"
                    className="btn-pill"
                >
                    Me contate
                </a>
            </div>
        </section>
    );
};

export default Home;
