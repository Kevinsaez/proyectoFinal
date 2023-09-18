
import '../Navegacion.css';

export default function Nav(){
    return(
        <header className="bg-blue">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
                <div className="container-fluid justify-content-between align-items-center">
                    <a className="text-decoration-none " href="/">
                        <h1 className=" navbar-brand cursor-p">Rick & Morty</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon btn-burger"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className=" navbar-nav nav-pills p-4">
                            <li className="nav-item m-2">
                                <a className="nav-link btn-active p-2" href="/characters">Characters</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link boton p-2" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
       
    )
}