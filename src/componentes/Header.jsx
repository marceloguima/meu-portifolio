import "./Header.css";

function Header() {
    return (
        <header>
            <a href="/">Marcelo Guimarães</a>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#tecnologias">Tecnologias</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
