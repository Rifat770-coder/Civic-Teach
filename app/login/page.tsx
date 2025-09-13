'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [userType, setUserType] = useState('citizen');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData, userType);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-emerald-200 flex items-center justify-center p-4" suppressHydrationWarning={true}>
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Illustration */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              {/* Logo */}
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">🏛️</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Digital Governance</h3>
                  <p className="text-sm text-gray-600">Secure Access Portal</p>
                </div>
              </div>
              
              {/* Illustration placeholder */}
              <div className="flex items-center justify-center h-80">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Secure Digital Access</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Access all government services with enterprise-grade security and seamless authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <span className="text-white font-bold text-2xl">🔐</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600 font-medium">Sign in to access the Digital Governance Hub</p>
            </div>

            {/* User Type Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Login As</h2>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType('citizen')}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 font-semibold ${
                    userType === 'citizen'
                      ? 'bg-gradient-to-br from-green-500 to-teal-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                  }`}
                >
                  <div className="text-sm font-bold">👤 Citizen</div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('official')}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 font-semibold ${
                    userType === 'official'
                      ? 'bg-gradient-to-br from-green-500 to-teal-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                  }`}
                >
                  <div className="text-sm font-bold">🏛️ Official</div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('admin')}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 font-semibold ${
                    userType === 'admin'
                      ? 'bg-gradient-to-br from-green-500 to-teal-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                  }`}
                >
                  <div className="text-sm font-bold">⚙️ Admin</div>
                </button>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <span className="ml-3 text-sm font-semibold text-gray-700">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-green-600 hover:text-green-700 font-semibold transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 px-6 rounded-2xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                🔐 Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Don't have an account?{' '}
                <Link href="/register" className="text-green-600 hover:text-green-700 font-bold transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Alternative Login Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-semibold">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="w-full inline-flex justify-center items-center py-3 px-4 border-2 border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>

                <button className="w-full inline-flex justify-center items-center py-3 px-4 border-2 border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Aadhaar
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h3 className="text-sm font-bold text-yellow-800 mb-1">🔒 Security Notice</h3>
                  <p className="text-xs text-yellow-700 font-medium leading-relaxed">
                    Never share your login credentials. Always logout from public computers.
                    Report suspicious activities to security@gov.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
