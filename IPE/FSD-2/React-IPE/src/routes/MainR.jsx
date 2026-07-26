import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Contact from './Contact'
import NotFound from './NotFound'

export default function MainR() {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='contact'>Contact</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}
