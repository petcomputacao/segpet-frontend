import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
import Logo from '../../assets/img/whiteLogo.png';
import { FaFacebook,FaInstagram,FaGithub,FaYoutube } from 'react-icons/fa';

function Footer(){
  return (
    <footer className='footer_container'>
      <a href='/' className='footer_container_logo'>
        <img className='footer_item_logo' src={Logo} alt='logo'/>
      </a>
      <div className='footer_container_text'>
        <p className={'footer_container_text_title'}>Encontre-nos</p>
        <p>Rua Aprígio Veloso, 882 - Bairro Universitário Bloco CN - Térreo - sala 007. CEP: 58429-900 Campina Grande, Paraíba, Brasil.</p>
        <p>Tel: (83) 2101-1122 (Ramal: 2009)</p>
        <p>E-mail: pet@computacao.ufcg.edu.br</p>
      </div>
      <div className='footer_container_text'>
        <p className={'footer_container_text_title'}>Sites relacionados</p>
        <p>
          <Link to='/' style={{'fontSize':'12px'}}>Apresentação - PET</Link>
        </p>
        <p>
          <Link to='/' style={{'fontSize':'12px'}}>Computação UFCG</Link>
        </p>
        <p>        
          <Link to='/' style={{'fontSize':'12px'}}>Universidade Federal de Campina Grande</Link>
        </p>
        <p>
          <Link to='/' style={{'fontSize':'12px'}}>Portal MEC</Link>
        </p>
      </div>
      <div className='footer_container_text'>
        <p className={'footer_container_text_title'}>Conecte-se conosco</p>
        <p>Siga-nos nas redes sociais para manter-se atualizado sobre nossas atividades.</p>
        <div className='footer_container_icons'>
          <Link to='/facebook'>
            <FaFacebook className='footer_item_icon'/>
          </Link>
          <Link to='/instagram'>
            <FaInstagram className='footer_item_icon'/>
          </Link>
          <Link to='/github'>
            <FaGithub className='footer_item_icon'/>
          </Link>
          <Link to='/youtube'>
            <FaYoutube className='footer_item_icon'/>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;