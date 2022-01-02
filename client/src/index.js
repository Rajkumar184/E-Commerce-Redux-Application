import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
		<ToastContainer className="foo" style={{ fontWeight: "bold" }} />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
