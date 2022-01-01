import {
	FETCH_PRODUCTS,
	SET_PRODUCTS,
	SELECTED_PRODUCT,
	ADD_TO_CART,
	REMOVE_ITEM,
	CLEAR_CART,
} from "../Constants/action-types";
import StoreApis from "../../apis/StoreApis";

export const setProducts = (products) => {
	return {
		type: SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (product) => {
	return {
		type: SELECTED_PRODUCT,
		payload: product,
	};
};

// to add the product into cart
export const addToCart = (product) => {
	return { type: ADD_TO_CART, payload: product };
};

// to delete the indv. elements from an Item Cart
export const removeItem = (id) => {
	return { type: REMOVE_ITEM, payload: id };
};

// clear the cart
export const clearCart = () => {
	return { type: CLEAR_CART };
};

export const fetchProducts = () => async (dispatch) => {
	const response = await StoreApis.get("/products");
	console.log(response);
	dispatch({
		type: FETCH_PRODUCTS,
		payload: response.data,
	});
};

export const fetchProduct = (id) => async (dispatch) => {
	const response = await StoreApis.get(`/products/${id}`);
	console.log(response);
	dispatch({
		type: SELECTED_PRODUCT,
		payload: response.data,
	});
};
