import './Card.css';
import InfoCard from '../InfoCard/infoCard.js';
import { useState } from 'react';

export default function Card({data}) {
    const [mostrar,setMostrar]=useState(false);
    return(
        <div className="card m-2 p-1 justify-content-center">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img src={data.image} alt="imagen-personaje..."/>
                <h3>{data.name}</h3>
                <button className={mostrar?'d-none':'d-block'} onClick={()=>setMostrar(true)}>Know More..</button>
                {mostrar===true? <InfoCard status={data.status} especie={data.species} genero={data.gender} origen={data.origin.name} setMostrar={setMostrar}/>:''}
            </div>
        </div>
    )
}
