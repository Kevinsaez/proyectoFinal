import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Characters from '../pages/characters/Characters'
import Contact from '../pages/contact/Contact.js'
export default function Router() {

    return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
     </BrowserRouter>
    );
  }
  