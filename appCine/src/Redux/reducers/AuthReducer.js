import t from "../types"

let initialState = {}
const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case t.sessionSuccess:
			return {...state, user: action.user, isLoggedIn: true}
		case t.logoutSuccess:
			return {...state, user: false, isLoggedIn: false}
		default:
			return state
	}
}

export default AuthReducer