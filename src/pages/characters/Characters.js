import Nav from '../../components/Navegacion/Navegacion'
import Card from '../../components/Card/Card'
import { useState,useEffect, Fragment } from 'react';
import Filter from '../../components/Filter/Filter';

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
    // filtrosAplicados.forEach((filtro)=>{filtrar(filtro)});
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
      <section className='row seccion-filtro py-5'>
        <div>
          <h3>filtrosilters</h3>
         <form className='d-flex m-5 flex-row align-items-center justify-content-center'>
            {filtros.map((item)=>{
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
