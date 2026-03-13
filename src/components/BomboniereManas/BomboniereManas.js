import React from "react";
import GridProject from "../utils/GridProject";
import Details from "../utils/Details";
// Certifique-se de adicionar a imagem correspondente na pasta assets
import bomboniereImage from "../../assets/bomboniereImage.png";

const BomboniereManas = () => {
    return (
        <GridProject image={bomboniereImage}>
            <Details
                title="Bomboniere Manas"
                description="Site institucional e catálogo online desenvolvido para a Bomboniere Manas. O projeto apresenta a variedade de produtos da loja, fortalecendo a presença digital da marca e facilitando o acesso dos clientes às informações e novidades."
                repoLink="/" // Adicione o link do repositório GitHub se houver, ou mantenha "/"
                liveLink="https://www.bombonieremanas.com.br/"
            />
        </GridProject>
    );
};

export default BomboniereManas;
