import React, { useContext } from 'react';
// Contexts
import { CartContext } from '../contexts/CartContext.js';

const Item = props => {

	const { cart, setCart } = useContext(CartContext)
	console.log("This is the (state) cart:", cart)


	const removeItem = (title) => {
		console.log(title)
		let newCart = cart.filter(item =>
		item.title	 !== title
			
		)
		setCart(newCart)

			
		console.log("This is the new cart after click:", newCart)
	}


	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem(`${props.title}`)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
