import { useRef } from "react";

import "./SliderProjetos.css";

// meus icones prev, next
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

import BotaoSlider from "./BotaoSlider";

const SliderProjetos = ({ titulo, children }) => {
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
            <h3>{titulo}</h3>
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
                {/* aqui o conteudo de slider */}
                {children}
            </div>
        </section>
    );
};

export default SliderProjetos;
