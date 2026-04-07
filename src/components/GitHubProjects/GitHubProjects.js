import React from "react";
import "./GitHubProjects.css";
import GridProject from "../utils/GridProject";
import Details from "../utils/Details";
import Footer from "../Footer/Footer";
import ajudaImage from "../../assets/ajudaImage.png";
import bibliotecaOnline from "../../assets/bibliotecaOnline.png";
import foodScriptImage from "../../assets/foodScriptImage.png";
import bomboniereImage from "../../assets/bomboniereImage.png";

const projectsData = [
    {
        title: "Bomboniere Manas",
        description:
            "Site institucional e catálogo online desenvolvido para a Bomboniere Manas. O projeto apresenta a variedade de produtos da loja, fortalecendo a presença digital da marca e facilitando o acesso dos clientes às informações e novidades.",
        repoLink: "/",
        liveLink: "https://www.bombonieremanas.com.br/",
        image: bomboniereImage,
    },
    {
        title: "AjudaFortaleza",
        description:
            "AjudaFortaleza é um projeto acadêmico dedicado a conectar pessoas e organizações que buscam contribuir com causas sociais em Fortaleza. O site oferece um catálogo completo de ONGs locais, permitindo que os usuários descubram, conheçam e se envolvam com instituições que fazem a diferença na cidade. Com informações detalhadas sobre as áreas de atuação, necessidades de voluntariado e opções de doações, o AjudaFortaleza facilita o engajamento da comunidade em ações solidárias. A plataforma também serve como um ponto de encontro para quem deseja promover ou apoiar campanhas sociais, ajudando a fortalecer a rede de apoio e assistência na região.",
        repoLink: "https://github.com/Thejuniorsouza/AjudaFortalezaApp",
        liveLink: "https://ajuda-fortaleza-app.vercel.app/",
        image: ajudaImage,
    },
    {
        title: "FoodScript",
        description:
            "O FoodScript é um projeto de um sistema web de cadastro de receitas culinárias, desenvolvido como Trabalho de Conclusão de Curso (TCC). O sistema permite que usuários cadastrem e gerenciem suas próprias receitas, facilitando o compartilhamento e a organização de informações culinárias.",
        repoLink: "https://github.com/Thejuniorsouza/FoodScript",
        liveLink: "https://food-script.vercel.app/",
        image: foodScriptImage,
    },
    {
        title: "Estante de livros",
        description:
            "Estante de livros é um projeto acadêmico projetado para ajudar os amantes de livros a organizar suas leituras de forma simples e eficiente. Através do site, os usuários podem cadastrar livros que já leram, estão lendo ou planejam ler. Cada livro pode ser classificado com notas. Além disso, os usuários têm a possibilidade de escrever resenhas pessoais, registrando suas impressões e opiniões sobre cada obra. Com uma interface amigável e intuitiva, o Estante de livros permite aos leitores acompanhar seu progresso literário. O objetivo do site é transformar o hábito da leitura em uma experiência mais organizada e interativa, permitindo que o usuário mantenha um histórico completo de suas leituras e descobertas literárias.",
        repoLink: "https://github.com/jonathashnr/livrosapp",
        liveLink: "/",
        image: bibliotecaOnline,
    },
];

const ProjectCard = ({ project }) => (
    <GridProject image={project.image}>
        <Details
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
        />
    </GridProject>
);

const GitHubProjectSection = () => {
    return (
        <div className="github-projects">
            <section className="headerProject">
                <div className="custom-shape-divider-top-1725584300">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            class="shape-fill"
                        ></path>
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                            class="shape-fill"
                        ></path>
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
                <h1>Meus projetos</h1>

                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <ProjectCard project={project} />
                        {index < projectsData.length - 1 && (
                            <section className="page">
                                <hr className="dashed-divider" />
                            </section>
                        )}
                    </React.Fragment>
                ))}
                <div className="footer"></div>
            </section>
            <Footer />
        </div>
    );
};

export default GitHubProjectSection;
