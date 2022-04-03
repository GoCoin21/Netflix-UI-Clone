import React, { useState,useContext,useEffect } from "react"
import { SelectProfileContainer } from "./profile"
import { FirebaseContext } from "../context/firebase"
import { getAuth } from "firebase/auth"
import Loading from "../components/loading"
export function BrowseContainer({slides}){
	const[profile,setProfile] = useState({})
	const [loading,setLoading] = useState(true)
	const {firebase} = useContext(FirebaseContext)
	const auth = getAuth()
	const user = auth.currentUser() || {}

	useEffect(() => {
		setTimeout(() => {
         setLoading(false)
		},3000)
	},[profile.displayName])


	return profile.displayName ?  (
		loading ? (<Loading src={user.photURL}/>
	) : (
		<Loading.ReleaseBody/>
	) 
	):(
		<SelectProfileContainer user={user} setProfile={setProfile}/>

	)
}