import React, {Component}                                                     from "react"
import {Dimensions, LayoutAnimation, StatusBar, Text, TouchableOpacity, View} from "react-native"
import {BarCodeScanner, Permissions}                                          from "expo"
import s                                                                      from "../Common/styles"

export default class scanQR extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			hasCameraPermission: null,
			lastScannedUrl: null,
		}
	}
	
	componentDidMount() {
		this._requestCameraPermission()
	}
	
	_requestCameraPermission = async () => {
		const {status} = await Permissions.askAsync(Permissions.CAMERA)
		this.setState({
			              hasCameraPermission: status === "granted",
		              })
	}
	
	_handleBarCodeRead = result => {
		if (result.data !== this.state.lastScannedUrl) {
			LayoutAnimation.spring()
			this.setState({lastScannedUrl: result.data})
		}
	}
	_maybeRenderUrl = () => {
		if (!this.state.lastScannedUrl) {
			return
		}
		
		return (
			<View style={{height: 10}}>
				<TouchableOpacity style={s.url} onPress={this._handlePressUrl}>
					<Text numberOfLines={1} style={{color:'red'}}>
						{this.state.lastScannedUrl}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={s.cancelButton}
					onPress={this._handlePressCancel}>
					<Text style={s.cancelButtonText}>
						Cancel
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
	_handlePressCancel = () => {
		this.setState({lastScannedUrl: null})
	}
	
	render() {
		return (
			<View style={s.container}>
				<View>{this.state.hasCameraPermission === null ? <Text>Requesting for camera permission</Text>
				 : this.state.hasCameraPermission === false
				   ? <Text style={{color: "red"}}>
					   Camera permission is not granted
				   </Text>
				   : <BarCodeScanner
					   onBarCodeRead={this._handleBarCodeRead}
					   style={{
						   height: 50,
						   width: Dimensions.get("window").width,
					   }}
				   />}
				</View>
				<View style={[s.container]}>{this._maybeRenderUrl()}</View>
			</View>
		)
	}
}