export default function infoCard({status,especie,genero,origen,setMostrar}) {
    return(
        <div className='d-flex flex-column'>
        <button onClick={()=>setMostrar(false)}><i  className="bi bi-x-circle-fill"></i></button>
        <ul className="list-group">
            <li className="list-group-item">{status}</li>
            <li className="list-group-item">{especie}</li>
            <li className="list-group-item">{genero}</li>
            <li className="list-group-item">{origen}</li>
        </ul>
        </div>
    )
}