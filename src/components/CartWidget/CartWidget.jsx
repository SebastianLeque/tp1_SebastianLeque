import './CartWidget.css'
import cart from './Cart.png'

const CartWidget = () => {
  return (
    <div className='carsito'>
        <img className='carrito' src={cart} alt="Carrito" />
        <strong>7</strong>
    </div>
  )
}

export default CartWidget