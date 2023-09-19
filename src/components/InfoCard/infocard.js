export default function infoCard({status,especie,genero,origen}) {
    return(
        <div>
        <ul className="list-group">
            <li className="list-group-item">{status}</li>
            <li className="list-group-item">{especie}</li>
            <li className="list-group-item">{genero}</li>
            <li className="list-group-item">{origen}</li>
        </ul>
        </div>
    )
}