import './Card.css';
import InfoCard from '../InfoCard/infoCard.js';
import { useState } from 'react';

export default function Card({data}) {
    const [mostrar,setMostrar]=useState(false);
    return(
        <div className="d-flex flex-row card align-items-center justify-content-between m-2 p-2">
            <div className=''>
                <img src={data.image} alt="imagen-personaje..."/>
                <h2 className='w-300'>{data.name}</h2>
                <button className={mostrar?'d-none':'d-block'} onClick={()=>setMostrar(true)}>Know More..</button>
                {mostrar===true? <InfoCard status={data.status} especie={data.species} genero={data.gender} origen={data.origin.name} setMostrar={setMostrar}/>:''}
            </div>
        </div>
    )
}
