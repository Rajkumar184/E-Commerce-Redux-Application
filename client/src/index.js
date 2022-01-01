import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		<ToastContainer className="foo" style={{ fontWeight: "bold" }} />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
