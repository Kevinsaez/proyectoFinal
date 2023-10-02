import './Contact.css'
import Nav from "../../components/Navegacion/Navegacion"
import {Fragment} from 'react';


export default function contact(){

return(
    <Fragment>
        <Nav itemMenu={'Characters'}/>
        <main className='container-fluid'>
            <section className="d-flex flex-column seccion-contacto justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                <h2 className='py-5 fuente-color'>Contact</h2>
                <p className='fuente-color fs-3'>Leave us your information so we can contact you</p>
                <form className="row g-3 p-4 fuente-color" action="" method="post">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control p-2" id="name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control p-2" id="email"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" name="message" className="w-100 p-4"/>
                    </div>
                    <div className="col-12">
                        <input type="submit" className="btn btn-primary" value='Send'/>
                    </div>
                </form>
        </section>
        </main>
    </Fragment>
)
}
