import { useRef } from "react";

import CardProjetos from "../componentes/CardProjetos";

import previsao from "../assets/img-projetos-web/previsao.png";
import finApp from "../assets/img-projetos-web/finapp.png";
import food from "../assets/img-projetos-web/food.png";
import listaCompras from "../assets/img-projetos-web/lista.png";
import meteora from "../assets/img-projetos-web/meteora.png";
import cadServico from "../assets/img-projetos-web/cad-servico.png";
import styloShic from "../assets/img-projetos-web/stylo-shic.png";
import teckpoint from "../assets/img-projetos-web/techpoint.png";

import "./MeusProjetos.css";
import Subtitulo from "../componentes/Subtitulo";

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
            <Subtitulo nome=" Meus Projetos Web" />
            <div className="caixa-botoes-slide">
                <BotaoSlider onClick={clickNext} className="btn-next ">
                    <span translate="no">Next</span>
                    <GrNext />
                </BotaoSlider>

                <BotaoSlider onClick={clickPrev} className="btn-prev ">
                    <GrPrevious />
                    <span translate="no">Prev</span>
                </BotaoSlider>
            </div>

            <div className="projects" ref={slide}>
                <CardProjetos
                    img={previsao}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="prevtempoapp.netlify.app"
                    linkCodigo="github.com/marceloguima/previsao-tempo"
                />
                <CardProjetos
                    img={finApp}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="finaapp1.netlify.app"
                    linkCodigo="github.com/marceloguima/controle-financeiro"
                />
                <CardProjetos
                    img={food}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="or-food.netlify.app"
                    linkCodigo="github.com/marceloguima/food"
                />
              
                <CardProjetos
                    img={meteora}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="lojmeteora.netlify.app"
                    linkCodigo="github.com/marceloguima/projeto-meteora"
                />

                <CardProjetos
                    img={cadServico}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="controladodecaixa.netlify.app"
                    linkCodigo="github.com/marceloguima/controle-de--caixa"
                />
                <CardProjetos
                    img={styloShic}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="stylo-top.netlify.app"
                    linkCodigo="github.com/marceloguima/estilo-chic"
                />
                <CardProjetos
                    img={teckpoint}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="teckpoint.netlify.app"
                    linkCodigo="github.com/marceloguima/techpoint"
                />

                  <CardProjetos
                    img={listaCompras}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkProjeto="vamoscomprar.netlify.app"
                    linkCodigo="github.com/marceloguima/Lista-de-compras"
                />
            </div>
        </section>
    );
};

export default MeusProjetos;
