import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

function App() {
	return (
		<>
			<Router>
				<Header />

				<Switch>
					<Route path="/" exact component={ProductListing} />
					<Route path="/product/:productId" exact component={ProductDetails} />
					<Route path="/cart" exact component={Cart} />
					<Route path="/signup" exact component={SignUp} />
					<Route path="/login" exact component={Login} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/aboutus" exact component={AboutPage} />
					<Route>
						<ErrorPage />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
