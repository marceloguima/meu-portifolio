import "./App.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";

import SliderProjetos from "./componentes/SliderProjetos";

import CardProjetos from "./componentes/CardProjetos";

import previsao from "./assets/img-projetos-web/previsao.png";
import finApp from "./assets/img-projetos-web/finapp.png";
import food from "./assets/img-projetos-web/food.png";
import listaCompras from "./assets/img-projetos-web/lista.png";
import meteora from "./assets/img-projetos-web/meteora.png";
import cadServico from "./assets/img-projetos-web/cad-servico.png";
import styloShic from "./assets/img-projetos-web/stylo-shic.png";
import teckpoint from "./assets/img-projetos-web/techpoint.png";

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
           
        </div>
    );
}

export default App;
