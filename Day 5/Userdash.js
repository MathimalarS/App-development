import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Userdash.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import admin from '../assets/img/admin.avif';
import cabbage from '../assets/img/almondmilk.jpg';
import cooker from '../assets/img/bread.jpeg';
import kiwi from '../assets/img/chicken.jpg';

const User = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('profile');
  const [isEditing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Nivetha',
    email: 'nivetha@gmail.com',
    address: '123 Main St, Anytown, USA',
    contact: '+91 8148735736',
    dob: '1995-05-01',
    gender: 'Female',
  });
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleEditClick = () => {
    setEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save logic goes here
    setEditing(false);
  };

  const orders = [
    { image: cabbage, name: 'Product 1', price: '$29.99', date: 'July 25, 2024' },
    { image: cooker, name: 'Product 2', price: '$19.99', date: 'July 20, 2024' },
    { image: kiwi, name: 'Product 3', price: '$49.99', date: 'July 15, 2024' },
  ];

  const ProductCard = ({ image, name, price, date }) => {
    return (
      <div className="product-card">
        <img src={image} alt={name} className="product-image" />
        <div className="product-details">
          <h3>{name}</h3>
          <p><strong>Price:</strong> {price}</p>
          <p><strong>Order Date:</strong> {date}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="user-dashboard">
      <header className="main-header">
        <i className="fas fa-bars menu-icon" onClick={toggleSidebar}></i>
        <div className="header-right">
          <input type="text" placeholder="Search" />
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle" onClick={toggleUserDropdown}></i>
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              <div className="user-info">
                <img src={admin} alt="User Avatar" className="user-avatar" />
                <p className="user-name">{profile.name}</p>
                <p className="user-email">{profile.email}</p>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>ShopTimiz</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => handleSectionChange('profile')}><i className="fas fa-user"></i> My Profile</li>
            <li onClick={() => handleSectionChange('orders')}><i className="fas fa-box"></i> My Orders</li>
            <li onClick={() => handleSectionChange('payment')}><i className="fas fa-credit-card"></i> Payment</li>
            <li onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> <span>Logout</span></li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {selectedSection === 'profile' && (
          <section id="profile">
            <div className="profile-header">
              <h2>My Profile</h2>
              <img src={admin} alt="Profile" className="profile-avatar" />
            </div>
            <div className="profile-info">
              <div className="profile-details">
                {isEditing ? (
                  <div className="profile-edit-form">
                    <label>
                      <span>Name:</span>
                      <input type="text" name="name" value={profile.name} onChange={handleChange} className="line-input" />
                    </label>
                    <label>
                      <span>Email:</span>
                      <input type="email" name="email" value={profile.email} onChange={handleChange} className="line-input" />
                    </label>
                    <label>
                      <span>Address:</span>
                      <input type="text" name="address" value={profile.address} onChange={handleChange} className="line-input" />
                    </label>
                    <label>
                      <span>Contact:</span>
                      <input type="text" name="contact" value={profile.contact} onChange={handleChange} className="line-input" />
                    </label>
                    <label>
                      <span>Date of Birth:</span>
                      <input type="date" name="dob" value={profile.dob} onChange={handleChange} className="line-input" />
                    </label>
                    <label>
                      <span>Gender:</span>
                      <select name="gender" value={profile.gender} onChange={handleChange} className="line-input">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </label>
                    <div className="button-container">
                      <button className="save-button" onClick={handleSave}>Save Changes</button>
                      <button onClick={handleEditClick}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="profile-info-line">
                    <p><strong>Name:</strong> {profile.name}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Address:</strong> {profile.address}</p>
                    <p><strong>Contact:</strong> {profile.contact}</p>
                    <p><strong>Date of Birth:</strong> {profile.dob}</p>
                    <p><strong>Gender:</strong> {profile.gender}</p>
                    <button className="edit-button" onClick={handleEditClick}>Edit</button>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {selectedSection === 'orders' && (
          <section id="orders">
            <h2>My Orders</h2>
            <div className="orders-grid">
              {orders.map((order, index) => (
                <ProductCard
                  key={index}
                  image={order.image}
                  name={order.name}
                  price={order.price}
                  date={order.date}
                />
              ))}
            </div>
          </section>
        )}

        {selectedSection === 'payment' && (
          <section id="payment">
            <h2>Payment</h2>
            <div className="payment-info">
              <p><strong>Amount Paid:</strong> $99.97</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default User;
