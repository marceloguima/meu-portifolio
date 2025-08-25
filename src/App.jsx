import "./App.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";

import SliderProjetos from "./componentes/SliderProjetos";

import CardProjetos from "./componentes/CardProjetos";
import CardFigma from "./componentes/CardFigma";

import telaInicialAgrolink from "./assets/imagens-figma/inicial-agrolink.png";
import lojaModa from "./assets/imagens-figma/loja-moda.png";


import previsao from "./assets/img-projetos-web/previsao.png";
import finApp from "./assets/img-projetos-web/finapp.png";
import food from "./assets/img-projetos-web/food.png";
import listaCompras from "./assets/img-projetos-web/lista.png";
import meteora from "./assets/img-projetos-web/meteora.png";
import cadServico from "./assets/img-projetos-web/cad-servico.png";
import styloShic from "./assets/img-projetos-web/stylo-shic.png";
import teckpoint from "./assets/img-projetos-web/techpoint.png";

import CardTecs from "./componentes/CardTecs";

// imagens das tecnologias
import html from "./assets/img-projetos-web/html5.svg";
import css3 from "./assets/img-projetos-web/css3.svg";
import javaScript from "./assets/img-projetos-web/javaScript.svg";
import react from "./assets/img-projetos-web/react.svg";
import nodejs from "./assets/img-projetos-web/nodejs.svg";
import figma from "./assets/img-projetos-web/figma.svg";
import git from "./assets/img-projetos-web/git.svg";
import gitHub from "./assets/img-projetos-web/gitHub.svg";
import bootstrap from "./assets/img-projetos-web/bootstrap.svg";

function App() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <SliderProjetos titulo="Meus Projetos Web">
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
            </SliderProjetos>
{/* ****************************************************** */}
            <SliderProjetos titulo="meus protótipos">
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
            </SliderProjetos>

            <SliderProjetos titulo="Tecnologias">
                  <CardTecs img={html} titulo="HTML5" />
                <CardTecs img={css3} titulo="CSS3" />
                <CardTecs img={javaScript} titulo="JavaScript" />
                <CardTecs img={react} titulo="React" />
                <CardTecs img={nodejs} titulo="Nodejs" />
                <CardTecs img={figma} titulo="Figma" />
                <CardTecs img={git} titulo="Git" />
                <CardTecs img={gitHub} titulo="GitHub" />
                <CardTecs img={bootstrap} titulo="Bootstrap5" />
            </SliderProjetos>
           
        </div>
    );
}

export default App;
