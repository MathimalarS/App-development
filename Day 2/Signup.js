import React, { useState } from 'react';
import '../assets/css/Signup.css';

const Signup = ({ onClose,onLoginclick }) => {
    const [formData, setFormData] = useState({
        user: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validatePassword(formData.password)) {
            if (formData.password === formData.confirmPassword) {
                console.log(formData);
                onClose(); 
            } else {
                setError("Passwords do not match.");
            }
        } else {
            setError("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        }
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(password);
    };

    return (
        <div className="signup-container" onClick={onClose}>
            <div className="signup-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="user"
                        value={formData.user}
                        onChange={handleChange}
                        required
                    />
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
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-button">Sign Up</button>
                    <p className="login-message">
                        Already have an account? <span onClick={onLoginclick} className="login-link">Login</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
