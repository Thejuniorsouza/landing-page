import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="section-container footer-inner">
                <h2 className="footer-heading">Entre em Contato</h2>

                <div className="footer-right">
                    <div className="footer-social">
                        <a
                            href="https://github.com/Thejuniorsouza"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <AiFillGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/junior-souza-83896b210/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <AiFillLinkedin size={20} />
                        </a>
                    </div>
                    <p className="footer-email">Junior Souza — Desenvolvedor de Software</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
