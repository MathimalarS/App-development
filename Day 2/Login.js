import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/Login.css';

const Login = ({ onClose, onSignupClick, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = formData;

        const adminEmail = "admin@example.com";
        const adminPassword = "Admin123";

        if (email === "727822tucs111@skct.edu.in" && password === "Malarsav04") {
            onLoginSuccess(false);
            toast.success('Logged in successfully!');
            navigate('/');
        } else if (email === adminEmail && password === adminPassword) {
            onLoginSuccess(true);
            toast.success('Logged in successfully!');
            navigate('/admin');
        } else if (validatePassword(password)) {
            onLoginSuccess(false);
            toast.success('Logged in successfully!');
            navigate('/');
        } else {
            setError("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        }
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    const handleForgotPassword = () => {
        alert('An email has been sent to your registered email ID.');
    };

    return (
        <div className="login-container" onClick={onClose}>
            <div className="login-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <h1>Login</h1>
                <div className="detail">
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {error && <div className="error-message">{error}</div>}
                        <p className='divq'>
                            <div className='fp' onClick={handleForgotPassword}>
                                Forgot Password?
                            </div>
                        </p>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="submit-button">Login</button>
                        <p className="signup-message">
                            Don't have an account? <span onClick={onSignupClick} className="signup-link">Sign up</span>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
