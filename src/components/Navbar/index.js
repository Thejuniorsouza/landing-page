import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Navbar = (props) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Se scroll for maior que 50px, ativar o modo reduzido
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e) => {
        const href = e.currentTarget.getAttribute("href");

        // Se for um link externo, deixar o comportamento padrão
        if (href.startsWith("http")) {
            return;
        }

        // Se for um âncora (#), fazer scroll suave
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
            <ul>
                <li>
                    <a href="#home" onClick={handleSmoothScroll}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#bodyTecs" onClick={handleSmoothScroll}>
                        Tecnologias
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={handleSmoothScroll}>
                        Projetos
                    </a>
                </li>
            </ul>

            <ul className="medias">
                <li>
                    <a
                        href="https://www.linkedin.com/in/junior-souza-83896b210/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Thejuniorsouza"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <AiFillGithub size={30} />{" "}
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
