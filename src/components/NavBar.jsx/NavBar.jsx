import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Online</h1>
        <nav className='items'>
          <ul>
              <li>celulares</li>
              <li>notebooks</li>
              <li>contacto</li>
          </ul>
          <CartWidget/>
        </nav>


    </header>
  )
}

export default NavBar