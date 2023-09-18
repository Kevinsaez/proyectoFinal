import './Card.css';
import Infocard from '../InfoCard/infoCard';

export default function Card({nombre,imagen}) {

    return(
        <div className="card bg-success border mb-2 p-2 d-flex flex-row gap-5">
            <div>
                <img src={imagen} alt="imagen-personaje..."/>
                <h3>{nombre}</h3>
                <button>Know More..</button>
                <Infocard/>
            </div>
            
        </div>
    )
}
