import React, { Component } from'react';
import './header.css';
import { NavLink } from'react-router-dom';
// import logo from'../../../images/logo.png';

class ForumHeader extends Component{
  render() {
    return (
      <header className="Header mt-2">
        <nav>
          <ul>
            <li>
              <b>Secciones</b>:
            </li>
            <li>
              <NavLink exact to="/forum" activeClassName="is-selected">
                Novedades
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/beta" activeClassName="is-selected">
                Beta
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/propuestas" activeClassName="is-selected">
                  Propuestas
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum/copa-argentina" activeClassName="is-selected">
                  Denuncias
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default ForumHeader;