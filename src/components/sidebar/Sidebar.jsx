import React, { Component } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sidebar-container">
        <ul className="sidebar-menu">
          {this.props.links.map((link) => (
            <li className="sidebar-menu-item">
              <Link to={link.route}>
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
