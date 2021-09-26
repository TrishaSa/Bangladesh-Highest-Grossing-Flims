import React from 'react'
import './Cart.css'

const Cart = (props) => {
      const {cart} = props;

      let name = "";
      let total = 0;
        for(const movie of cart)
          {
       	total = total + movie.Profit;
       	name =(' ' + name + movie.Title +', ')
        }

	return (
		<div className="cart-list">
		 <h2>Movie Summary</h2>
             <h3>Movie selected:{props.cart.length}</h3>
		 <p>Total: {total.toFixed(2)}</p>
		 <h4>Movie Name:{name} </h4>
		</div>
		)
}

export default Cart;