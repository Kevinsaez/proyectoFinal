import './Card.css';
import InfoCard from '../InfoCard/infoCard.js';
import { useState } from 'react';

export default function Card({data}) {
    const [mostrar,setMostrar]=useState(false);
    return(
        <div className="card bg-success border mb-2 p-2 d-flex flex-row gap-5">
            <div>
                <img src={data.image} alt="imagen-personaje..."/>
                <h3>{data.name}</h3>
                <button className={mostrar?'d-none':'d-block'} onClick={()=>setMostrar(true)}>Know More..</button>
                {mostrar===true? <InfoCard status={data.status} especie={data.species} genero={data.gender} origen={data.origin.name} setMostrar={setMostrar}/>:''}
            </div>
        </div>
    )
}
