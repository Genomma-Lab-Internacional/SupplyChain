import React,{useState} from "react"
import '../layout/layout.css'
import 'antd/dist/antd.css';

export default function Login (props) {
	const [user,setUser] = useState({})

	const inputData = (e) => { user[e.target.name] = e.target.value }

	const verifyUser = () => {
		switch(`${user.username}_${user.password}`) {
			case "Albek_albek123":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "GenommaLab_GenommaLab123":
				props.history.push("/genommavalidation")
				break
			default:
				break
		}
	}

	return(
		<section className="login">
			<div className="cont-login">
				<img alt="avatar" src={require("../assets/avatar3.png")}/>
				<input onChange={inputData} type="text" name="username" placeholder="Nombre de Usuario"/>
				<br/>
				<input onChange={inputData} type="password" name="password" placeholder="Contraseña"/>
				<br/>
				<button onClick={verifyUser}>Ingresa a Genomma</button>
			</div>
		</section>
	)
}