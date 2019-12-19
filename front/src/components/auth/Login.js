import React,{useState} from "react"
import axios from "axios"
import '../layout/layout.css'
import 'antd/dist/antd.css';
import {Button} from 'antd'


export default function Login (props) {
	const [user,setUser] = useState({})

	const inputData = (e) => {
		user[e.target.name] = e.target.value
		console.log(e.target.name,e.target.value)
	}

	const VerifyUser = () => {
		switch(`${user.username}_${user.password}`) {
			case "Albek_albek123":
				console.log("dentro")
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "GenommaLab_GenommaLab123":
				console.log("dentro")
				props.history.push("/genommavalidation")
				break
			default:
				break
		}

		console.log(user)
		// axios.post("https://kyyw75ebq3.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/login",user)
		//     .then( user => console.log(user) )
		//     .catch( error => console.log(error) )
	}

	return(
		<section className="login">
			<div className="cont-login">
				<img alt="avatar" src={require("../assets/avatar3.png")}/>
				<input onChange={inputData} type="text" name="username" placeholder="Nombre de Usuario"/>
				<br/>
				<input onChange={inputData} type="password" name="password" placeholder="Contraseña"/>
				<br/>
				<button onClick={VerifyUser}>Ingresa a Genomma-Supply Chain</button>
			</div>
		</section>
	)
}