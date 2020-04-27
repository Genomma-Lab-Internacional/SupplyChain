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
			case "Everest_G3noMM4Ev3R3StLABAhc38":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Gelpharma_GG3lph4rm4N0mm4L4bH8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Farmapiel_f4Rmm$p!#lg#n0mm4l$bHoch0":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Giaccar_GG14CC4rlab3nOmM4ochoHH3":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Progela_pr0g3l$acheg3n0mmaL4B":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Biulab_b18LABg3n8mm4h8h":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Absara_4bS4r4g3n0mm4l4b4ch38ch8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "CosmeticColors_c0l0rSC0smEt1csGle4nb0mm48":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Selder_G3N0MM4s3ld3rL4B0ch0":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "CenturyLab_LABc3nt7r1labg3n0mm40cho0":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Liferpal_0ch0l1f3p4rl0cho0LAB":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "RotoPack_0ch0g3n0mm4R0T0L4bP4ck":
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