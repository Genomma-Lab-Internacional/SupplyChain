import React from 'react';
import {Link} from 'react-router-dom';
import '../layout/layout.css'
import 'antd/dist/antd.css';
import { Modal, Button, Input} from 'antd';


class Footer extends React.Component{
        state = { visible: false }

        showModal = () => {
          this.setState({
            visible: true,
          });
        }
      
        handleOk = e => {
          console.log(e);
          this.setState({
            visible: false,
          });
        }
      
        handleCancel = e => {
          console.log(e);
          this.setState({
            visible: false,
          });
        }

render(){
    return (
        <footer>
            <div className="Foot1">
                <h4><a href="https://genommalab.com/mx/">Genomma Lab© 2019</a></h4>
            </div>
            <div className="Foot2">
                <ul>
                    <li>
                    <Button className="btn" style={{"color": "white"}} onClick={this.showModal} type="link">Contáctanos</Button> 
                        <Modal
                        title="Envía tus datos y nos pondremos en contacto contigo:"
                        visible={this.state.visiblevisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <p>Nombre</p>
                        <Input/>
                        <p>Correo electrónico</p>
                        <Input/>
                        <p>Comentarios:</p>
                        <Input></Input>
                        </Modal>
                    </li>
                    <li><a href="/">Aviso de privacidad</a></li>
                </ul>
            </div>    
                
        </footer>
    )
}
}
export default Footer