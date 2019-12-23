import React, {useState} from "react"
import axios from 'axios'
import readExcel from "read-excel-file"
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {Menu, Layout, Button, Content,Dropdown, Icon, message, Input} from 'antd';

const menu = (
	<Menu style={{"width":"10vw"}} name="Company name">
		<Menu.Item value="value1">Proovedor 1</Menu.Item>
		<Menu.Item value="value2">Proovedor 2</Menu.Item>
		<Menu.Item value="value3">Proovedor 3</Menu.Item>
		<Menu.Item value="value4">Proovedor 4</Menu.Item>
		<Menu.Item value="value5">Proovedor 5</Menu.Item>
	</Menu>
)


export default function AddDataProvider (props) {
	const [data,SetData] = useState({approved:false}) 

	const uploadFile = (e) => {
		data["providerFile"] = e.target.files[0]
		readExcel(e.target.files[0])
			.then( rows => {
        data["provider"] = props.match.params.provider
        data["table"] = rows
        data["approved"] = true
        console.log(data.table)
        SetData(data)
      })
    	.catch(e => console.log(e))
    }
    
 
	const sendDataToServer = () => {
    console.log(data)
		axios.post("https://6h0ifo0736.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/add-data-provider",data)
			.then( success =>	console.log(success) )
			.catch( error => console.log(error) )
	}


    return (
			<div className="Home">
				<h2>Bienvenido proveedor</h2>
				<section className="container">
					<div className="cont-1">
					<h3>Sube tus archivos de excel</h3>
					<input id="file" onChange={uploadFile} type="file" name="file"/>
					<br/>
					<Button type="default" onClick={sendDataToServer}>Enviar a Genomma</Button>
					
					</div>
					
					<div className="cont-2">
						<p>Los archivos deben cargarse en formato .xlsx.
						<br/>
						Para descargar un ejemplo del formato da click<a style={{"color": "blue"}} href="/" download> aquí</a></p>
						<div className="cont-3">
							<img alt="logo" src={require("../assets/logo2.png")}/>
							<Button type="link">Contáctanos</Button>
						</div>
					</div>
				</section>
			</div>
    )
}