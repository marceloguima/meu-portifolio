import "./CardTecs.css"

const CardTecs = ({ img, titulo }) => {
    return (
        <div className="circle">
         <img src={img} alt={`Imagem do projeto ${titulo}`} />
         <h3>{titulo}</h3>
        </div>
    );
};

export default CardTecs;

