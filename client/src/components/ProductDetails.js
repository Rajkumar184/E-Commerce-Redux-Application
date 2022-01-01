import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, addToCart } from "../Redux/Actions/productsActions";
import { Link } from "react-router-dom";
// import Rating from "@mui/material/Rating";
import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const ProductDetails = () => {
	const [amount, setAmount] = useState(300);
	const { productId } = useParams();
	let product = useSelector((state) => state.product);
	const { image, title, price, category, description, rating } = product;
	const dispatch = useDispatch();
	const history = useHistory();

	const [user, setuser] = useState();
	const getData = async () => {
		const res = await axios.get("/auth/profile");
		setuser(res.data);
	};

	useEffect(() => {
		getData();
	}, []);

	// const fetchProductDetail = async (id) => {
	// 	const response = await axios
	// 		.get(`https://fakestoreapi.com/products/${id}`)
	// 		.catch((err) => {
	// 			console.log("Err: ", err);
	// 		});
	// 	dispatch(selectedProduct(response.data));
	// };

	useEffect(() => {
		if (productId && productId !== "") dispatch(fetchProduct(productId));
	}, [productId]);
	return (
		<div className=" container ">
			{Object.keys(product).length === 0 ? (
				<div>...Loading</div>
			) : (
				<div className="my-3 ">
					<div className="ui two column stackable center aligned grid">
						<div className="middle aligned row">
							<div className="column lp">
								<img className="detailimage" src={image} alt="images" />
							</div>
							<div className="cardContent ">
								<h3>{title}</h3>

								<h2>
									<p className="price text-primary">₹{price}</p>
									{/* <Rating
										name="half-rating-read"
										defaultValue={rating.rate}
										readOnly
									/> */}
								</h2>
								<h3 className="detailcategory">{category}</h3>
								<p className="descp">{description}</p>
								{user ? (
									<button className="btn btn-primary pl-3 pr-3">
										<StripeCheckout
											name="Ecommerce Store"
											currency="INR"
											image="/images/icons-shopify.png"
											amount={price * 100}
											stripeKey="pk_test_51KCQSRSJdBl3ShjMeSpPUFwu12wLIjHf4oSNef3Q3NvukYfpQYQe300s4dbbf2HR8b0pNundKAp4Fm0VLjFUKja900rTz7XYuv"
											token={async (token) => {
												try {
													await axios.post("/capture/payment", {
														amount: amount,
														token: token,
													});

													history.push("/");

													return toast.success("Payment Successful!", {
														position: toast.POSITION.TOP_CENTER,
														autoClose: 4000,
													});
												} catch (error) {
													return toast.error("server issues try later!!", {
														position: toast.POSITION.TOP_CENTER,
														autoClose: 3000,
													});
												}
											}}
										>
											Buy Now
										</StripeCheckout>
									</button>
								) : (
									<button
										className="btn btn-primary pl-3 pr-3"
										onClick={() =>
											toast.error("Login to make payment!", {
												position: toast.POSITION.TOP_CENTER,
												autoClose: 3000,
											})
										}
									>
										Buy Now
									</button>
								)}
								<button
									className="btn btn-danger"
									onClick={() => dispatch(addToCart(product))}
								>
									Add To Cart
								</button>
							</div>
						</div>
						<div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left mt-5">
							<Link to="/">
								<i className="fas fa-arrow-left mr-2"></i> Back to Home
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
