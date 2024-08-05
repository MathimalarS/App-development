import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/img/Eco.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Login';
import Signup from './Signup';
import CitySearchPopup from './CitySearchPopup';
import Cart from './Cart';
import UserPopup from './UserPopup';

const Navbar = ({ cart, setCart, isLoggedIn, setIsLoggedIn }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCitySearchPopup, setShowCitySearchPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [searchPlaceholder, setSearchPlaceholder] = useState("chips");
  const [transitionClass, setTransitionClass] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };

  useEffect(() => {
    const placeholders = ["chips", "fruits", "vegetables", "milk"];
    let index = 0;
    const interval = setInterval(() => {
      setTransitionClass('fade-out');
      setTimeout(() => {
        index = (index + 1) % placeholders.length;
        setSearchPlaceholder(placeholders[index]);
        setTransitionClass('fade-in');
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLoginSuccess = (admin) => {
    setIsLoggedIn(!admin); // Toggle logged in state based on whether the user is an admin
    setShowLoginPopup(false); // Close the login popup
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Supermarket Logo" className="logo" />
            </Link>
          </div>
          <div className="title">
            <h1 className="eco">Eco <span className="mart">Mart</span></h1>
          </div>
        </div>
        <div className="navbar-center">
          <div className="delivery-text" onClick={() => setShowCitySearchPopup(true)}>
            Your Location <span className="down-arrow">▼</span>
          </div>
        </div>
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              value={searchTerm} 
              onChange={handleSearchChange} 
              placeholder={`Search "${searchPlaceholder}"`} 
              className={`search-placeholder ${transitionClass}`} 
            />
          </form>
        </div>
        <div className="navbar-right">
          {isLoggedIn ? (
            <div className="user-icon" onClick={() => setShowUserPopup(!showUserPopup)}>
              <i className="fas fa-user"></i>
            </div>
          ) : (
            <button className="login-button" onClick={() => setShowLoginPopup(true)}>Login</button>
          )}
          <div className="cart-icon" onClick={() => setShowCartPopup(true)}>
            <i className="fas fa-shopping-cart"></i>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </div>
      </nav>
      {showLoginPopup && <Login onClose={() => setShowLoginPopup(false)} onSignupClick={() => setShowSignupPopup(true)} onLoginSuccess={handleLoginSuccess} />}
      {showSignupPopup && <Signup onClose={() => setShowSignupPopup(false)} />}
      {showCitySearchPopup && <CitySearchPopup onClose={() => setShowCitySearchPopup(false)} />}
      {showCartPopup && (
        <div className="cart-popup">
          <button className="close-button" onClick={() => setShowCartPopup(false)}>×</button>
          <Cart cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} closeCart={() => setShowCartPopup(false)} />
        </div>
      )}
      {showUserPopup && <UserPopup onClose={() => setShowUserPopup(false)} onLogout={() => setIsLoggedIn(false)} />}
    </>
  );
};

export default Navbar;
