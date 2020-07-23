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
			case "Olnatura_0ln4tuR4LABg3n0mm48hc8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Beautyge_gB3n0mm48ch84ut1G3":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Profilatex_G3n0mm4LABPro0f1l4t3X8ch8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "IndusOleofinos_1nDuS0l30f1n0sLAB8ch84ch3G3N":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "QuimicaYFarmacia_Qu1m1c4YF4rm4c14LABG3n0mm488":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "IndustriasQuimicasIndependencia_1Nd%ST$aSqu9m8c#asnd3Ip":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LQFLaboratorioQuimico_4ch38ch8LQFl4b0rat0rioQ71m1c0":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "PersonnaInternational_h8p3rs0nN41nt3rNati0n4lh8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "DeMexico_h8ch8h4ch38ch8d3M3quch1k0":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "SarintMaquilas_8ache8s4RINtm$q/!l$s":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "ColorLink_C0l=rL!nk(ch(!ch#":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "RecicladoraDePlasticos_r#c!Cl$d=r$de8achepl$st!cos":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Renopac_R#n=p$coch=$ch#":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "AstraZeneca_Ostr%Z(n$caocho":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "ClaraActitudMexicana_cl$r$%ct!tudm#xicanah8":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabDermatologicoPrada_hochoLABD#RM$T=L=GIC=prada":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabPisa_h8choLabP!s$ocho":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabRetyDeColombia_l$Br#t/d$C0l=mb!a":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabRussek_LaBR%uss#kh((h":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabValdecasas_l$bV$lDc$s4sc4sas":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "NovagInfancia_n=v$g!nf$nc!$1nf4nc1a":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "ServiciosAdministrativosUrbanus_s3rv1c1osadm9nis4tra4tiv9s":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "GrupoRostenberg_gr8p3or93st4nb3er45":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Indelpa_in2nd30lp2aj4an":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabZell_l4ab4ak4mZ#ll":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Tecnosol_t#cacheS0l8chae":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "UniversalWipes_%n$i!v#4rs$alw1P43s":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabColumbiaComercial_l$babC0l0mb!i$4c0m4rercial":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "MediaEmpaques_m2dia92amepaques":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "PharmacosExakta_p2harm2ca92oC2$smaQ":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Serral_O#4SerArral#2al":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "SinergiaFarmaceutica_s1N#rG!Aphra$ma#ceucik":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "UltraLaboratorios_O#lultraortiso2CdW":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "UnitedExchangeCorp_unIt#deXch%ngeC0rP":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "LabManuell_l$bMan$uellm$anu3ell":
				props.history.push(`/adddataprovider/${user.username}`)
				break
			case "Test_Testing":
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