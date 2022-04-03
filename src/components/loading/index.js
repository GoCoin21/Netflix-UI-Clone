import React from "react";
import { Spinner,Picture,LockBody } from "./styles/loading";
export default function Loading({src,...restProps}){
	return (
		<Spinner {...restProps}>
         <LockBody/>
		 <Picture src={`/images/users/${src}.png`} data-testid="loading-picture"/>
		</Spinner>
	)
}
