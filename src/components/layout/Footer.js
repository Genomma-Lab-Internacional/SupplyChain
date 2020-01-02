import React from 'react';
import {Link} from 'react-router-dom';
import '../layout/layout.css'
import 'antd/dist/antd.css';
import { Modal, Button, Input} from 'antd';
import axios from "axios"


class Footer extends React.Component{
  state = { 
    visible: false,
    data:{
      name:"",
      email:"",
      comments:""
    }
  }

  showModal = (e) => {
    let {data} = this.state
    data[e.target.name] = e.target.value
    this.setState({
      visible: true,
      data
    });
    console.log(this.state)
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
    
    axios.post("https://6h0ifo0736.execute-api.us-east-1.amazonaws.com/dev/genommalab/supplychain/contact-us",this.state.data)
      .then( success => console.log(success) )
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
                        <Input onChange={this.showModal} type="text" name="name"/>
                        <p>Correo electrónico</p>
                        <Input onChange={this.showModal} type="email" name="email"/>
                        <p>Comentarios: </p>
                        <Input onChange={this.showModal} type="text" name="comments"/>
                        </Modal>
                    </li>
                </ul>
            </div>    
                
        </footer>
    )
}
}
export default Footer