import "./Navbar.css";
import React, { useState, useEffect } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Tecnologias", href: "#bodyTecs" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const handleSmoothScroll = (e) => {
        const href = e.currentTarget.getAttribute("href");
        if (href?.startsWith("#")) {
            e.preventDefault();
            setMenuOpen(false);
            document.getElementById(href.substring(1))?.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="navbar">
            <div className="navbar-inner section-container">
                <a
                    href="#home"
                    className="navbar-brand"
                    onClick={handleSmoothScroll}
                >
                    Junior
                </a>

                <button
                    className={`navbar-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
                    <ul className="navbar-links">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={handleSmoothScroll}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="mailto:juniorsouzacmr@gmail.com"
                        className="btn-pill navbar-cta"
                    >
                        Me contate
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
