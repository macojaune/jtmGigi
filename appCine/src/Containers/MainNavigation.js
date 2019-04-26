import React                                      from "react"
import {createAppContainer, createStackNavigator} from "react-navigation"
import HomeScreen                                 from "./HomeScreen"
import LoginScreen                                from "./LoginScreen"
import ScanScreen                                 from "./ScanScreen"

const navigator = createStackNavigator(
	{
		home: {screen: HomeScreen},
		login: {screen: LoginScreen},
		scan: {screen: ScanScreen},
	},
	{
		initialRouteName: "home",
	},
)

export default createAppContainer(navigator)
