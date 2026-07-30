import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import NoContact from './NoContact'
import Contact from './Contact'

export default function MainR() {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='*' element={<NoContact />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
