import "./App.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import MeusProjetos from "./componentes/MeusProjetos";

function App() {
    return (
        <div className="container">
            <Header />
            <Hero />
            <MeusProjetos />
        </div>
    );
}

export default App;
