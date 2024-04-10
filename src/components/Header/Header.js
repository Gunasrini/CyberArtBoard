import React from "react";
import '../Header/Header.css';
import logo from '../../assets/images/logo.PNG';
import { Link } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const userData = localStorage.getItem('user');
  const parsedUserData = JSON.parse(userData);
  console.log('User data retrieved from localStorage:', parsedUserData);
  const navigate = useNavigate();
  function Logout(){
    navigate('/login');
  }
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-sm">
          <div className="container">
            <Link className="navbar-brand" to='/'>
              <img src={logo} alt="Cyber ArtBoard" className="site-logo" />
            </Link>
            <div className="header-buttons">
            <div className="welcome-container">
              <p className="welcome-message">Welcome <span>{parsedUserData?.name}</span></p>
            </div>              
              <Link to='login' className="icons" title="Profile">
                <i className="far fa-user"></i>
              </Link>
              <li className="nav-item dropdown">
                <Link className="nav-link" role="button" data-bs-toggle="dropdown"><i className="fas fa-bars"></i></Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/about-us">About us</Link></li>
                  <li><Link className="dropdown-item" to="/sustainable-custom-apparel">Sustainable</Link></li>
                  <li><Link className="dropdown-item" to="/products/text2design">Products</Link></li>
                  <li><Link className="dropdown-item">Brochures</Link></li>
                  <li><Link className="dropdown-item">Careers</Link></li>
                  <li><Link className="dropdown-item">Newsroom</Link></li>
                  <li><Link className="dropdown-item">FAQ</Link></li>
                  <li><Link className="dropdown-item">Distributor Program</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                </ul>
              </li>
              <RiLogoutCircleLine className="logutbutton" title="Logout" onClick={Logout} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}