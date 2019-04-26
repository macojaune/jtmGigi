import React, {Component}       from "react"
import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import {connect}                from "react-redux"
import {withNavigation}         from "react-navigation"
import ScanQR from '../Components/scanQR'

class HomeScreen extends Component {
	static navigationOptions = ({navigation})=> ({
		headerRight: <TouchableOpacity onPress={_=> navigation.navigate('scan')}><Text>Scan</Text></TouchableOpacity>
	})
		
		componentDidMount() {
		const {user, navigation} = this.props
		if (!user) {
			navigation.navigate("login")
		}
	}
	
	render() {
		return <View style={s.container}>
			<Text>Home</Text>
		</View>
	}
}

const s = StyleSheet.create({
	                            container: {
		                            flex: 1,
		                            backgroundColor: "#fff",
		                            alignItems: "center",
		                            justifyContent: "center",
	                            },
                            })

const mapStateToProps = ({auth}) => {
	return {
		user: auth.user,
	}
}

const mapDispatchToProps = dispatch => ({})

export default withNavigation(connect(mapStateToProps,mapDispatchToProps)(HomeScreen))