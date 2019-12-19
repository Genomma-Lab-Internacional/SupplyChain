  
 import React, {Component} from 'react';
 import './App.css';
 import Routes from './Routes.js'
 import Navbar from './components/layout/Navbar'
 import Footer from './components/layout/Footer'
 
 
 class App extends Component{
   state={
     user: {}
   }
 
 
 catchforGlobalState = (res) => {
   let {user} = res.data
   this.setState={user, isAuth:true }
 }
 render(){
 
 let {user} = this.setState
 
   return (
     <div>
       <Navbar/>
       <Routes user = {user} catch = {this.catchforGlobalState}/>
       <Footer/>
     </div>
   );
 }
 }
 
 export default App;
