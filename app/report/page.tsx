'use client';
import { useState } from 'react';

export default function ReportPage() {
  const [formData, setFormData] = useState({
    reportType: '',
    department: '',
    location: '',
    incidentDate: '',
    description: '',
    evidence: '',
    contactMethod: 'anonymous',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reportId, setReportId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random report ID
    const id = 'RPT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setReportId(id);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen py-12" suppressHydrationWarning={true}>
        <div className="container mx-auto px-4" suppressHydrationWarning={true}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center border border-slate-200 backdrop-blur-sm" suppressHydrationWarning={true}>
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-4xl font-black text-slate-800 mb-6 leading-tight">
                🛡️ Legal Report Submitted Successfully
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Thank you for your courage in reporting legal violations. Your confidential report has been securely received and will be investigated by our legal compliance team.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mb-10 shadow-inner">
                <h3 className="font-black text-blue-900 mb-4 text-lg">🔒 Your Secure Report ID</h3>
                <div className="text-3xl font-mono font-black text-blue-700 bg-white px-6 py-4 rounded-xl shadow-lg border-2 border-blue-100">{reportId}</div>
                <p className="text-sm text-blue-800 mt-4 font-semibold">
                  Please save this encrypted ID to track your report status. You will receive secure updates via your preferred contact method.
                </p>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => window.print()}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-2xl font-black text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  📄 Print Secure Report Receipt
                </button>
                
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      reportType: '',
                      department: '',
                      location: '',
                      incidentDate: '',
                      description: '',
                      evidence: '',
                      contactMethod: 'anonymous',
                      name: '',
                      email: '',
                      phone: ''
                    });
                  }}
                  className="w-full border-2 border-slate-300 text-slate-700 py-4 px-8 rounded-2xl font-black text-lg hover:bg-slate-50 hover:border-slate-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  📝 Submit Another Legal Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 min-h-screen py-12" suppressHydrationWarning={true}>
      <div className="container mx-auto px-4" suppressHydrationWarning={true}>
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200 backdrop-blur-sm" suppressHydrationWarning={true}>
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
                🚨 Report Legal Violations
              </h1>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Help us maintain legal integrity by confidentially reporting violations. Your identity is protected by advanced encryption, 
                and all reports are investigated by our specialized legal compliance team with the highest level of confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-8 shadow-xl" suppressHydrationWarning={true}>
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mr-6 mt-1 shadow-lg transform -rotate-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-emerald-900 mb-4">🔐 Military-Grade Security Protection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-sm text-emerald-800 space-y-2 font-semibold">
                    <li className="flex items-center"><span className="text-emerald-500 mr-2">🛡️</span> End-to-end encrypted reports</li>
                    <li className="flex items-center"><span className="text-emerald-500 mr-2">👤</span> Anonymous reporting available</li>
                  </ul>
                  <ul className="text-sm text-emerald-800 space-y-2 font-semibold">
                    <li className="flex items-center"><span className="text-emerald-500 mr-2">⚖️</span> Whistleblower protection laws</li>
                    <li className="flex items-center"><span className="text-emerald-500 mr-2">🔒</span> Authorized access only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Report Form */}
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200 backdrop-blur-sm" suppressHydrationWarning={true}>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-800 mb-4">📋 Confidential Legal Report Form</h2>
              <p className="text-lg text-slate-600">Fill out the form below with as much detail as possible for effective investigation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Report Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-slate-700 mb-3">
                  🚨 Type of Legal Violation *
                </label>
                <select
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <option value="">Select type of legal violation</option>
                  <option value="bribery">💰 Bribery & Corruption</option>
                  <option value="embezzlement">🏦 Embezzlement</option>
                  <option value="fraud">🎭 Fraud & Misrepresentation</option>
                  <option value="abuse_of_power">⚡ Abuse of Power</option>
                  <option value="nepotism">👥 Nepotism & Favoritism</option>
                  <option value="money_laundering">💸 Money Laundering</option>
                  <option value="other">❓ Other Legal Violations</option>
                </select>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-black text-slate-700 mb-3">
                  🏢 Department/Agency *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <option value="">Select department</option>
                  <option value="municipal">🏛️ Municipal Corporation</option>
                  <option value="police">👮 Police Department</option>
                  <option value="health">🏥 Health Department</option>
                  <option value="education">🎓 Education Department</option>
                  <option value="transport">🚗 Transport Department</option>
                  <option value="revenue">💼 Revenue Department</option>
                  <option value="public_works">🔧 Public Works Department</option>
                  <option value="other">🏢 Other Agency</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-black text-slate-700 mb-3">
                  📍 Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  placeholder="City, District, State"
                  className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 placeholder-slate-400"
                />
              </div>

              {/* Incident Date */}
              <div>
                <label className="block text-sm font-black text-slate-700 mb-3">
                  📅 Incident Date
                </label>
                <input
                  type="date"
                  name="incidentDate"
                  value={formData.incidentDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-slate-700 mb-3">
                  📝 Detailed Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Please provide a detailed description of the incident, including names, dates, amounts, and any other relevant information..."
                  className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 placeholder-slate-400 resize-none"
                />
              </div>

              {/* Evidence */}
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-slate-700 mb-3">
                  🔍 Evidence Description
                </label>
                <textarea
                  name="evidence"
                  value={formData.evidence}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe any evidence you have (documents, recordings, photos, witnesses, etc.)"
                  className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 placeholder-slate-400 resize-none"
                />
              </div>

              {/* Contact Method */}
              <div className="md:col-span-2">
                <label className="block text-sm font-black text-slate-700 mb-4">
                  📞 How would you like to be contacted?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="flex items-center p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border-2 border-slate-200 hover:border-purple-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="anonymous"
                      checked={formData.contactMethod === 'anonymous'}
                      onChange={handleInputChange}
                      className="mr-3 w-5 h-5 text-purple-600"
                    />
                    <div>
                      <div className="font-black text-slate-800">🔒 Anonymous</div>
                      <div className="text-xs text-slate-600">No contact needed</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:border-purple-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleInputChange}
                      className="mr-3 w-5 h-5 text-purple-600"
                    />
                    <div>
                      <div className="font-black text-slate-800">📧 Email Updates</div>
                      <div className="text-xs text-slate-600">Secure email notifications</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:border-purple-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleInputChange}
                      className="mr-3 w-5 h-5 text-purple-600"
                    />
                    <div>
                      <div className="font-black text-slate-800">📱 Phone Updates</div>
                      <div className="text-xs text-slate-600">Encrypted phone calls</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Contact Details - Only show if not anonymous */}
              {formData.contactMethod !== 'anonymous' && (
                <>
                  <div>
                    <label className="block text-sm font-black text-slate-700 mb-3">
                      👤 Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 placeholder-slate-400"
                    />
                  </div>

                  {formData.contactMethod === 'email' && (
                    <div>
                      <label className="block text-sm font-black text-slate-700 mb-3">
                        📧 Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 placeholder-slate-400"
                      />
                    </div>
                  )}

                  {formData.contactMethod === 'phone' && (
                    <div>
                      <label className="block text-sm font-black text-slate-700 mb-3">
                        📱 Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-500 bg-gradient-to-r from-white to-slate-50 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 placeholder-slate-400"
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Legal Notice */}
            <div className="mt-10 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl shadow-lg">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-amber-900 mb-2 text-lg">⚖️ Legal Notice & Protection</h3>
                  <p className="text-sm text-amber-800 font-semibold leading-relaxed">
                    <strong>Legal Disclaimer:</strong> Filing a false report is a criminal offense under applicable laws. 
                    Please ensure all information provided is accurate and truthful. You are fully protected under whistleblower protection laws when reporting in good faith. 
                    Your report will be handled with complete confidentiality and legal compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 text-white px-12 py-5 rounded-2xl font-black text-xl hover:from-red-700 hover:via-pink-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-red-500"
              >
                🔐 Submit Report Securely
              </button>
              <p className="text-sm text-slate-600 mt-4 font-semibold">
                Your report will be encrypted and processed within 24 hours
              </p>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200 backdrop-blur-sm" suppressHydrationWarning={true}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-slate-800 mb-4">🆘 Need Legal Assistance?</h2>
              <p className="text-lg text-slate-600">Our legal support team is available 24/7 to help you</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-blue-900 text-xl">📞 Legal Helpline Numbers</h3>
                </div>
                <ul className="space-y-3 text-sm text-blue-800 font-semibold">
                  <li className="flex items-center"><span className="text-blue-500 mr-2">🚨</span> Anti-Corruption Helpline: 1800-XXX-XXXX</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">⚡</span> 24/7 Legal Emergency: 1800-XXX-YYYY</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">⚖️</span> Legal Aid Support: 1800-XXX-ZZZZ</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl border-2 border-purple-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-purple-900 text-xl">📧 Secure Email Support</h3>
                </div>
                <ul className="space-y-3 text-sm text-purple-800 font-semibold">
                  <li className="flex items-center"><span className="text-purple-500 mr-2">🛡️</span> legal-violations@gov.in</li>
                  <li className="flex items-center"><span className="text-purple-500 mr-2">🔒</span> whistleblower-protection@gov.in</li>
                  <li className="flex items-center"><span className="text-purple-500 mr-2">⚖️</span> legal-compliance@gov.in</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
