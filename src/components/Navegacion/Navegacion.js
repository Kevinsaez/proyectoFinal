
import { Link } from 'react-router-dom';
import '../Navegacion.css';

export default function Nav({itemMenu}){
    return(
        <nav className="navbar color-fondo navbar-expand-lg w-100">
            <div className="container-fluid justify-content-between align-items-center">
                <Link to='/' className="text-decoration-none ">                        
                    <h1 className=" navbar-brand cursor-p">Rick & Morty</h1>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon btn-burger"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className=" navbar-nav nav-pills p-4">
                        <li className="nav-item m-2">
                            <Link to='/Characters' className="nav-link btn-active p-2">{itemMenu}</Link>      
                        </li>
                        <li className="nav-item m-2">
                            <Link to='/Contact' className="nav-link boton p-2">Contact</Link>
                        </li>
                   </ul>
              </div>
          </div>
        </nav>

    )
}