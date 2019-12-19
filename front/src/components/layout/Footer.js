import React from 'react';
import {Link} from 'react-router-dom';
import "../layout/layout.css"


class Footer extends React.Component{
    state= {
        data:''
    }


render(){
    return (
        <footer>
            <div className="Foot1">
                <h4><a href="https://genommalab.com/mx/">Genomma Lab© 2019</a></h4>
            </div>
            <div className="Foot2">
                <ul>
                    <li><a href="/">Contacto</a></li>
                    <li><a href="/">Aviso de privacidad</a></li>
                </ul>
            </div>    
                
        </footer>
    )
}
}
export default Footer