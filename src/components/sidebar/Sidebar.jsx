import React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
class Sidebar extends Component {
  
  render() {
    return (
      <div className="sidebar-container">
        <ul className="sidebar-menu">
          {this.props.links.map((link, index) => (
            <li className="sidebar-menu-item">
              <Link key={index} to={link.route}>
                {link.icon}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Sidebar;
