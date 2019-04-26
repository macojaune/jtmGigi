import storage from 'redux-persist/lib/storage'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import AppReducer from "./reducers/AppReducer";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import AuthReducer from "./reducers/AuthReducer";

export default () => {
	const persistApp = {
		key: 'app',
		storage,
		blacklist: []
	}
	const persistAuth = {
		key: "auth",
		storage
	}
	const rootReducer = combineReducers({
		app: persistReducer(persistApp, AppReducer),
		auth: persistReducer(persistAuth, AuthReducer)
	})

	const loggerMiddleware = createLogger()

	const store = createStore(
		rootReducer,
		applyMiddleware(thunk, loggerMiddleware)
	)

	const persistor = persistStore(store)

	return {store, persistor}
}