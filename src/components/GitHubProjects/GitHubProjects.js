import React from "react";
import { FiGlobe, FiSmartphone } from "react-icons/fi";
import "./GitHubProjects.css";
import ajudaImage from "../../assets/ajudaImage.png";
import bibliotecaOnline from "../../assets/bibliotecaOnline.png";
import foodScriptImage from "../../assets/foodScriptImage.png";
import bomboniereImage from "../../assets/bomboniereImage.png";
import imobTechImage from "../../assets/imobTechImage.png";

const projectsData = [
    {
        title: "ImobTech",
        category: "development",
        description:
            "SAAS ImobTech. O projeto que facilita controle de aluguéis e gestão de imóveis.",
        repoLink: "https://github.com/Thejuniorsouza/ImobTech",
        liveLink:
            "https://imobtech-ib0884xzi-thejuniorsouzas-projects.vercel.app/login",
        image: imobTechImage,
        type: "web",
    },
    {
        title: "Bomboniere Manas",
        category: "development",
        description:
            "Site institucional e catálogo online desenvolvido para a Bomboniere Manas. O projeto apresenta a variedade de produtos da loja, fortalecendo a presença digital da marca e facilitando o acesso dos clientes às informações e novidades.",
        repoLink: "/",
        liveLink: "https://www.bombonieremanas.com.br/",
        image: bomboniereImage,
        type: "web",
    },
    {
        title: "AjudaFortaleza",
        category: "development",
        description:
            "AjudaFortaleza é um projeto acadêmico dedicado a conectar pessoas e organizações que buscam contribuir com causas sociais em Fortaleza.",
        repoLink: "https://github.com/Thejuniorsouza/AjudaFortalezaApp",
        liveLink: "https://ajuda-fortaleza-app.vercel.app/",
        image: ajudaImage,
        type: "web",
    },
    {
        title: "FoodScript",
        category: "development",
        description:
            "Sistema web de cadastro de receitas culinárias, desenvolvido como Trabalho de Conclusão de Curso (TCC).",
        repoLink: "https://github.com/Thejuniorsouza/FoodScript",
        liveLink: "https://food-script.vercel.app/",
        image: foodScriptImage,
        type: "web",
    },
    {
        title: "Estante de livros",
        category: "development",
        description:
            "Projeto acadêmico para organizar leituras, registrar notas e escrever resenhas pessoais.",
        repoLink: "https://github.com/jonathashnr/livrosapp",
        liveLink: "/",
        image: bibliotecaOnline,
        type: "mobile",
    },
];

const GitHubProjectSection = () => {
    const openLink = (link) => {
        if (link && link !== "/") window.open(link, "_blank");
    };

    return (
        <section className="projects-section" id="projects">
            <div className="section-container">
                <h2 className="section-title">Projetos</h2>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <article key={project.title} className="project-card">
                            <button
                                className="project-image-btn"
                                onClick={() => openLink(project.liveLink)}
                                aria-label={`Ver projeto ${project.title}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            </button>
                            <div className="project-card-footer">
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                        {project.repoLink &&
                                            project.repoLink !== "/" && (
                                                <button
                                                    className="project-link-btn"
                                                    onClick={() =>
                                                        openLink(
                                                            project.repoLink
                                                        )
                                                    }
                                                >
                                                    Repositório
                                                </button>
                                            )}
                                        {project.liveLink &&
                                            project.liveLink !== "/" && (
                                                <button
                                                    className="project-link-btn primary"
                                                    onClick={() =>
                                                        openLink(
                                                            project.liveLink
                                                        )
                                                    }
                                                >
                                                    Ver Projeto
                                                </button>
                                            )}
                                    </div>
                                </div>
                                <span className="project-type-icon">
                                    {project.type === "mobile" ? (
                                        <FiSmartphone size={18} />
                                    ) : (
                                        <FiGlobe size={18} />
                                    )}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-view-all">
                    <a
                        href="https://github.com/Thejuniorsouza"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline-pill"
                    >
                        Ver tudo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GitHubProjectSection;
