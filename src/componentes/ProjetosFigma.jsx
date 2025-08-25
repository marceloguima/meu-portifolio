import "./ProjetosFigma.css";
import CardFigma from "./CardFigma";
import Subtitulo from "./Subtitulo"

import telaInicialAgrolink from "../assets/imagens-figma/inicial-agrolink.png";
import lojaModa from "../assets/imagens-figma/loja-moda.png";

const ProjetosFigma = () => {
    return (
        <section className="projetos-figma">
            <Subtitulo nome="Meus prototipos"/>
            <div className="cards">
                <CardFigma
                    imagem={telaInicialAgrolink}
                    titulo="App de hortfrut"
                    descricao="O Agrolink foi um projeto acadêmico que tive a
                     oportunidade de desenvolver o prototipo"
                />

                  <CardFigma
                    imagem={lojaModa}
                    titulo="App de hortfrut"
                    descricao="O Agrolink foi um projeto acadêmico que tive a
                     oportunidade de desenvolver o prototipo"
                />
                  <CardFigma
                    imagem={telaInicialAgrolink}
                    titulo="App de hortfrut"
                    descricao="O Agrolink foi um projeto acadêmico que tive a
                     oportunidade de desenvolver o prototipo"
                />
            </div>
        </section>
    );
};

export default ProjetosFigma;
