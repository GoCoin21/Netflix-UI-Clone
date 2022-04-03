import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import * as ROUTES from "./constants/routes";
import Browse from './pages/browse';
import Home from './pages/home';
import Signin from './pages/signin';
import Signup from './pages/signup';
import {IsUserRedirect,ProtectedRoute} from './helpers/routes';
//import {useAuthListener} from "./hooks"
export const App = () => {
	const user = {}
  return (
	  <>
		<Router>
				 <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}/>
				 <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}/>
         <ProtectedRoute user={user} path={ROUTES.BROWSE}/>
         
 		 <Routes>
		 <Route exact path={ROUTES.SIGN_IN} element={<Signin/>}/>
		 <Route exact path={ROUTES.SIGN_UP} element={<Signup/>}/>
		 <Route exact path={ROUTES.BROWSE} element={<Browse/>}/>
		 
		 <Route exact path={ROUTES.HOME} element={<Home/>}/>
		
		</Routes>
		</Router>
	  </>
  );
};
