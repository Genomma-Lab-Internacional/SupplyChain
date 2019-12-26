import React from 'react';
import {Link} from 'react-router-dom';
import '../layout/layout.css'
import 'antd/dist/antd.css';
import { Modal, Button, Input} from 'antd';
import axios from 'axios';


class Footer extends React.Component{
        state = { visible: false,
                  data : ''
                }

        showModal = (e) => {
          console.log(e)
          this.setState({
            visible: true,
          });
        }
      
        handleOk = e => {
          console.log(e.target.name,e.target.value);
          this.setState({
            visible: false,
          });
          axios.post('https://6h0ifo0736.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/add-data-provider', this.state.data)
          .then( success =>	console.log(success) )
			    .catch( error => console.log(error) )
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
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <p>Nombre</p>
                        <Input onChange={this.showModal} type="text" name="Name"/>
                        <p>Correo electrónico</p>
                        <Input type="email" name="Email"/>
                        <p>Comentarios:</p>
                        <Input type="text" name="Comments"/>
                        </Modal>
                    </li>
                </ul>
            </div>    
                
        </footer>
    )
}
}
export default Footer