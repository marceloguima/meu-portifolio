import "./Hero.css";
import minhaImagem from "../assets/foto-portifolio.png";
import Botao from "./Botao";

const Hero = () => {
    return (
        <section className="hero">
            <div className="caixa-imagem">
                <img src={minhaImagem} alt="minha imagem" />
            </div>
            <div className="apresentacao">
                <h1>Olá, eu sou Marcelo Guimarães</h1>
                <p>
                    Desenvolvedor Front-end que transforma ideias em interfaces
                    elegantes e eficientes.
                </p>
                <div className="botoes">
                    <Botao className="botao-azul">Baixar CV</Botao>
                    <Botao className="botao-laranja">Ver Projetos</Botao>
                </div>
            </div>
        </section>
    );
};

export default Hero;
