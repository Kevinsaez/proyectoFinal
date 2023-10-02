import Nav from '../../components/Navegacion/Navegacion'
import Card from '../../components/Card/Card'
import { useState,useEffect, Fragment } from 'react';
import Filter from '../../components/Filter/Filter';
import '../characters/Characters.css'

export default function Characters() {
  
  let [itemMenu]=useState("Characters");  
  let [listaCompleta,setListaCompleta]=useState([]);
  let [personaje,setPersonaje]=useState([]);
  
  // Filtros

  let [filtros]=useState([{nombre:'Alive',filtro:'Character Alive'},
                          {nombre:'Dead',filtro:'Character Dead'},
                          {nombre:'Female',filtro:'Female'},
                          {nombre:'Male',filtro:'Male'},
                          {nombre:'unknown',filtro:'Origin Unknown'}
                        ]);

 let [filtrosAplicados,setFiltrosAplicados]=useState([]);

  // Personajes

  let traerPersonajes=async()=>{
    let dato= await fetch('https://rickandmortyapi.com/api/character')
    .then(resp=>resp.json())
    .catch(err=>console.log("Hubo un Horror: "+ err));
    return dato;
  }

 let aplicarFiltros=(event)=>{
    let textoCheckbox=event.target.id;

    if(event.target.checked===true){
      setFiltrosAplicados([...filtrosAplicados,textoCheckbox]);
    }else{
      let filtrosRestantes=filtrosAplicados.filter((el)=>el !==textoCheckbox);
      setPersonaje(listaCompleta);
      setFiltrosAplicados(filtrosRestantes);
    }
  }

useEffect(()=>{
    let guardarPersonaje=async()=>{

    let info= await traerPersonajes();
 
    let listaPersonajes=info.results;
    setPersonaje(listaPersonajes)
    setListaCompleta(listaPersonajes);
  }
    guardarPersonaje();
  },[])

useEffect(()=>{
filtrosAplicados.forEach((textoCheckbox)=>{
  let resultado;
  if(textoCheckbox=== 'Alive'||textoCheckbox==='Dead'){
    resultado=personaje.filter((personaje)=>personaje.status===textoCheckbox);
  }

  if(textoCheckbox=== 'Female'||textoCheckbox==='Male'){
    resultado=personaje.filter((personaje)=>personaje.gender===textoCheckbox);
  }

  if(textoCheckbox=== 'unknown'){
    resultado=personaje.filter((personaje)=>personaje.origin.name===textoCheckbox);
  }
  setPersonaje(resultado);
})
},[filtrosAplicados])
  
  
  return (
    <Fragment>
      <header className=''>
        <Nav itemMenu={itemMenu}/>
      </header>
      <main className='container-fluid'>
      <section className='row seccion-filtros py-5'>
        <div className='filtros-area d-flex m-2 align-items-center'>
          <h3>Filters</h3>
            <a className="btn btn-filtro" data-bs-toggle="collapse" href="#collapseFiltros" role="button" aria-expanded="false" aria-controls="collapseExample">
              <img src='filter-icon.svg' alt="icono de filtro"/>
            </a>
        <div/>

          <div className="filtros justify-content-between flex-wrap collapse " id="collapseFiltros">
                  <form className='d-flex m-5 flex-row align-items-center justify-content-between w-100'>
                {filtros.map((item)=>{
                return <Filter key={item.nombre} textFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>
                })}
            </form>
            
          </div>

        
        </div>
      </section>
   
      <section className='row justify-content-center'>
      {personaje.length>0?
        personaje.map((personaje)=>{
          return <Card key={personaje.id} data={personaje}/>
        }):
        <div className="alert container fondo-alerta align-items-center justify-content-center w-100 d-flex gap-2" role="alert">
          <i className="bi bi-exclamation-triangle-fill fs-5"></i>{/* icono de alerta */}
          <p className='m-0'>Sorry! There are no characters width all those properties</p>
        </div>
        }
      </section>
    </main>
    </Fragment>
  );
}
