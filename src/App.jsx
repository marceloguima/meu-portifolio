import "./App.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Subtitulo from "./componentes/Subtitulo"

import MeusProjetos from "./componentes/MeusProjetos";
import MinhasTec  from "./componentes/MinhasTec";

function App() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Subtitulo nome=" Meus projetos" />
            <MeusProjetos />
            <Subtitulo nome="Tecnologias" />
            <MinhasTec/>
        </div>
    );
}

export default App;
