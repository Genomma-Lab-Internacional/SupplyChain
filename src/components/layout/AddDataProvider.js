import React, {useState} from "react"
import axios from 'axios'
import readExcel from "read-excel-file"
import {SKUAGenomma} from  "../Constants/SKUAGenomma"
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {Menu, Layout, Button, Content,Dropdown, Icon, message, Input, Modal,Spin,Alert} from 'antd';

let datafilter= [["SKUA","descripcion","cantidad"]]

export default function AddDataProvider (props) {
	const [data,SetData] = useState({approved:false})
	const [parameters,setParameters] = useState({button:true})

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
    	.catch(e => console.log(e) )
    }
    
 
	const sendDataToServer = () => {
		axios.post("https://6h0ifo0736.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/add-data-provider",data)
			.then( ( ) =>	{
				Modal.info({
					title: 'Tu archivo se subio correctamente',
					content: (
						<div>
							<p>Gracias!</p>
						</div>
					),
					onOk() {},
				})
			})
			.catch( ( ) => {
				Modal.info({
					title: 'Tu archivo NO se subio correctamente',
					content: (
						<div>
							<p>Verifica que los datos de las columnas esten correctos.</p>
							<p>Verifica que los codigos SKUA sean los mismos que los de GenommaLab.</p>
						</div>
					),
					onOk() {},
				})
			 })
	}
	


    return (
			<div className="Home">
				<div className="home-cont">
				<h2>Bienvenido proveedor</h2>
				<img alt="logo" src={require('../assets/logo2.png')}/>
				</div>
				<section className="container">
					<div className="cont-1">
						<h3>Sube tus archivos de excel</h3>
						<input id="file" onChange={uploadFile} type="file" name="file"/>
						<br/>
						{/* <Button type="default" style={{"width": "40%"}} onClick={sendDataToServer} disabled={parameters.button}>Enviar a Genomma</Button> */}
						<Button type="default" style={{"width": "40%"}} onClick={sendDataToServer}>Enviar a Genomma</Button>
					</div>
					<div className="cont-2">
						<p>
							Los archivos deben cargarse en formato .xlsx.
        			<br/>
       				Para descargar una guía del formato en el que debes cargar tus archivos da click<a style={{"color": "blue"}} href="https://genommalab-supplychain.s3.amazonaws.com/images/InventarioEjemplo.xlsx" download> aquí</a>
						</p>
						<p>
							<b>Catalogo de códigos SKUA</b>
        			<br/>
       				Para descargar el catalogo de códigos SKUA de GenommaLab da click<a style={{"color": "blue"}} href="https://genommalab-supplychain.s3.amazonaws.com/images/SKUAGenommaLab.xlsx" download> aquí</a>
						</p>
        	</div>
        </section>
				<div className="cont-3">
					<div className="check">
						<img alt="logo" src={require('../assets/check-file.png')}/>
						<p>Verifica que el formato de tu archivo sea correcto.</p>
					</div>
					<div className="excel">
						<img alt="logo" src={require('../assets/excel.png')}/>
						<p>Cárgalo desde tus archivos en nuestra plataforma.</p>
					</div>
					<div className="upload">
						<img alt="logo" src={require('../assets/upload.png')}/>
						<p>Listo! Recuerda subir tus reportes semanalmente.</p>
					</div>
				</div>
			</div>
    )
}