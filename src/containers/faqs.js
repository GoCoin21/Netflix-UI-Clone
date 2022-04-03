import React from "react";
import {Accordion} from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export default function FaqsContainer(){
	return (
		<Accordion>
			<Accordion.Title>Frequently asked question</Accordion.Title>
			<Accordion.Frame>
				{faqsData.map((item) => (
					<Accordion.Item key={item.id}>
						<Accordion.Header>{item.header}</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>

			<OptForm>
				<OptForm.Input placeholder="Email address"/>
				<OptForm.Button>Try It Now</OptForm.Button>
				<OptForm.Break />
				<OptForm.Text>
					Ready to Watch? Enter your email to create or restart your membership
				</OptForm.Text>
			</OptForm>
		</Accordion>
	)
}