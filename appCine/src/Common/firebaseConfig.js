import * as firebase from 'firebase'

const config = {
	apiKey: "AIzaSyChitQX5gW9Ii8znFouPZyz4_aXDEOf_1U",
	authDomain: "yujin-tla.firebaseapp.com",
	databaseURL: "https://yujin-tla.firebaseio.com",
	projectId: "yujin-tla",
	storageBucket: "yujin-tla.appspot.com",
	messagingSenderId: "884960468588"
}

firebase.initializeApp(config)

export const db = firebase.database()
export const auth = firebase.auth()