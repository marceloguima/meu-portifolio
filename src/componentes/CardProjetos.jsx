import "./CardProjetos.css"

const CardProjetos = ({img, titulo, descricao, linkCodigo, linkProjeto}) => {
    return (
        <div className="card">
            {/* <video src=""></video> */}
            <img src={img} alt={`Imagem do projeto ${titulo}`} />
            <div className="infos">
                <h2>{titulo}</h2>
                <p>{descricao}
                    
                </p>
                <div className="botoes-card">
                    <a href={linkCodigo} target="_blank" className="codigo">Ver código</a>
                    <a href={linkProjeto} target="_blank" className="ver-projetos">Ver Projeto</a>
                </div>
            </div>
        </div>
    );
};

export default CardProjetos;
