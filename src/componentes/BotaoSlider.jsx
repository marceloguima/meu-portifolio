import "./BotaoSlider.css"

const BotaoSlider = ({className, icone, onClick}) => {
    return (
        <button onClick={onClick} className={className} >
          {icone}
        </button>
        
    );
};

export default BotaoSlider;
