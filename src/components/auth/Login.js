import React,{useState} from "react"
import '../layout/layout.css'
import 'antd/dist/antd.css';

export default function Login (props) {
	const [user,setUser] = useState({})

	const inputData = (e) => { user[e.target.name] = e.target.value }

	const verifyUser = () => {
		switch(`${user.username}_${user.password}`) {
			case "Albek_4lb3k_H8D3V":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "SIE_S13_4ch38Ch8d3Vg3n0MM4":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Botanicals_B0t4n1c4ls_G3n0mM4l4Bh8cH8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Comdruso_g3N0Mm4L4BINTC0mdrUs0H8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Francobel_Fr4nC0b3Lh88Ch8G3N0MM4L4b8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "CandG_Ce&andGih88Ch8G3N0MM4L4b8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Servical_S3rV1c4LG3nnoM48cho8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "EstiloYVanidad_3st1l01V4N1D4D%4CH38":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "AAACosmetica_444C0sM3t1c4g3nn0M4LABh8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Saroma_h4ch3ocH0S4roM4G3nnoM4LAB":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Test_Test":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "GenommaLab_GenommaLab123":
				props.history.push("/genommavalidation")
				break
			default:
				alert("Contraseña y/o usuario incorrecto")
				break
		}
	}

	return(
		<section className="login">
			<div className="cont-login">
				<img alt="avatar" src={"https://genommalab-supplychain.s3.amazonaws.com/images/avatar_login.png"}/>
				<input onChange={inputData} type="text" name="username" placeholder="Nombre de Usuario"/>
				<br/>
				<input onChange={inputData} type="password" name="password" placeholder="Contraseña"/>
				<br/>
				<button onClick={verifyUser}>Ingresa a Genomma</button>
			</div>
		</section>
	)
}