import { useLayoutEffect } from "react";
import "./Hero.css";
import minhaImagem from "../assets/foto-portifolio.png";
import Botao from "./Botao";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(
            ".titulo, .apresentacao_p, .caixa-imagem, .botao-azul",
            { x: 0, y: 0, opacity: 1 }
        );

        // retirar para não perder performance
        return () => {
            gsap.killTweensOf(
                ".titulo, .apresentacao_p, .caixa-imagem, .botao-azul, .botao-laranja"
            );
        };
    }, []);

    return (
        <section className="hero">
            <div className="caixa-imagem">
                <img
                    className="minha-imagem"
                    src={minhaImagem}
                    alt="minha imagem"
                />
            </div>
            <div className="apresentacao">
                <h1 className="titulo">Olá, eu sou Marcelo Guimarães</h1>
                <p className="apresentacao_p">
                    Desenvolvedor Front-end.
                </p>

                <div className="botoes">
                    <Botao className="botao-azul">Baixar CV</Botao>
                   
                </div>
            </div>
        </section>
    );
};

export default Hero;
