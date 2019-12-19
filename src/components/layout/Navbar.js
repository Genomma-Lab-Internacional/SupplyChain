import React from 'react';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Menu, Layout } from 'antd';
import axios from 'axios'
import {url} from "../services/toMap"

const { Header} = Layout;

class Navbar extends React.Component{
  state={
    user:{},
    islogged: false,
    query: '',
    data: [],
  }
  checkLogged = () => {
    axios.get(`${url}/loggedin`, { withCredentials: true })
      .then(res => {
        this.setState({ islogged: true, user: res.data.user })
      })
      .catch(e => console.log(e))
  }
  
  componentDidMount() {
    console.log(this.props)
    this.checkLogged()
  }

  render(){
    const {islogged} = this.state
    return(
      <div>
        {islogged
        ?
        <div>
          <Header>
            <Menu  theme="dark" mode="horizontal" style={{ lineHeight : "10px"}}>
              <Menu.Item className="Navbar1" key="profile"><Link to='/profileviewer/:role/:id'>Perfil</Link></Menu.Item>
              <Menu.Item key="logout"><Link to='/logout'>Cerrar sesión</Link></Menu.Item>
              <Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
              <Menu.Item>
              </Menu.Item>
            </Menu>
        </Header>
        </div>
      : 
        <div>
          <Header className="Navbar" >
            <Menu defaultSelectedKeys={['3']} mode="horizontal" theme="dark">
              <Menu.Item key="login"><Link to='/Login'>Iniciar sesión</Link></Menu.Item>
              <Menu.Item key="FAQS"><Link to='/FAQS'>Preguntas</Link></Menu.Item>
              <Menu.Item key="home"><Link to='/'>Home</Link></Menu.Item>
              <Menu.Item> 
              </Menu.Item>
            </Menu>
          </Header>
        </div>
        } 
      </div>
      
    )
    
}
}


export default Navbar