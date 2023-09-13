import './Home.css';

export default function Home(){
    return(
        <header className="principal-search container-fluid align-items-center d-flex flex-column justify-content-center">
            <div className="container-header d-flex align-items-center justify-content-center flex-column">
                <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
                <h2 className="text-center p-3">Helcome to Rick & Morty Proyect!</h2>
                <p className="text-center p-2">This proyect was made for practising React and to made a functional website
                </p>
                <p className='text-center'>In this website you can know information of the characters of this animated series.<br/> Also you can filter for diferent types of properties to find the characte that you are looking for or send us a massage for any concern o sugestion
                </p>
                <h2 className="text-center p-3">Lets go!</h2>
                <nav className='row navbar align-items-center'>
                    <ul className='nav nav-pills justify-content-center'>
                        <li className='nav-item'>
                            <a className='nav-link active m-2 p-3 botones sizeBotones' href='./characters'>Characters</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active m-2 p-3 botones sizeBotones' href='./contact'>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}