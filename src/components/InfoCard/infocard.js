export default function infoCard({status,especie,genero,origen,setMostrar}) {
    return(
        <div className=''>
        <button onClick={()=>setMostrar(false)}><i  className="bi bi-x-circle-fill p-2"></i></button>
        <ul className="list-group">
            <li className="list-group-item">
                <p>Character Status {status} </p>
            </li>
            <li className="list-group-item">
                <p>Species</p>
                <p>{especie}</p>
            </li>
            <li className="list-group-item">
                <p>Gender</p>
                <p>{genero}</p>
            
            </li>
            <li className="list-group-item">
            <p>Origin</p>
            <p>{origen}</p>
            </li>
        </ul>
        </div>
    )
}