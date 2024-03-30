// eslint-disable-next-line import/no-extraneous-dependencies
import Popup from 'reactjs-popup'

import Payment from '../Payment'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="app-cart-summary">
          <div className="cart-summary-container">
            <h1 className="total-price-value">
              <span className="total-label">Order Total: </span> Rs {total}/-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
          </div>
          <Popup
            modal
            trigger={
              <button type="button" className="checkout-btn-large">
                Checkout
              </button>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
