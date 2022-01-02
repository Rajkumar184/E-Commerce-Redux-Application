import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducer/index";
import thunk from "redux-thunk";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

// import { createStore, applyMiddleware, compose } from "redux";
// import reducers from "./Reducer/index";
// import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// export default store;
