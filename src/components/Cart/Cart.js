import React from 'react'

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
		<div>
		 <h2>Movie Summary</h2>
             <h5>Movie selected:{props.cart.length}</h5>
		 <p>Total: {total.toFixed(2)}</p>
		 <h2>Name:{name} </h2>
		</div>
		)
}

export default Cart;