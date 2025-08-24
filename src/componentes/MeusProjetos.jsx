import { useRef } from "react";

import CardProjetos from "../componentes/CardProjetos";

import previsao from "../assets/img-projetos-web/previsao.png";
import finApp from "../assets/img-projetos-web/finapp.png"
import food from "../assets/img-projetos-web/food.png"
import listaCompras from "../assets/img-projetos-web/lista.png"
import meteora from "../assets/img-projetos-web/meteora.png"
import cadServico from "../assets/img-projetos-web/cad-servico.png"
import styloShic from "../assets/img-projetos-web/stylo-shic.png"
// import finApp from "../assets/finapp.png"
// import finApp from "../assets/finapp.png"
// import finApp from "../assets/finapp.png"


import "./MeusProjetos.css";
import Subtitulo from "../componentes/Subtitulo"


// meus icones prev, next
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import BotaoSlider from "./BotaoSlider";

const MeusProjetos = () => {
    const slide = useRef(null);

    const clickNext = () => {
        // evento.preventDefault();
        slide.current.scrollLeft += slide.current.offsetWidth;
    };

    const clickPrev = () => {
        // evento.preventDefault();
        slide.current.scrollLeft -= slide.current.offsetWidth;
    };

    return (
        <section className="container-projects">
            <Subtitulo nome=" Meus projetos" />
            <BotaoSlider
                onClick={clickNext}
                className="btn-next btn-slider"
                icone={<GrNext />}
            ></BotaoSlider>
            <BotaoSlider
                onClick={clickPrev}
                className="btn-prev  btn-slider"
                icone={<GrPrevious />}
            ></BotaoSlider>

            <div className="projects" ref={slide}>
                <CardProjetos
                    img={previsao}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
                <CardProjetos
                    img={finApp}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
                <CardProjetos
                    img={food}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
                <CardProjetos
                    img={listaCompras}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
                <CardProjetos
                    img={meteora}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />

                <CardProjetos
                    img={cadServico}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
                <CardProjetos
                    img={styloShic}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
                <CardProjetos
                    img={previsao}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
            </div>
        </section>
    );
};

export default MeusProjetos;
