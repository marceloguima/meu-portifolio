import "./App.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";

import MeusProjetos from "./componentes/MeusProjetos";
import MinhasTec  from "./componentes/MinhasTec";

function App() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <MeusProjetos />
            <MinhasTec/>
        </div>
    );
}

export default App;
