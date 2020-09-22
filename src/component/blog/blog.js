import React from 'react';
import './blog.scss';
import data from '../../data/data.json';

const  links = data.map( (data) =>{
  return  (
    <a href={data.url} target="_blank" rel="noopener noreferrer">
      <i className= {"fab fa-" + data.name } > </i>
    </a> 
  )
  }
)

function Blog() {
  return (
    <div className='blog_page'>
      <h1 > Blog</h1>
      <hr className='my-4 my-lg-5' />
      <div className='blog_content'>
        <h3 className='bold my-auto text-center'>We are building</h3>
      </div>
      <hr className='my-4 my-lg-5' />
      <div className='social_links pb-4'>
        {links}
      </div>
    </div>
  );
}

export default Blog;
