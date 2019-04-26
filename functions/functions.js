//Function Firebase
//Je t'aime GIgi - Application Cinema

//cloud functions sdk
const functions = require("firebase-functions")
const express = require("express")
const app = express()

const admin = require("firebase-admin")

admin.initializeApp()
const db = admin.database()

//fonctiont flash client

app.post("/flash", async (req, res) => {
	const q = req.body
	const id = q["id"]
	
	//vérifie si id existe
	const userIdRef = db.ref(`/Clients/${id}`)
	let snap = await userIdRef.once("value")
	if (snap.exists()) {
		//user existe
		const user = snap.val()
		//vérifie si user est déjà flashé
		//todo limite de durée du flash OU // séances
		
	} else {
		//return error
		//Client n'existe pas
		return res.error(400)
	}
})

exports.api = functions.https.onRequest(app)