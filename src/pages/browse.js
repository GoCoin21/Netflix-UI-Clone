import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
export default function Browse(){
	const {series} = useContent('series')
	const {films} = useContent('films')
	const slides = selectionFilter({series,films})
	
 	return (
		
		// we need slides
		// pass it to the browse container
		<BrowseContainer slides={slides}/>
	)
}