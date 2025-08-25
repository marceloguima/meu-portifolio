import "./CardProjetos.css"

const CardProjetos = ({img, titulo, descricao, linkCodigo, linkProjeto}) => {
    const urlProjeto = linkProjeto ? `https://${linkProjeto}` : null;
        const urlCodigo = linkProjeto ? `https://${linkCodigo}` : null;



    return (
        <div className="card">
            
            <img src={img} alt={`Imagem do projeto ${titulo}`} className="img-projeto" />
            <div className="infos">
                <h2>{titulo}</h2>
                <p>{descricao}
                    
                </p>
                <div className="links-card">
                    <a href={urlProjeto} target="_blank" className="projeto">Ver projeto</a>
                    <a href={urlCodigo} target="_blank" className="codigo">Ver no GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default CardProjetos;
