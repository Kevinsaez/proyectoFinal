import './Home.css';
import {Link, ink} from 'react-router-dom';
export default function Home(){
    return(
        <header className="principal-search container-fluid align-items-center d-flex flex-column justify-content-center m-2">
            <div className="container-header align-items-center justify-content-center flex-column">
                <h1 className="row justify-content-center mt-2">Proyect Rick & Morty</h1>
                <h2 className="text-center texto-h2">Helcome to Rick & Morty Proyect!</h2>
                <p className="text-center p-2">This proyect was made for practising React and to made Link to={} functional website
                </p>
                <p className='text-center'>In this website you can know information of the characters of this animated series.<br/> Also you can filter for diferent types of properties to find the characte that you are looking for or send us Link to={} massage for any concern o sugestion
                </p>
                <h2 className="text-center texto-h2 p-3">Lets go!</h2>
                <nav className='row navbar align-items-center'>
                    <ul className='nav nav-pills justify-content-center align-items-center'>
                        <li className='nav-item'>
                            <Link to='/Characters' className='nav-link active m-2 p-3 botones sizeBotones'>Characters</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Contact' className='nav-link active m-2 p-3 botones sizeBotones'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}