import React from 'react';
import './about.scss';
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

function About() {
  return (
    <div className='about_page'>
      <h1 > About me </h1>
      <hr className='my-4 my-lg-5 pb-lg-4' />
      <div className='row'>
        <div className='about_img col-12 col-lg-6'>
          <img src={logo} alt="ER-RAFAIY Abdelhakim" />
        </div>
        <div className='about_content col-12 col-lg-6'>
          <p>
            I’m Abdelhakim Er-rafaiy, I’m a Front-end web developer. I'm really interested in Technology & solving technical problems. You can know more about me by reading my articles.
          </p>
          <p>
            Currently I'm working full time as a Front-end developer at void.
          </p>
          <h6 className='bold my-4'>
            For business inquiries feel free to get in touch with me at:
          </h6>
          <div className='mt-3 about_contact'>
              <a href='tel:0607739862'>
                <i class="fas fa-phone-alt mr-2"></i>
                0607739862
              </a>
              <a href='mailto:abdelhakimerrafaiy@gmail.com'>
                <i class="fas fa-envelope-open-text mr-2"></i>
                abdelhakimerrafaiy@gmail.com
              </a>
              <a href='#'>
                <i class="fas fa-map-marker-alt mr-2"></i>
                Agadir , Morocco
              </a>
          </div>
        </div>  
      </div>
      <hr className='my-4 my-lg-5' />
      <h6 className='bold my-3 text-center'>Or somewhere else on the web</h6>
      <div className='social_links pb-4'>
        {links}
      </div>
    </div>
  );
}

export default About;
