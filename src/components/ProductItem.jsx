import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import AddToCartImage from "../../frontend/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
	const {AddToCart} = useContext(AppContext);

	const handleClick = item => { //item es lo mismo que product, es para no confundirme
		AddToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={AddToCartImage} alt="add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;