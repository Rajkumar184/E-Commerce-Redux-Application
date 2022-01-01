import React, { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
	const products = useSelector((state) => state.allProducts.products);
	const dispatch = useDispatch();

	// const fetchProducts = async () => {
	// 	const response = await axios
	// 		.get("https://fakestoreapi.com/products")
	// 		.catch((err) => {
	// 			console.log("Err: ", err);
	// 		});
	// 	dispatch(setProducts(response.data));
	// };

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	console.log("Products :", products);
	return (
		<div>
			<ProductComponent />
		</div>
	);
};

export default ProductPage;
