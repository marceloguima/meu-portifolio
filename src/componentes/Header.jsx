import "./Header.css";
import MenuUl from "./MenuUl";


function Header() {
    return (
        <header>
            <a className="logo" href="/">Marcelo G.</a>
            <nav>
               <MenuUl/>
            </nav>
        </header>
    );
}

export default Header;
