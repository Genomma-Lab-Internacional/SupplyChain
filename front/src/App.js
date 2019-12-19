import React from 'react'
import Routes from "./Routes"
import Nav from "../src/components/layout/Navbar"
import Footer from "../src/components/layout/Footer"
import styles from "./App.css"

function App() {
  return (
    <div>
      <Nav/>
      <Routes/>
      <Footer/>
    </div>
  )
}

export default App
