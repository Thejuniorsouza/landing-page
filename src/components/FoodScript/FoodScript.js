import React from "react";
import GridProject from "../utils/GridProject";
import Details from "../utils/Details";
import FoodScriptImage from "../../assets/FoodScript.jpeg";

const FoodScript = () => {
    return (
        <GridProject image={FoodScriptImage}>
            <Details
                title="FoodScript"
                description="Desenvolvido como parte de um projeto acadêmico, este site de cardápio online oferece uma experiência intuitiva para usuários que desejam explorar e comprar itens de um menu digital. A plataforma inclui um sistema de carrinho de compras que permite aos usuários adicionar, remover e ajustar a quantidade dos itens desejados"
                repoLink="https://github.com/IanMouraF/TrabalhoNuvem"
                liveLink="https://trabalho-nuvem-three.vercel.app/"
            />
        </GridProject>
    );
};

export default FoodScript;
