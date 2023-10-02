import './Card.css';
import InfoCard from '../InfoCard/infoCard.js';
import { useState } from 'react';

export default function Card({data}) {
    
    const [mostrar,setMostrar]=useState(false);

    return(
        <div className="d-flex flex-row card align-items-center justify-content-between m-2 p-2">
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <img src={data.image} alt={data.name}/>
                <h2 className='name'>{data.name}</h2>
                <button className= {mostrar?'d-none':'d-block btn btn-active align-self-end'} onClick={()=>setMostrar(true)}>Know More..</button>
            </div>
            <div className=''>
                {mostrar===true? <InfoCard status={data.status} especie={data.species} genero={data.gender} origen={data.origin.name} setMostrar={setMostrar}/>:''}
            </div>
        </div>
    )
}
