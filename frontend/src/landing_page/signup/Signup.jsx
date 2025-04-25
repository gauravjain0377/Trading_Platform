import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.username.trim()) tempErrors.username = 'Username is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email';
    }
    if (!formData.password) tempErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = 'Passwords do not match';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Submitted:', formData);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center signup-bg">
      <motion.div
        className="row w-100 shadow-lg rounded signup-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Left Image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-0">
          <img src="media/images/signups.png" alt="Signup Visual" className="img-fluid signup-image" />
        </div>

        {/* Right Form */}
        <div className="col-md-6 p-5 bg-white rounded-end">
          <h3 className="text-center mb-4">Create your Stox Trading Account</h3>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`form-control ${errors.username && 'is-invalid'}`}
            />
            {errors.username && <div className="text-danger small">{errors.username}</div>}

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className={`form-control ${errors.email && 'is-invalid'}`}
            />
            {errors.email && <div className="text-danger small">{errors.email}</div>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`form-control ${errors.password && 'is-invalid'}`}
            />
            {errors.password && <div className="text-danger small">{errors.password}</div>}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
            />
            {errors.confirmPassword && <div className="text-danger small">{errors.confirmPassword}</div>}

            <button type="submit" className="btn btn-primary fw-bold mt-2">
              Sign Up
            </button>
          </form>

          <div className="text-center mt-3">
            <small>
              Already have an account?{' '}
              <Link to="/login" className="text-primary">
                Login here
              </Link>
            </small>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
