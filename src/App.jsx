import "./App.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Subtitulo from "./componentes/Subtitulo";

import MeusProjetos from "./componentes/MeusProjetos";

function App() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <Subtitulo>Meus projetos</Subtitulo>
            <MeusProjetos />
            <Subtitulo>Tecnologias</Subtitulo>
        </div>
    );
}

export default App;
