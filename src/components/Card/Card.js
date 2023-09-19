import './Card.css';
import InfoCard from '../InfoCard/infoCard.js';

export default function Card({data}) {
console.log(data)
    return(
        <div className="card bg-success border mb-2 p-2 d-flex flex-row gap-5">
            <div>
                <img src={data.image} alt="imagen-personaje..."/>
                <h3>{data.name}</h3>
                <button>Know More..</button>
                <InfoCard status={data.status} especie={data.species} genero={data.gender} origen={data.origin.name}/>
            </div>
        </div>
    )
}
