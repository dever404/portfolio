import React from 'react';
import './home.scss';
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
      <div className='home_resume'>
        <div className='wrapper_img'>
          <a href='https://wa.me/212607739862?text=Bonjour, Je suis tombé sur votre site web' className='btn_wa' target='_blank'>
            <i className='fab fa-whatsapp icon-wa'></i>
          </a>
          <img src={logo} alt="ER-RAFAIY Abdelhakim" />
        </div>
        <div className='home_info'>
          <h4>Hi, I'm</h4>
          <h1 className='name'>ER-RAFAIY Abdelhakim</h1>
          <h3 className='job'>Front-End Web Developer</h3>
        </div>
        <div className='social_links'>
          {links}
        </div>
      </div>
    </div>
  );
}

export default Home;
