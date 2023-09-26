import Nav from '../../components/Navegacion/Navegacion'
import Card from '../../components/Card/Card'
import { useState,useEffect, Fragment } from 'react';
import Filter from '../../components/Filter/Filter';

export default function Characters() {

  // Filtros

  let [filtro]=useState([{nombre:'Alive',filtro:'Character Alive'},
                          {nombre:'Dead',filtro:'Character Dead'},
                          {nombre:'F',filtro:'Female'},
                          {nombre:'M',filtro:'Male'},
                          {nombre:'Unknown',filtro:'Origin Unknown'}
                        ]);


  
  // Personajes

  let [personaje,setPersonaje]=useState([]);
  let traerPersonajes=async()=>{
    let dato= await fetch('https://rickandmortyapi.com/api/character')
    .then(resp=>resp.json())
    .catch(err=>console.log("Hubo un Horror: "+ err));
    return dato;
  }

  let aplicarFiltros=(event)=>{
    let textoCheckbox=event.target.id;

    if(event.target.checked===true){
      if(textoCheckbox=== 'Alive'||textoCheckbox==='Dead'){
        let resultado=personaje.filter((personaje)=>personaje.status===textoCheckbox);
        setPersonaje(resultado);
      }
    }else{
      console.log('Sacar filtro');
    
  }
  //  console.log(event.target.id);
  //  console.log(event.target.checked);
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
    <Fragment>
      <header className=''>
        <Nav/>
      </header>
      <main className='container-fluid'>
      <section className='row seccion-filtro py-5'>
        <div>
          <h3>Filters</h3>
         <form className='d-flex m-5 flex-row align-items-center justify-content-center'>
            {filtro.map((item)=>{
            return <Filter key={item.nombre} textFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>
            })}
         </form>
        </div>
      </section>
   
      <section className='row justify-content-center'>
        {personaje.map((personaje)=>{
          return <Card key={personaje.id} data={personaje}/>
        })}
      </section>
    </main>
    </Fragment>
  );
}
