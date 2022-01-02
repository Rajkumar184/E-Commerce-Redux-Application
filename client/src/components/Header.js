import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import axios from "axios";

const Header = () => {
	const cartArr = useSelector((state) => state.product?.cart);

	const [user, setuser] = useState();
	const getData = async () => {
		const res = await axios.get("/auth/profile");
		setuser(res.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<nav
				className="navbar navbar-expand-md  navbar-dark sticky-top"
				style={{ backgroundColor: " #e3f2fd " }}
			>
				<Link className="navbar-brand text-dark" to="/">
					<img
						src="/images/icons-shopify.png"
						alt=""
						height="50px"
						style={{ borderRadius: "60%" }}
					/>
					Shopify
				</Link>
				<button
					className="navbar-toggler navbar-toggler-right "
					type="button"
					data-toggle="collapse"
					data-target="#navb"
					aria-expanded="true"
					style={{ backgroundColor: "grey" }}
				>
					<span className="navbar-toggler-icon text-dark"></span>
				</button>

				<div id="navb" className="navbar-collapse collapse hide">
					<ul className="navbar-nav ml-auto ">
						{/* <li className="nav-item active">
							<Link className="nav-link text-dark" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark" to="/aboutus">
								AboutUs
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-dark" to="/contact">
								Contact
							</Link>
						</li> */}
						<li className="nav-item">
							<h4 className="nav-link text-dark">Welcome</h4>
						</li>
						<li className="nav-item">
							{/* <img src={user?.photo} alt="" style={{ borderRadius: "60%" }} /> */}
							{/* <p>{user?.name}</p> */}
							<h4 className="nav-link text-danger"> {user?.name}</h4>
						</li>
					</ul>

					<ul className="nav navbar-nav ml-auto">
						<li className="nav-item active">
							<IconButton
								component={Link}
								to="/cart"
								style={{ color: "black", textDecoration: "none" }}
								aria-label="Show cart items"
								color="default"
							>
								<Badge badgeContent={cartArr?.length} color="secondary">
									<ShoppingCartIcon />
								</Badge>
							</IconButton>
						</li>
						{/* login logout toggle */}

						{user ? (
							<li className="nav-item ">
								<a
									className="nav-link text-danger"
									href="http://localhost:5000/auth/logout"
								>
									<span className="fas fa-sign-in-alt "></span> Logout
								</a>
							</li>
						) : (
							<li className="nav-item">
								<a
									className="nav-link text-dark"
									href="http://localhost:5000/auth/google"
								>
									<span className="fas fa-sign-in-alt "></span> Login
								</a>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
