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
                    <Panel header="Pregunta número 1" key="1" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Pregunta número 2" key="2" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Pregunta número 3" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                   
                    </Collapse>
                </section>
            
            <div className="foot-faq">
            <p>¿No encontraste lo que buscabas?</p>
            <Button type="link">Contáctanos</Button>
            </div>
            
            </div>
        )
}