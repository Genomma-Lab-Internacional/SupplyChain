import React from 'react'
import 'antd/dist/antd.css'
import {Collapse, Icon, Modal, Button, Input} from 'antd'
import '../layout/layout.css'


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
            <div>
                <section className="faqs">
                    <h2>Sección de preguntas frecuentes</h2>
                    <img alt="logo1" src={require('../assets/logo1.png')}/>
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
                    <Panel header="Pregunta número 4" key="3" style={customPanelStyle}>
                    <p>{text}</p>
                    </Panel>
                    <Panel header="Pregunta número 5" key="3" style={customPanelStyle}>
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