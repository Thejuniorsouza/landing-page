import React from "react";
import "./Style.css";
import Button from "../Button/Button";

function Details({ title, description, repoLink, liveLink }) {
    const handleOpen = (link) => {
        if (link && link !== "/") {
            window.open(link, "_blank");
        }
    };

    return (
        <div className="detailsContainer">
            <h2>{title}</h2>
            <p className="textDetail">{description}</p>
            <div className="details-buttons">
                {repoLink && repoLink !== "/" && (
                    <Button
                        color="transparent"
                        text="Repositório"
                        onClick={() => handleOpen(repoLink)}
                        className="btn btn-outline"
                    />
                )}
                {liveLink && liveLink !== "/" && (
                    <Button
                        text="Ver Projeto"
                        color="var(--color-accent)"
                        onClick={() => handleOpen(liveLink)}
                        className="btn btn-filled"
                    />
                )}
            </div>
        </div>
    );
}

export default Details;
