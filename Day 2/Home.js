import React, { useState } from 'react';
import Navbar from './Navbar';
import Offer from './Offer';
import Footer from './Footer';
import PromotionalBanner from './PromotionalBanner';
import Category from './Category';
import '../assets/css/Home.css';
import landingImage from '../assets/img/home.jpg'; // Make sure the image path is correct

function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [cart, setCart] = useState([]);

    const handleLoginOpen = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleSignupOpen = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    const handleLoginClose = () => {
        setShowLogin(false);
    };

    const handleSignupClose = () => {
        setShowSignup(false);
    };

    const handleLoginSuccess = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    const updateCartItem = (updatedCart) => {
        setCart(updatedCart);
    };

    return (
        <div>
            <div className="home-container">
                <div className="landing-page">
                    <img src={landingImage} alt="Landing" className="landing-image" />
                    <div className="landing-content">
                        <h1>India's Leading Food & Grocery <span className="highlight">Eco Mart</span></h1>
                        <p>We are an Omni Channel Retailer catering to all shopping occasions of our customers through Supermarkets, Hypermarkets and e-grocery with measures in eliminating denial to grocery access.</p>
                        <p><i>Think grocery, Think Eco Mart.</i></p>
                        <a href="/products" className="explore-link">Explore</a>
                    </div>
                </div>
                <PromotionalBanner />
                <Offer />
                <Category />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
