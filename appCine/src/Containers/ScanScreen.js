import React, {Component} from "react"
import {View} from 'react-native'
import ScanQR from '../Components/scanQR'

class ScanScreen extends Component {
	render(){
		return <View>
			<ScanQR/>
		</View>
	}
}

export default ScanScreen