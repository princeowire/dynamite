import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation (you can enhance this)
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    // Simulate successful login
    // In real app: call your backend API here
    const userData = {
      email,
      isAuthenticated: true,
    };

    // Save to localStorage (persists across refresh)
    localStorage.setItem('user', JSON.stringify(userData));

    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
    }

    // Redirect to dashboard
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <img
        src="/logo.jpg" // Replace with your actual logo path
        alt="HotWallet Logo"
        className="w-12 h-12 mb-8"
      />

      {/* Main Card */}
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-18 0v1.5a2.5 2.5 0 004 0V12" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.656-1.344-3-3-3s-3 1.344-3 3v2H4v8h16v-8h-2v-2zm-6 0c0-.552.448-1 1-1s1 .448 1 1v2H6v-2zm4 6a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Create Account Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Create account
            </Link>
          </p>

          {/* OR Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500 bg-white">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Use Phrase Button */}
          <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 rounded-lg flex items-center justify-center gap-3 transition duration-200">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Use Phrase
          </button>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-8 flex justify-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">
            Privacy Notice
          </a>
          <a href="#" className="hover:text-gray-700">
            Term of service
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
