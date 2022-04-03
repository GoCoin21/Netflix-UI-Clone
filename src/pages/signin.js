import React, {useState,useContext} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import {HeaderContainer} from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
export default function Signin(){
	const history = useNavigate()
	const {firebase} = useContext(FirebaseContext)
	const [emailAddress,setEmailAddress] = useState('');
	const [password,setPassword] = useState('');
	const [error,setError] = useState('');
  
    const isInValid = password === '' || emailAddress === ''
    const auth = getAuth()
	const handleSignIn = (event) => {
         
		event.preventDefault()
        signInWithEmailAndPassword(auth,emailAddress,password)
		.then(() => {
           history(ROUTES.BROWSE)
		})
		.catch((error) => {
			setEmailAddress('');
			setPassword('');
			setError(error.message);
		})
	}
 	return (
		<>
		<HeaderContainer>
			<Form>
				<Form.Title>
					Sign In
				</Form.Title>
				{error && <Form.Error>{error}</Form.Error>}
				<Form.Base onSubmit={handleSignIn} metshod="POST">
                  <Form.Input placeholder="Email Address" value={emailAddress} onChange={({target}) => setEmailAddress(target.value)}/>
				  <Form.Input placeholder="password" autoComplete="off" value={password} onChange={({target}) => setPassword(target.value)}/>
				  <Form.Submit disabled={isInValid} type="submit">
					  Sign In
				  </Form.Submit>
				</Form.Base>
				<Form.Text>
					New to NetFlix? <Form.Link to="/signup">Sign up now.</Form.Link>
				</Form.Text>
				<Form.TextSmall>
					This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
				</Form.TextSmall>
			</Form>
		</HeaderContainer>

		<FooterContainer/>
		</>
	)   
}