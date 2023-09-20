import Nav from '../../components/Navegacion/Navegacion'
import Card from '../../components/Card/Card'
import { useState,useEffect } from 'react';
import Filter from '../../components/Filter/Filter';

export default function Characters() {

  // Filtros

  let [filter]=useState(['Character Alive','Character Dead','Female','Male','Origin Unknown']);
  
  // Personajes

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
      <section >
        <h2>Filters</h2>
        <form className='d-flex flex-row align-items-center justify-content-center'>
          {filter.map((item)=>{
          return <Filter key={item} textFiltro={item}/>
          })}
        </form>
      </section>
   
      <section className='row justify-content-center'>
        {personaje.map((personaje)=>{
          return <Card key={personaje.id} data={personaje}/>
        })}
      </section>

    </div>
  );
}
