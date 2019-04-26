import React, {Component}                        from "react"
import {Text, TextInput, TouchableOpacity, View} from "react-native"
import {connect}                                 from "react-redux"
import s                                         from "../Common/styles"
import {login}                                   from "../Redux/actions/auth"

class LoginScreen extends Component {
	render() {
		// const {isLoading}=this.props
		// if (isLoading) {
		// 	return <Spinkit size={30} type="FadingCircle" color="#FFFFFF"/>;
		// }
		return <View style={s.wrap}>
			<View style={s.body}>
				<View style={s.wrapForm}>
					<View style={s.textInputWrap}>
						<Text style={s.textLabel}>Identifiant</Text>
						<TextInput
							placeholder='Votre identifiant'
							underlineColorAndroid="transparent"
							style={s.textInput}
							onChangeText={(text) => this.setState({email: text})}
						/>
					</View>
					<View style={s.textInputWrap}>
						<Text style={s.textLabel}>Mot de passe</Text>
						<TextInput
							placeholder="Entrez votre mot de passe"
							underlineColorAndroid="transparent"
							style={s.textInput}
							secureTextEntry
							onChangeText={(text) => this.setState({password: text})}
						/>
					</View>
				</View>
				<View style={s.wrapButton}>
					{this.props.isLoading ? (
						<TouchableOpacity style={s.btnLogIn}>
							<Text>Chargement…</Text>
						</TouchableOpacity>
					) : (
						 <TouchableOpacity style={s.btnLogIn} onPress={this.btnLogIn}>
							 <Text style={s.btnLogInText}> Connexion </Text>
						 </TouchableOpacity>
					 )}
				</View>
			</View>
		</View>
	}
}

const mapStateToProps = ({app, auth}) => ({
	isLoading: auth.isLoading,
})
const mapDispatchToProps = dispatch => ({
	login: (user, pass) => dispatch(login(user, pass)),
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)