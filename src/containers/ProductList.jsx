import React, { useEffect, useState } from 'react';
//es mejor usar useLayoutEffect ya que ejecuta el código una vez está renderizado, en vambio useEffect ejecuta justo antes del render
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from 'axios';

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	const [Products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data)
	}, []);

	return (
		<section className="main-container">
			<div className="ProductList">
				{Products.map(product => (
				<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;