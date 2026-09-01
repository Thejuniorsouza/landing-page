import "./Tecnologies.css";
import {
    FaCode,
    FaServer,
    FaDatabase,
    FaMobileAlt,
    FaGitAlt,
    FaReact,
} from "react-icons/fa";

const services = [
    {
        icon: FaCode,
        title: "Desenvolvimento Web",
        description:
            "Criação de interfaces e aplicações web com HTML5, CSS3, JavaScript e React.js.",
    },
    {
        icon: FaServer,
        title: "Backend & APIs",
        description:
            "Desenvolvimento de sistemas com Java e .NET, integrando lógica de negócio e APIs.",
    },
    {
        icon: FaDatabase,
        title: "Banco de Dados",
        description:
            "Modelagem e integração com PostgreSQL para aplicações escaláveis e performáticas.",
    },
    {
        icon: FaMobileAlt,
        title: "Aplicações SaaS",
        description:
            "Projetos como ImobTech e FoodScript, focados em gestão, cadastro e experiência do usuário.",
    },
    {
        icon: FaGitAlt,
        title: "Controle de Versão",
        description:
            "Fluxo de trabalho com Git, boas práticas de colaboração e entrega contínua.",
    },
    {
        icon: FaReact,
        title: "React.js",
        description:
            "Componentes reutilizáveis, SPAs responsivas e arquiteturas front-end modernas.",
    },
];

const Tecnologies = () => {
    return (
        <section className="services-section" id="bodyTecs">
            <div className="section-container">
                <h2 className="section-title">Tecnologias</h2>
                <div className="services-grid">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <article
                                key={service.title}
                                className="service-card"
                            >
                                <Icon className="service-icon" size={22} />
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        );
                    })}
                </div>

                <div className="tech-stack">
                    <p className="tech-stack-label">Stack principal</p>
                    <div className="tech-stack-items">
                        {[
                            "HTML5",
                            "CSS3",
                            "JavaScript",
                            "React.js",
                            "Java",
                            ".NET",
                            "PostgreSQL",
                            "Git",
                        ].map((tech) => (
                            <span key={tech} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tecnologies;
