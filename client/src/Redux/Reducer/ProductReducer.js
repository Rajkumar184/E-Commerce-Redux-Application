import {
	FETCH_PRODUCTS,
	SET_PRODUCTS,
	SELECTED_PRODUCT,
	ADD_TO_CART,
	REMOVE_ITEM,
	CLEAR_CART,
} from "../Constants/action-types";
import { toast } from "react-toastify";

const intialState = {
	products: [],
};

export const productsReducer = (state = intialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return { ...state, products: action.payload };
		case FETCH_PRODUCTS:
			return { ...state, products: action.payload };

		default:
			return state;
	}
};

export const selectedProductsReducer = (
	state = {
		cart: [],
	},
	action
) => {
	switch (action.type) {
		case SELECTED_PRODUCT:
			return { ...state, ...action.payload };

		case ADD_TO_CART: {
			const checkProductExists = state.cart?.find(
				(e) => e.id === action.payload.id
			);

			if (checkProductExists) {
				toast.error("Product is already present in cart!", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});

				return {
					cart: [...state.cart],
				};
			}

			toast.success("Product added to cart!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});

			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		}

		case REMOVE_ITEM: {
			toast.success("Product removed from cart!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
			return {
				...state,
				cart: [...state.cart.filter((item) => item.id !== action.payload)],
			};
		}

		case CLEAR_CART: {
			toast.success("Your Cart is Empty Now!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
			return { cart: [] };
		}

		default:
			return state;
	}
};
