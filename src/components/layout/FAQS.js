import React from 'react'
import 'antd/dist/antd.css'
import axios from 'axios'
import {Collapse, Icon, Modal, Button, Input} from 'antd'
import '../layout/layout.css'

/*
const [visible, setVisible] = useState(false)

const showModal = (e) => {
    console.log(e);
    setVisible(true)
  }
  const handleOk = e => {
    console.log(e);
    setVisible(false)
  }
  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  }*/

const {Panel} =  Collapse 
const text = 
`Aquí vienen las respuestas a todas sus preguntas`
const customPanelStyle = {
    background: 'rgb(241, 240, 246)',
    borderRadius: 4,
    margin: 24,
    border: 0,
    overflow: 'hidden',
  }
 
  

export default function FAQS(){
        return(
            <div className="faq-gral">
                <section className="faqs">
                    <h2>Sección de preguntas frecuentes</h2>
                    <img alt="logo1" src={require('../assets/logo2.png')}/>
                </section>
                <section>
                    <Collapse
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
                    <Panel header="¿Qué formato acepta la plataforma?" key="1" style={customPanelStyle}>
                    <p>La plataforma ÚNICAMENTE acepta formato Microsoft Office Excel (.xlsx)</p>
                    </Panel>
                    <Panel header="¿Por qué no me deja subir el archivo?" key="2" style={customPanelStyle}>
                    <p>La causa más común es que alguno de los campos en tu archivo Excel no coincida con los campos predefinidos de la plantilla. De igual forma recuerda verificar que los SKUA sean los definidos por Genomma.</p>
                    </Panel>
                    <Panel header="¿Cada cuánto tiempo se tiene que cargar el inventario en la plataforma?" key="3" style={customPanelStyle}>
                    <p>Tiene que cargarse todos los lunes antes de las 12:00 pm. </p>
                    </Panel>
                   
                    </Collapse>
                </section>
            
            <div className="foot-faq">
                <p>¿No encontraste lo que buscabas?</p>
            <p>Envíanos tus preguntas a través de nuestro contacto y te responderemos a la brevedad.</p>
            </div>
            
            </div>
        )
}