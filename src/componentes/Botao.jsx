import "./Botao.css"

const Botao = (props) => {
  return (
    <div className="caixa-botao">
      <button className={props.className}>{props.children}</button>
    </div>
  )
}

export default Botao
