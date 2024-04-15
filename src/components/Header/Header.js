import React from "react";
import { useState } from "react";
import '../Header/Header.css';
import logo from '../../assets/images/logo.PNG';
import { Link } from "react-router-dom";
// import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  // const [loading, setLoading] = useState(false);
  const [LogOut,setLogout]=useState(false);
  const userData = localStorage.getItem('user');
  const parsedUserData = JSON.parse(userData);
  console.log('User data retrieved from localStorage:', parsedUserData);
  const navigate = useNavigate();
  const Logout=(e)=>{
    e.preventDefault();
    // alert("are you sure you want to signout !");
    fetch('https://cyberartboard.zeroinfo.in/api/post-logout', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Network response was not ok.');
})
.then(data => {
  console.log('Logout successful:', data);
  setLogout(true);
  navigate('/');

})
.catch(error => {
  console.error('Logout failed:', error);
});
  // setLoading(false);
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
            {/* <div className="welcome-container">
              <p className="welcome-message">Welcome <span>{parsedUserData.name}</span></p>
            </div>               */}
              {/* <Link to='login' className="icons" title="Profile">
                <i className="far fa-user"></i>
              </Link> */}
              <li className="nav-item dropdown">
                <Link className="nav-link" role="button" data-bs-toggle="dropdown"><i className="far fa-user"></i></Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  { LogOut===false &&<li><Link className="dropdown-item">{parsedUserData?.name}</Link></li>}
                  <li><Link className="dropdown-item">{parsedUserData?.email}</Link></li>
                  <li><Link className="dropdown-item logout" onClick={Logout}>Sign Out</Link>
                  <div className="bottomLine"></div>
                  </li>
                  <li><Link className="dropdown-item">My Profile</Link></li>
                  <li><Link className="dropdown-item">My Design Library</Link></li>
                  <li><Link className="dropdown-item">My Orders</Link></li>
                  <li><Link className="dropdown-item">Invite My Friend</Link></li>
                  <li><Link className="dropdown-item">Payment Methods</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Support</Link></li>
                </ul>
              </li>
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
              {/* <RiLogoutCircleLine className="logutbutton" title="Logout" onClick={Logout} /> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
