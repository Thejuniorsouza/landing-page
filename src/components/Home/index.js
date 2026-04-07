import "./Home.css";
// import BlurText from "../utils/BlurText";
import TypingEffect from "../utils/TypingEffect";

// const handleAnimationComplete = () => {
//     console.log("Animation completed!");
// };

const descriptionText =
    "Graduado em Análise e Desenvolvimento de Sistemas, com uma trajetória profissional consolidada em setores dinâmicos como finanças e mercado imobiliário. Essa experiência multidisciplinar me dotou de uma visão de negócio aguçada, capacidade analítica e facilidade em traduzir necessidades complexas em soluções lógicas. Hoje, foco minha carreira no desenvolvimento de software, unindo a disciplina do setor corporativo com o domínio técnico adquirido na graduação. Sou apaixonado por resolver problemas através de código limpo e arquiteturas eficientes, sempre com foco na entrega de valor e na escalabilidade dos sistemas.";
const titleText = "Junior Souza";

const Home = (props) => {
    return (
        <div className="home" id="home">
            <div className="text">
                <TypingEffect
                    text={titleText}
                    speed={50}
                    tag="h1"
                    className="typing-h1"
                />

                {/* <BlurText
                    text="Junior Souza"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="flex flex-wrap text-4xl font-bold text-slate-800 dark:text-white"
                /> */}
                <TypingEffect
                    text={descriptionText}
                    speed={8}
                    tag="span"
                    className="textDesc"
                />
            </div>
            <div className="img">
                <img
                    src="https://www.github.com/Thejuniorsouza.png"
                    alt="Foto de perfil"
                ></img>
            </div>
        </div>
    );
};
export default Home;
