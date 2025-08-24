import "./MinhasTec.css"

// imagens das tecnologias
import html from "../assets/html5.svg"
import css3 from "../assets/css3.svg"
import javaScript from "../assets/javaScript.svg"
import react from "../assets/react.svg"
import nodejs from "../assets/nodejs.svg"
import figma from "../assets/figma.svg"
import git from "../assets/git.svg"
import gitHub from "../assets/gitHub.svg"
import bootstrap from "../assets/bootstrap.svg"




const MinhasTec = () => {
  return (
    <section className="tecs">
   
      <div className="circle">
        <img src={html} alt="imagem html5" />
      </div>
      <div className="circle"><img src={css3} alt="imagem html5" /></div>
      <div className="circle"><img src={javaScript} alt="imagem javaScript" /></div>
      <div className="circle"><img src={react} alt="imagem react" /></div>
      <div className="circle"><img src={nodejs} alt="imagem node js" /></div>
      <div className="circle"><img src={figma} alt="imagem figma" /></div>
      <div className="circle"><img src={git} alt="imagem git" /></div>
      <div className="circle"><img src={gitHub} alt="imagem gitHub" /></div>
      <div className="circle"><img src={bootstrap} alt="imagem bootstrap" /></div>
    </section>
  )
}

export default MinhasTec
