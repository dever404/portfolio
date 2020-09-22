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
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({      
      isToggleOn: !state.isToggleOn    
    }));
  } 
  render() {
    return (
      <Router>
      <main>
        <nav className= { this.state.isToggleOn ? 'header_nav hide_menu' : 'header_nav show_menu' }>
            <a href='#' className='close_menu' onClick={this.handleClick}>
              <i className={ this.state.isToggleOn ? 'fas fa-bars' : 'fas fa-times'}> </i>
            </a> 
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className='nav-link' onClick={this.handleClick} >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/about" className='nav-link' onClick={this.handleClick} >About</Link>
              </li>
              <li class="nav-item">
                <Link to="/blog" className='nav-link' onClick={this.handleClick} >Blog</Link>
              </li>
            </ul>
        </nav>
        <div className='content container'>
          <Switch>
            <Route path="/blog">
              <Blog />
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

export default Header;
