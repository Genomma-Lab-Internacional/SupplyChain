  
import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/layout/Home'
import FAQS from './components/layout/FAQS'
import Login from './components/auth/Login'

export default (props)=>{
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/FAQS" component={FAQS}/>
            <Route exact path="/Login" component={Login}/>
        </Switch>
    )
}