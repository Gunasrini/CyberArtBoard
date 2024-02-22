import React from "react";
import '../Header/Header.css';
import logo from '../../assets/images/logo.PNG';
import loginIcon from '../../assets/images/Icons/login.png';
import cartIcon from '../../assets/images/Icons/cart.png';
import folderIcon from '../../assets/images/Icons/folder.png';
import contactIcon from '../../assets/images/Icons/contact.png';
import userIcon from '../../assets/images/Icons/user.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-sm">
          <div className="container">
            <Link className="navbar-brand" to='/'>
              <img src={logo} alt="Cyber ArtBoard" className="site-logo" />
            </Link>
            <div className="header-buttons">
              <a className="icons" title="Profile">
                <i className="far fa-user"></i>
              </a>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown"><i className="fas fa-bars"></i></a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/about-us">About us</Link></li>
                  <li><Link className="dropdown-item" to="/sustainable-custom-apparel">Sustainable</Link></li>
                  <li><Link className="dropdown-item" to="/products/text2design">Products</Link></li>
                  <li><a className="dropdown-item" href="#">Brochures</a></li>
                  <li><a className="dropdown-item" href="#">Careers</a></li>
                  <li><a className="dropdown-item" href="#">Newsroom</a></li>
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                  <li><a className="dropdown-item" href="#">Distributor Program</a></li>
                  <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                </ul>
              </li>
              {/* <Link to="/login" className="icons login" title="Login / Signup">
                <img src={loginIcon} alt="" />
              </Link>
              <a className="icons cart" title="Cart">
                <img src={cartIcon} alt="" />
              </a>
              <a className="icons folder" title="Folder">
                <img src={folderIcon} alt="" />
              </a>
              <Link to="/contact" className="icons contact" title="Contact">
                <img src={contactIcon} alt="" />
              </Link>
              <a className="icons username">
                <img src={userIcon} alt="" />Username
              </a> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
