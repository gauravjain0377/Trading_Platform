import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.emailOrUsername || !formData.password) {
      setError('All fields are required');
    } else {
      setError('');
      console.log('Logged In:', formData);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center login-bg">
      <motion.div
        className="row w-100 shadow-lg rounded login-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-0">
          <img src="media/images/signups.png" alt="Login Visual" className="img-fluid login-image" />
        </div>

        {/* Right Form */}
        <div className="col-md-6 p-5 bg-white rounded-end">
          <h3 className="text-center mb-4">Welcome back to Stox</h3>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.emailOrUsername}
              onChange={handleChange}
              className="form-control"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
            {error && <div className="text-danger small">{error}</div>}

            <div className="form-check mb-2">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <button type="submit" className="btn btn-primary fw-bold mt-2">
              Login
            </button>
          </form>

          <div className="text-center mt-3">
            <small>
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary">
                Signup here
              </Link>
            </small>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
