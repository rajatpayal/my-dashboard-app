import React, { useState } from 'react';
import './login.css'; // Add appropriate styles in this file
import logo from '../../assets/images/RAPID-X-LOGO-EXPORT.png'; // Ensure you have the correct path to your logo
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
          onLogin(data.token);
          localStorage.setItem('token', data.token);
        } else {
          setError(data.message || 'Login failed');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
      }
    };
  
    return (
      <div className="login-container">
        <div className="login-box">
          <img src={logo} alt="Logo" className="logo" />
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  };
  

export default Login;
