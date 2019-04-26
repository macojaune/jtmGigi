import t      from "../types"
import {auth} from "../../Common/firebaseConfig"

export const getUserSession = () => (
	dispatch => {
		dispatch(sessionRequested())
		
		auth.onAuthStateChanged(user => {
			if (user) {
				//user est connecté
				dispatch(sessionSuccess(user))
			} else {
				//user n'est pas connecté
				dispatch(sessionLogout())
			}
		})
	}
)

export const login = (user, pass) => (
	dispatch => {
		dispatch(loginRequested())
	}
)

export const logout = () => (
	dispatch => {
		dispatch(logoutRequested())
		auth.signOut().then(() => {
			dispatch(logoutSuccess())
		}, err => {
			dispatch(logoutFailure(err))
		})
	}
)


const sessionRequested = () => ({
	type: t.getSessionRequested,
})

//user est connecté
const sessionSuccess = user => ({
	type: t.sessionSuccess,
	user,
})

//user n'est pas connecté
const sessionLogout = () => ({
	type: t.sessionLogout,
})

const loginSuccess = () => ({
	type: t.loginSuccess,
})


const loginRequested = () => ({
	type: t.loginRequest,
})

const loginFailure = error => ({
	type: t.loginFailure,
	error,
})

const logoutSuccess = () => ({
	type: t.logoutSuccess,
})


const logoutRequested = () => ({
	type: t.logoutRequest,
})

const logoutFailure = error => ({
	type: t.logoutFailure,
	error,
})