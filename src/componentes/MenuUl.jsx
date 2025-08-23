import { useState } from "react";
import "./MenuUl.css";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

import Botao from "./Botao";


const MenuUl = () => {
    const [ativo, setAtivo] = useState(false);

    const showMenu = () => {
        setAtivo(!ativo);
    };
    return (
        <div className="container-menu">
            <button className="btn-menu" onClick={showMenu}>
            {ativo ? <FaXmark /> : <IoMenu />}
            </button>
            <ul className={`menu ${ativo ? "menu-active" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a>
                </li>
                <li>
                    <a href="#tecnologias">Tecnologias</a>
                </li>
                
                 <li>
                     <Botao className="botao-laranja">Sobre mim</Botao>
                </li>
            </ul>
        </div>
    );
};

export default MenuUl;
