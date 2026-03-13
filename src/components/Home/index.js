import "./Home.css";
import BlurText from "../utils/BlurText";

const handleAnimationComplete = () => {
    console.log("Animation completed!");
};
const Home = (props) => {
    return (
        <div className="home">
            <div className="text">
                <h1>Junior Souza</h1>

                <BlurText
                    text="Junior Souza"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="flex flex-wrap text-4xl font-bold text-slate-800 dark:text-white"
                />
                <a href="a" className="textDesc">
                    Desde pequeno sempre fui apaixonado por tecnologia e tive o
                    desejo de trabalhar em desenvolvimento. Durante a minha
                    carreira, a maior parte da minha experiência foi na área de
                    finanças e corretagem de imóveis, o que me trouxe uma
                    bagagem muito interessante sobre lidar com pessoas e
                    trabalho em equipe. Nos últimos 2 anos, investi em uma
                    faculdade de análise e desenvolvimento de sistemas a fim de
                    aprimorar e consolidar conhecimento. Acredito que estou
                    pronto para assumir novos desafios nesta área.
                </a>
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
