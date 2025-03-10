import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../Components/Redux/Slices/UserSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginFun = (e) => {
    e.preventDefault();

    // Mock login data for demonstration
    const userData = {
      email: e.target.email.value, // Extract email value from form
      fullname: "Fullname", // Replace with dynamic value if available
      password: e.target.password.value, // Extract password value from form
    };

    dispatch(login(userData)); // Dispatch login action with user data
    navigate('/'); // Redirect to home page
    console.log("User logged in:", userData);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 m-4 px-20 py-8 flex flex-col justify-between">
        <img src="../logo.png" alt="Logo" className="w-40 mx-auto" />
        
        {/* Login Form */}
        <div>
          <h2 className="text-center font-medium text-4xl">Welcome Back</h2>
          <p className="text-center mt-2 opacity-60">
            Enter your email and password to access your account
          </p>

          <form onSubmit={LoginFun} className="max-w-sm mx-auto mt-10">
            {/* Email Input */}
            <div className="mb-5">
              <label 
                htmlFor="email" 
                className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5" 
                placeholder="Enter your email" 
                required 
              />
            </div>
            {/* Password Input */}
            <div className="mb-5">
              <label 
                htmlFor="password" 
                className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            {/* Submit Button */}
            <button 
              type="submit" 
              className="text-white bg-violet-700 w-full hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Sign in
            </button>
          </form>
        </div>

        {/* Signup Link */}
        <div className="flex items-center space-x-2 mx-auto justify-center">
          <p>Don't have an account?</p>
          <Link 
            to="/signup" 
            className="hover:text-violet-700 font-medium hover:underline transition-all">
            Sign up
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full p-2 m-4 rounded-md overflow-hidden AuthBg">
        {/* Background or other elements can go here */}
      </div>
    </div>
  );
}

export default Login;
