import "./About.css";
import React from "react";

const fullBio =
    "Graduado em Análise e Desenvolvimento de Sistemas, com uma trajetória profissional consolidada em setores dinâmicos como finanças e mercado imobiliário. Essa experiência multidisciplinar me dotou de uma visão de negócio aguçada, capacidade analítica e facilidade em traduzir necessidades complexas em soluções lógicas. Hoje, foco minha carreira no desenvolvimento de software, unindo a disciplina do setor corporativo com o domínio técnico adquirido na graduação. Sou apaixonado por resolver problemas através de código limpo e arquiteturas eficientes, sempre com foco na entrega de valor e na escalabilidade dos sistemas.";

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="section-container">
                <h2 className="section-title">Sobre mim</h2>
                <div className="about-content">
                    <p>{fullBio}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
