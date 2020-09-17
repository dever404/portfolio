import React from 'react';
import './home.scss';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import logo from '../../img/porfolio.jpg'
import data from '../../data/data.json';

const  links = data.map( (data) =>{
  return  (
    <a href={data.url} target="_blank" rel="noopener noreferrer">
      <i className= {"fab fa-" + data.name } > </i>
    </a> 
 )
}
)

function Home() {
  return (
    <div className='home_body'>
      <a href="!#" className='home_body_menu'></a>
      <div className='home_resume'>
        <div className='wrapper_img'>
          <a href='https://wa.me/212607739862?text=Bonjour, Je suis tombé sur votre site web' className='btn_wa' target='_blank'>
            <i className='fab fa-whatsapp icon-wa'></i>
          </a>
          <img src={logo} alt="Logo" />
        </div>
        <div className='home_info'>
          <h4>Hi, I'm</h4>
          <h1 className='name'>ER-RAFAIY Abdelhakim</h1>
          <h3 className='job'>Front-End Web Developer</h3>
        </div>
        <div className='home_social'>
          {links}
        </div>
      </div>
    </div>
  );
}

export default Home;
