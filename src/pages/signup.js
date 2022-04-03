import React, {useState,useContext} from "react";
import {useNavigate} from "react-router-dom";
import {getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";

import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import {HeaderContainer} from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";


export default function Signup(){
	const history = useNavigate()
	const {firebase} = useContext(FirebaseContext)

	const [firstName,setFirstName] = useState('')
	const [emailAddress,setEmailAddress] = useState('')
	const [password,setPassword] = useState('')
	const [error,setError] = useState('')

	 const isInValid = firstName === '' || password === '' || emailAddress ===''
	 const auth = getAuth()
	 const handleSignUp = (e) =>{
		 e.preventDefault()
		 
		 createUserWithEmailAndPassword(auth,emailAddress,password)
		 updateProfile(auth.currentUser,{
			 displayName : firstName,
			 photoURL : Math.floor(Math.random() * 5) + 1,
		 }).then(() => {
				 history(ROUTES.BROWSE)
			 }).catch((error) => {
			     setFirstName('')
			     setEmailAddress('')
			     setPassword('')
			     setError(error.message)
		 })
		 
	 }
	return (
		<>
		<HeaderContainer>
		<Form>
		 <Form.Title>Sign Up</Form.Title>
		 {error && <Form.Error>{error}</Form.Error>}
		 <Form.Base onSubmit={handleSignUp} method="POST">
		  <Form.Input placeholder="First Name" value={firstName} onChange={({target}) => setFirstName(target.value)}/>
		  <Form.Input placeholder="Email Address" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
		  <Form.Input type="password" value={password} autoComplete="off" placeholder="Password" onChange={({target}) => setPassword(target.value)}/>
		  <Form.Submit disabled={isInValid} type="submit">
		  Sign Up</Form.Submit>

		  <Form.Text> 
		  Already a User? <Form.Link to="/signin">Sign in now.</Form.Link>
		  </Form.Text>
		  <Form.TextSmall>
		   This is page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
		  </Form.TextSmall>
		 </Form.Base>
		</Form>
		</HeaderContainer>
		<FooterContainer/>
		</>
	)
}