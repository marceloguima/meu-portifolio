import "./MinhasTec.css"

// imagens das tecnologias
import html from "../assets/img-projetos-web/html5.svg"
import css3 from "../assets/img-projetos-web/css3.svg"
import javaScript from "../assets/img-projetos-web/javaScript.svg"
import react from "../assets/img-projetos-web/react.svg"
import nodejs from "../assets/img-projetos-web/nodejs.svg"
import figma from "../assets/img-projetos-web/figma.svg"
import git from "../assets/img-projetos-web/git.svg"
import gitHub from "../assets/img-projetos-web/gitHub.svg"
import bootstrap from "../assets/img-projetos-web/bootstrap.svg"

import Subtitulo from "../componentes/Subtitulo"




const MinhasTec = () => {
  return (

    <section className="container-tecs">
               <Subtitulo nome="Tecnologias" />

<div className="tecs">

      <div className="circle">
        <img src={html} alt="imagem html5" />
      </div>
      <div className="circle"><img src={css3} alt="imagem html5" />
      </div>
      <div className="circle"><img src={javaScript} alt="imagem javaScript" /></div>
      <div className="circle"><img src={react} alt="imagem react" /></div>
      <div className="circle"><img src={nodejs} alt="imagem node js" /></div>
      <div className="circle"><img src={figma} alt="imagem figma" /></div>
      <div className="circle"><img src={git} alt="imagem git" /></div>
      <div className="circle"><img src={gitHub} alt="imagem gitHub" /></div>
      <div className="circle"><img src={bootstrap} alt="imagem bootstrap" /></div>
</div>
    </section>
  )
}

export default MinhasTec
