import React, {Component} from "react"
import {connect}          from "react-redux"
import Nav                from "./Containers/MainNavigation"
import {getUserSession}   from "./Redux/actions/auth"

class RootRouter extends Component {
	componentDidMount() {
		const {getSession} = this.props
		//vérifie que l'utilisateur est connecté
		getSession()
	}
	
	render() {
		return <Nav/>
	}
}

const mapStateToProps = ({app, auth}) => ({
	user: auth.user,
})
const mapDispatchToProps = dispatch => ({
	getSession: () => dispatch(getUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter)