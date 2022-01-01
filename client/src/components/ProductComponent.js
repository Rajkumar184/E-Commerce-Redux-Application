import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";

const ProductComponent = () => {
	const [search, setSearch] = useState("");
	const products = useSelector((state) => state.allProducts.products);
	return (
		<>
			{/* my main items section  */}
			<div className="menu-items container-fluid mt-5">
				<div className="container input_type justify-content-center">
					<div className="row">
						<div className="col-lg-10 col-md-9 col-sm-8 pl-4 ml-4">
							<div className="input-group mb-4">
								<input
									type="text"
									className="form-control input_form-control input-text"
									placeholder="Search products...."
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
									onChange={(e) => setSearch(e.target.value)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-11 mx-auto">
						<div className="row my-5">
							{products
								.filter((val) => {
									if (search === "") {
										return val;
									} else if (
										val.title.toLowerCase().includes(search.toLowerCase())
									) {
										return val;
									}
								})
								.map((elem) => {
									const { id, title, image, category, price, rating } = elem;

									return (
										<div
											className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
											key={id}
										>
											<Link
												to={`/product/${id}`}
												style={{ textDecoration: "none" }}
											>
												<div className="row Item-inside">
													{/* for images */}
													<div className="col-12 col-md-12 col-lg-4 img-div">
														<img
															src={image}
															alt={title}
															className="img-fluid"
														/>
													</div>

													{/* menu items description */}
													<div className="col-12 col-md-12 col-lg-8">
														<div className="main-title pt-4 pb-3">
															<h1>{title}</h1>
															<p>{category}</p>
															<Rating
																name="half-rating-read"
																defaultValue={rating.rate}
																readOnly
															/>
														</div>
														<div className="menu-price-book">
															<div className="price-book-divide d-flex justify-content-between ">
																<h2>Price : {price}₹</h2>
															</div>
														</div>
													</div>
												</div>
											</Link>
										</div>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductComponent;
