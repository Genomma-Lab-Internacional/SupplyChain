import React from "react"
import { Switch, Route } from "react-router-dom"

import AddDataProvider from "./components/layout/AddDataProvider"
import Login from "./components/auth/Login"
import GenommaValidation from "./components/layout/GenommaValidation"
import FAQS from "./components/layout/FAQS"


export default () => {
	return (
		<Switch>
			<Route exact path="/adddataprovider/:provider" component={AddDataProvider} />
			<Route exact path="/" component={Login} />
			<Route exact path="/genommavalidation" component={GenommaValidation} />
			<Route exact path="/faqs" component={FAQS} />
		</Switch>
  )
}