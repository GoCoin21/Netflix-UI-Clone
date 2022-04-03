import React from "react";
import {HeaderContainer} from "../containers/header";
import { Feature,OptForm } from "../components";
import FaqsContainer from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home(){
	return (
		<>
		     <HeaderContainer>
			 <Feature>
				 <Feature.Title>
					 Unlimited films, TV programmes and more.
				 </Feature.Title>
				 <Feature.SubTitle>
					 Watch anymore. Cancel at any time.
				 </Feature.SubTitle>
				 <OptForm>
				<OptForm.Input placeholder="Email address"/>
				<OptForm.Button>Try It Now</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Ready to Watch? Enter your email to create or restart your membership
				</OptForm.Text>
			</OptForm> 
			 </Feature>
			 
			 </HeaderContainer>
			
			 <JumbotronContainer/>
			<FaqsContainer/>
			<FooterContainer/>
			 
			
		</>
	)
}