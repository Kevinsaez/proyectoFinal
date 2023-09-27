import Nav from "../../components/Navegacion/Navegacion"
import {Fragment} from 'react';


export default function contact(){

return(
    <Fragment>
        <Nav/>
        <main className='w-100 vh-100 d-flex align-items-center justify-content-center'>
            <section className="bg-warning w-75 p-5 m-5">
                <h2>Contact</h2>
                <p>Leave us your information so we can contact you</p>
                <form className="row g-3" action="" method="post">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" name="message" className="w-100"/>
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
