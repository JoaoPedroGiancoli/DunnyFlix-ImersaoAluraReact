import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './styles.css'
function Erro(){
    return(
      
        <div className='container'>
            <Link to="/">
                <img className="Logo" src={Logo} alt="LucasFlix"></img>
            </Link>
            <h1>Erro 404 - Arquivo Nao encontrado</h1>
            <div className="dash">
            </div>
        </div>
       
      
    )
  }

  
export default Erro;