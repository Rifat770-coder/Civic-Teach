'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Account Information
    password: '',
    confirmPassword: '',
    userType: 'citizen',
    
    // Verification
    aadhaar: '',
    pan: '',
    
    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    updatesAccepted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final registration
      console.log('Registration data:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-emerald-200 flex items-center justify-center p-4" suppressHydrationWarning={true}>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Illustration */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              {/* Logo */}
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">Larana, Inc.</h3>
                  <p className="text-sm text-gray-600">123 Anywhere St., Any City</p>
                </div>
              </div>
              
              {/* Illustration - Person at desk */}
              <div className="flex items-center justify-center h-80">
                <div className="text-center">
                  <div className="relative mb-8">
                    {/* Person illustration */}
                    <div className="relative w-48 h-40 mx-auto">
                      {/* Desk */}
                      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg shadow-lg"></div>
                      
                      {/* Person */}
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                        {/* Head */}
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full mb-2 mx-auto"></div>
                        {/* Body */}
                        <div className="w-16 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-lg mx-auto"></div>
                      </div>
                      
                      {/* Computer */}
                      <div className="absolute bottom-12 right-8 w-8 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-sm"></div>
                      
                      {/* Plant */}
                      <div className="absolute bottom-12 left-2 w-4 h-6 bg-gradient-to-t from-green-600 to-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">Create a New Account</h4>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    Join Larana Inc Today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full max-w-lg mx-auto lg:mx-0">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            
            {/* Toggle Buttons */}
            <div className="flex mb-8">
              <Link href="/login" className="flex-1 text-center py-3 px-4 text-gray-600 hover:text-gray-800 font-semibold transition-colors">
                Sign In
              </Link>
              <div className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-2xl font-bold shadow-lg">
                Register
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Create a New Account</h1>
              <p className="text-gray-600 font-medium">Join Larana Inc Today</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-300 ${
                        currentStep >= step
                          ? 'bg-gradient-to-br from-green-500 to-teal-600 text-white transform scale-110'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step}
                    </div>
                    {step < 4 && (
                      <div
                        className={`w-full h-2 mx-2 rounded-full transition-all duration-300 ${
                          currentStep > step ? 'bg-gradient-to-r from-green-500 to-teal-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-600 font-semibold">
                <span>Personal Info</span>
                <span>Address</span>
                <span>Account</span>
                <span>Verification</span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">👤 Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your first name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your last name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      />
                    </div>
                  </div>

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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Address Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">🏠 Address Information</h2>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Complete Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="House/Flat No, Street, Area"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your city"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        State
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      >
                        <option value="">Select State</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CG">Chhattisgarh</option>
                        <option value="GA">Goa</option>
                        <option value="GJ">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="WB">West Bengal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter 6-digit PIN code"
                      maxLength={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Account Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">🔐 Account Information</h2>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Account Type
                    </label>
                    <select
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                    >
                      <option value="citizen">👤 Citizen</option>
                      <option value="business">💼 Business Owner</option>
                      <option value="ngo">🤝 NGO Representative</option>
                    </select>
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
                      placeholder="Create a strong password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                    />
                    <p className="text-xs text-gray-600 mt-2 font-medium">
                      Password must be at least 8 characters with uppercase, lowercase, number, and special character
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Verification */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">✅ Verification & Agreements</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        Aadhaar Number
                      </label>
                      <input
                        type="text"
                        name="aadhaar"
                        value={formData.aadhaar}
                        onChange={handleInputChange}
                        required
                        placeholder="XXXX XXXX XXXX"
                        maxLength={12}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        PAN Number (Optional)
                      </label>
                      <input
                        type="text"
                        name="pan"
                        value={formData.pan}
                        onChange={handleInputChange}
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-all duration-300 bg-white/80 backdrop-blur-sm font-medium text-gray-800 shadow-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <label className="flex items-start cursor-pointer p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-300">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
                      />
                      <span className="ml-3 text-sm font-semibold text-gray-700">
                        📋 I agree to the{' '}
                        <Link href="/terms" className="text-green-600 hover:text-green-700 underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/conditions" className="text-green-600 hover:text-green-700 underline">
                          Conditions of Use
                        </Link>
                      </span>
                    </label>

                    <label className="flex items-start cursor-pointer p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-300">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        required
                        className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
                      />
                      <span className="ml-3 text-sm font-semibold text-gray-700">
                        🔒 I agree to the{' '}
                        <Link href="/privacy" className="text-green-600 hover:text-green-700 underline">
                          Privacy Policy
                        </Link>{' '}
                        and consent to data processing
                      </span>
                    </label>

                    <label className="flex items-start cursor-pointer p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-300">
                      <input
                        type="checkbox"
                        name="updatesAccepted"
                        checked={formData.updatesAccepted}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
                      />
                      <span className="ml-3 text-sm font-semibold text-gray-700">
                        📧 I would like to receive updates about new services and features
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className={`px-8 py-3 border-2 border-gray-300 rounded-2xl text-gray-700 hover:bg-gray-50 transition-all duration-300 font-bold shadow-lg hover:shadow-xl ${
                    currentStep === 1 ? 'invisible' : ''
                  }`}
                >
                  ← Previous
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-2xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  {currentStep === 4 ? '🎉 Create Account' : 'Next Step →'}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Already have an account?{' '}
                <Link href="/login" className="text-green-600 hover:text-green-700 font-bold transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-2xl shadow-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div>
                <h3 className="text-sm font-bold text-green-800 mb-1">🔒 Your Data is Secure</h3>
                <p className="text-xs text-green-700 font-medium leading-relaxed">
                  All information is encrypted and stored securely. We comply with government data protection standards 
                  and will never share your personal information without consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
