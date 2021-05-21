import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../home/home';
import About from '../about/about';
import Blog from '../blog/blog';
import Open from '../open/open';
import Technologies from '../technologies/technologies';
import './header_fixed.scss';
import $ from 'jquery';

class HeaderFixed extends React.Component {
  componentDidMount() {
    $('.nav-link').click(function(){
      $('.nav-item').removeClass('active');
      $(this).parent('.nav-item').addClass('active');
    });
  }

  render() {
    return (
      <Router>
      <main>
        <nav className='header_fixed'>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className='nav-link' >
                  <i class="fas fa-home"></i>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" className='nav-link' >
                  <i class="far fa-address-card"></i>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/technologies" className='nav-link' >
                <i class="fas fa-terminal"></i>
                  Tech
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/blog" className='nav-link' >
                  <i class="fab fa-blogger-b"></i>
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/open" className='nav-link' >
                  <i class="fab fa-osi"></i>
                  OSS 
                </Link>
              </li>
            </ul>
        </nav>
        <div className='content container'>
          <Switch>
            <Route path="/open">
              <Open />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/technologies">
              <Technologies />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> 
        </div>
      </main>  
      </Router>  
    );
  }
}

export default HeaderFixed;
