import "./MinhasTec.css";
import CardTecs from "./CardTecs";
import Subtitulo from "../componentes/Subtitulo";

// imagens das tecnologias
import html from "../assets/img-projetos-web/html5.svg";
import css3 from "../assets/img-projetos-web/css3.svg";
import javaScript from "../assets/img-projetos-web/javaScript.svg";
import react from "../assets/img-projetos-web/react.svg";
import nodejs from "../assets/img-projetos-web/nodejs.svg";
import figma from "../assets/img-projetos-web/figma.svg";
import git from "../assets/img-projetos-web/git.svg";
import gitHub from "../assets/img-projetos-web/gitHub.svg";
import bootstrap from "../assets/img-projetos-web/bootstrap.svg";


const MinhasTec = () => {
    return (
        <section className="container-tecs">
            <Subtitulo nome="Tecnologias" />
            <div className="tecs">
                <CardTecs img={html} titulo="HTML5" />
                <CardTecs img={css3} titulo="CSS3" />
                <CardTecs img={javaScript} titulo="JavaScript" />
                <CardTecs img={react} titulo="React" />
                <CardTecs img={nodejs} titulo="Nodejs" />
                <CardTecs img={figma} titulo="Figma" />
                <CardTecs img={git} titulo="Git" />
                <CardTecs img={gitHub} titulo="GitHub" />
                <CardTecs img={bootstrap} titulo="Bootstrap5" />
            </div>
        </section>
    );
};

export default MinhasTec;
