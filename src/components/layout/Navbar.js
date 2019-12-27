import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Menu, Layout } from 'antd';
import axios from 'axios'
import Cookie from 'js-cookie';

const { Header} = Layout;

// class Navbar extends React.Component{
//   state={
//     user:{},
//     islogged: false,
//     query: '',
//     data: [],
//   }

function Navbar() {
  const [data, setData, user] = useState({isAuthenticated: false})
  let token = Cookie.get("verifyUser_token") ? Cookie.get("verifyUser_token") : null;
  
  let isLogged = () => {
    let token = Cookie.get("verifyUser_token") ? Cookie.get("verifyUser_token") : null;
    if(token){
      return(
        <Header>
            <Menu  theme="dark" mode="horizontal" style={{ lineHeight : "10px"}}>
            <Menu.Item key="logout" onClick={() => Cookie.remove("verifyUser_token")}><Link to='/logout'>Cerrar sesión</Link></Menu.Item>
            <Menu.Item key="FAQS"><Link to='/FAQS'>Preguntas</Link></Menu.Item>
              <Menu.Item className="Navbar1" key="profile"><Link to='/adddataprovider/:provider'>Perfil</Link></Menu.Item>
              <Menu.Item>
              </Menu.Item>
            </Menu>
        </Header>
      )
    } else {
      return (
        <Header className="Navbar" >
            <Menu defaultSelectedKeys={['3']} mode="horizontal" theme="dark">
              <Menu.Item key="login"><Link to='/'>Iniciar sesión</Link></Menu.Item>
              <Menu.Item key="FAQS"><Link to='/FAQS'>Preguntas frecuentes</Link></Menu.Item>
              {/* <Menu.Item key="home"><Link to='/adddataprovider/:provider'>Perfil</Link></Menu.Item> */}
              <Menu.Item> 
              </Menu.Item>
            </Menu>
          </Header>
      )
    }
  }

  const navbarState = () => {
    let token = Cookie.get("verifyUser_token") ? Cookie.get("verifyUser_token") : null;
    if(token) setData({isAuthenticated: true});
    return;
  }
  useEffect(() => {
    isLogged();
    navbarState();
  }, [data.isAuthenticated]);

  // checkLogged = () => {
  //   axios.get(`${url}/loggedin`, { withCredentials: true })
  //     .then(res => {
  //       this.setState({ islogged: true, user: res.data.user })
  //     })
  //     .catch(e => console.log(e))
  // }
  
  // componentDidMount() {
  //   console.log(this.props)
  //   this.checkLogged()
  // }

    return(
        <div>
          <Header className="Navbar" >
            <Menu defaultSelectedKeys={['3']} mode="horizontal" theme="dark">
            { isLogged() }
            </Menu>
          </Header>
        </div>
    )  
}

export default Navbar