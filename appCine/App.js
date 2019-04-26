import React, {Component} from "react"
import {Provider}         from "react-redux"
import RootRouter         from "./src/RootRouter"
import storeConfig        from "./src/Redux/storeConfig"
import {PersistGate}      from "redux-persist/integration/react"

export default class App extends Component {
	render() {
		const {store, persistor} = storeConfig()
		return <Provider store={store}>
			<PersistGate persistor={persistor}>
				<RootRouter/>
			</PersistGate>
		</Provider>
	}
}