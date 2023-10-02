
import '../../components/Filter/Filter.css'

export default function Filter({textFiltro, idFiltro, handlerChange}){
    
    return(
      
            <div className="form-check form-switch px-5 py-2">
                <input className="form-check-input" type="checkbox" role="switch" id={idFiltro} onChange={handlerChange}/>
                <label className="form-check-label" htmlFor={idFiltro}>{textFiltro}</label>
            </div>
       
    )
}
