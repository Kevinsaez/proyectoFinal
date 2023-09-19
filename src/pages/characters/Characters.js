import Nav from '../../components/Navegacion/Navegacion'
import Card from '../../components/Card/Card'
import { useState,useEffect } from 'react';

export default function Characters() {

  let [personaje,setPersonaje]=useState([]);

  let traerPersonajes=async()=>{
    let dato= await fetch('https://rickandmortyapi.com/api/character')
    .then(resp=>resp.json())
    .catch(err=>console.log("Hubo un Horror: "+ err));
    return dato;
  }

  
  
  useEffect(()=>{
    let guardarPersonaje=async()=>{

    let info= await traerPersonajes();
 
    let listaPersonajes=info.results;
    setPersonaje(listaPersonajes)
  }
    guardarPersonaje();
  },[])

  return (
    
    <div>
       <Nav/>
      <section>
       <h2>Filters</h2>
       <p>Aca iran los filtros</p>
      </section>
   
      <section className='container justify-content-center align-item-center d-flex flex-wrap gap-5'>
        {personaje.map((personaje)=>{
          return <Card key={personaje.id} data={personaje}/>
        })}
      </section>
    
    </div>
  );
}
