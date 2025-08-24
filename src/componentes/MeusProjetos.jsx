import { useRef } from "react";

import CardProjetos from "../componentes/CardProjetos";
import previsao from "../assets/previsao.png";

import "./MeusProjetos.css";

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
        <div className="container-projects">
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

            <section className="projects" ref={slide}>
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
                    img={previsao}
                    titulo="Aplicação web de previsão do tempo"
                    descricao="Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo."
                    linkCodigo=""
                    linkProjeto="prevtempoapp.netlify.app"
                />
            </section>
        </div>
    );
};

export default MeusProjetos;
