import '../InfoCard/infoCard.css'
export default function infoCard({status,especie,genero,origen,setMostrar}) {
    return(
        <div className='d-flex flex-column p-5 align-items-center more-information'>
        <button className='btn btn-active d-flex align-self-end m-2 btn-x-md'onClick={()=>setMostrar(false)}><i  className="bi bi-x-circle-fill p-2"></i></button>
        <ul className="list-group">
            <li className="list-group-item p-3 d-flex flex-column">
                <span className='fw-bold' >Character Status {status} </span>
            </li>
            <li className="list-group-item p-3 d-flex flex-column">
                <span>Species</span>
                <span className='fw-bold'>{especie}</span>
            </li>
            <li className="list-group-item p-3 d-flex flex-column">
                <span>Gender</span>
                <span className='fw-bold'>{genero}</span>
            
            </li>
            <li className="list-group-item p-3 d-flex flex-column">
            <span>Origin</span>
            <span className='fw-bold'>{origen}</span>
            </li>
        </ul>
        </div>
    )
}