import React from 'react';
import './technologies.scss';
import data from '../../data/tech.json';

function Technologies() {
  return (
    <div className='technologies'>
          <h1 > Technologies :  </h1>
          <hr className='my-4 my-lg-5' />
          <div className='col-8 mx-auto'>
            <div class="row">
              { data.map(item => (
                  <div className="col-4 mb-4" >
                    <div className="card h-100">
                      <div className="card-body">
                        <h6 className="card-title mb-2 "><b>{ item.name }</b></h6>
                        <p className="card-text mb-1"><b>{ item.title }</b></p>
                        <p className="card-text mb-1">{ item.desc }</p>
                        <a className='read-more mb-2' href={  item.url }></a>
                      </div>
                    </div>
                </div>
              )) }
            </div>
          </div>  
        </div>
  );
}

export default Technologies;
