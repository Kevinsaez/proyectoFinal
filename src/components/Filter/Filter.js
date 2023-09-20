import { useState } from 'react';

export default function Filter({textFiltro}){
    
    return(
        <div className="form-check form-switch m-5">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{textFiltro}</label>
        </div>
    )
}
