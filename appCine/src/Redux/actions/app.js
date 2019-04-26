import t from '../types'
import axios from 'axios'

export const flashClient = id => (
	dispatch => {
		dispatch(flashClientRequested())
		//send id
		axios.post(apiURL + 'flashClient', {}).then(res => {
			//if ok return success
			console.log(res)
		}).catch(err => {
			//else return error
			console.log(err)
			dispatch(flashClientFailure(err))
		})
	}
)


const flashClientRequested = () => ({
	type: t.flashClientRequested
})

const flashClientSuccess = client => ({
	type: t.flashClientSuccess,
	client
})

const flashClientFailure = error => ({
	type: t.flashClientFailure,
	error
})