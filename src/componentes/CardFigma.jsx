import "./CardFigma.css";

const CardFigma = ({ imagem, titulo, descricao }) => {
    return (
        <div className="card-figma">
            <img src={imagem} alt={titulo} />

            <div className="content">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default CardFigma;
