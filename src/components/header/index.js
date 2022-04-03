import React from "react";
import { Link } from "react-router-dom";
import {Background,Container,ButtonLink,Logo} from "./styles/header"


export default function Header({bg=true,children,...restProps}){
  return bg ? <Background {...restProps}>{children}</Background> : children


}  
  

  Header.Frame = function HeaderFrame({children,...restProps}){
	  return <Container {...restProps}>{children}</Container>
  }
  Header.ButtonLink = function HeaderButton({childern,...restProps}){
	  return <ButtonLink {...restProps}>{childern}</ButtonLink>
  }
  Header.Logo = function HeaderLogo({to,...restProps}){
	  return (
		  <Link to={to}>
			  <Logo {...restProps}/>
		  </Link>
	  )
  }
