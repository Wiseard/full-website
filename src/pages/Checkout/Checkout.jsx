import { useCartContext } from '../../context/cart_context'
import { Orders } from '../../components/index'
import './checkout.css'

const Checkout = () => {
  return (
    <section className="checkout-container">
      <Orders />
    </section>
  )
}
export default Checkout
