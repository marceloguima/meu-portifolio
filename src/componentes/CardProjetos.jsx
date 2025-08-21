import previsao from "../assets/previsao.png";
import "./CardProjetos.css"

const CardProjetos = () => {
    return (
        <div className="card">
            {/* <video src=""></video> */}
            <img src={previsao} alt="" />
            <div className="infos">
                <h2>Previsão do Tempo</h2>
                <p>
                    Um aplicativo simples e intuitivo para consulta de previsão
                    do tempo. Utiliza uma API pública para fornecer dados
                    atualizados de temperatura, umidade e vento para qualquer
                    cidade do mundo.
                </p>
                <div className="botoes-card">
                    <button className="codigo">Ver código</button>
                    <button className="projeto">Ver Projeto</button>
                </div>
            </div>
        </div>
    );
};

export default CardProjetos;
