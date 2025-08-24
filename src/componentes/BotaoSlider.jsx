import "./BotaoSlider.css"

const BotaoSlider = ({className, children, onClick}) => {
    return (
        <button onClick={onClick} className={`botao-slider ${className}`} >
          {children}
        </button>
        
    );
};

export default BotaoSlider;
